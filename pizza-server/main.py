from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import firebase_admin
from firebase_admin import credentials, firestore
import json
import base64
import os
from datetime import datetime

# Initialize Firebase
def initialize_firebase():
    # Get the Firebase credentials from environment variable
    encoded_credentials = os.getenv("FIREBASE_CREDENTIALS")

    if not encoded_credentials:
        raise HTTPException(status_code=500, detail="Firebase credentials not found in environment variables")

    # Decode the base64-encoded JSON credentials
    decoded_credentials = base64.b64decode(encoded_credentials)
    credentials_dict = json.loads(decoded_credentials)

    # Initialize Firebase app
    cred = credentials.Certificate(credentials_dict)
    firebase_admin.initialize_app(cred)

initialize_firebase()
# Firestore client
db = firestore.client()

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Models
class User(BaseModel):
    name: str
    age: int
    gender: str
    coins: int = 500
    pizzasEaten: int = 0
    rank: int = 0

class PizzaLog(BaseModel):
    user_id: str
    timestamp: datetime
    slice_type: str

# Routes
@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI!"}

@app.post("/create-user/")
async def create_user(user: User):
    try:
        doc_ref = db.collection('users').document()
        user_dict = user.dict()
        user_dict['id'] = doc_ref.id
        doc_ref.set(user_dict)
        return {"id": doc_ref.id, **user_dict}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/all-users/") #change this to get after deploying
async def get_users():
    try:
        users = []
        docs = db.collection('users').stream()
        for doc in docs:
            users.append({"id": doc.id, **doc.to_dict()})
        return users
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.put("/update-user/{user_id}")
async def update_user(user_id: str, user: User):
    try:
        # Only include the fields that are allowed to be updated
        update_data = {field: getattr(user, field) for field in ["name", "age", "gender"]}
        
        doc_ref = db.collection('users').document(user_id)
        doc_ref.update(update_data)
        
        return {"message": "User updated successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.delete("/delete-user/{user_id}")
async def delete_user(user_id: str):
    try:
        user_ref = db.collection('users').document(user_id)
        user = user_ref.get()
        
        if not user.exists:
            raise HTTPException(status_code=404, detail="User not found")
        
        user_ref.delete()
        return {"message": "User deleted successfully"}
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
   
@app.post("/users/{user_id}/log-pizza")
async def log_pizza(user_id: str, pizza_log: PizzaLog):
    try:
        purchases = db.collection('purchasedSlices').where('user_id', '==', user_id).where('slice_type', '==', pizza_log.slice_type).stream()
        if not any(purchases):
            raise HTTPException(status_code=400, detail="No purchased slice available")
        
        db.collection('pizzaLogs').add({
            'user_id': user_id,
            'timestamp': datetime.now(),
            'slice_type': pizza_log.slice_type
        })
        
        user_ref = db.collection('users').document(user_id)
        user = user_ref.get().to_dict()
        user_ref.update({
            'pizzas_eaten': user['pizzas_eaten'] + 1
        })
        
        await update_rankings()
        
        return {"message": "Pizza logged successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# @app.post("/users/{user_id}/log-pizza")
# async def log_pizza(user_id: str, pizza_log: PizzaLog):
#     try:
#         # Check if user has purchased this slice type
#         purchases = db.collection('purchased_slices') \
#                       .where('user_id', '==', user_id) \
#                       .where('slice_type', '==', pizza_log.slice_type) \
#                       .stream()

#         if not any(purchases):
#             raise HTTPException(status_code=400, detail="No purchased slice available")

#         # Log the pizza in the 'pizza_logs' collection
#         db.collection('pizza_logs').add({
#             'user_id': user_id,
#             'timestamp': datetime.now(),
#             'slice_type': pizza_log.slice_type
#         })

#         # Update pizzas eaten count for the user
#         user_ref = db.collection('users').document(user_id)
#         user = user_ref.get()
#         if user.exists:
#             user_data = user.to_dict()
#             user_ref.update({
#                 'pizzas_eaten': user_data.get('pizzas_eaten', 0) + 1
#             })

#         # Update rankings
#         await update_rankings()

#         return {"message": "Pizza logged successfully"}

#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))

# async def update_rankings():
#     try:
#         # Get users ordered by pizzas eaten in descending order
#         users = db.collection('users') \
#                   .order_by('pizzas_eaten', direction=firestore.Query.DESCENDING) \
#                   .stream()

#         # Update rank for each user
#         for rank, user in enumerate(users, start=1):
#             db.collection('users').document(user.id).update({'rank': rank})

#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))

async def update_rankings():
    try:
        users = db.collection('users').order_by('pizzas_eaten', direction=firestore.Query.DESCENDING).stream()
        
        for rank, user in enumerate(users, 1):
            db.collection('users').document(user.id).update({'rank': rank})
            
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/leaderboard")
async def get_leaderboard():
    try:
        users = []
        docs = db.collection('users').order_by('rank').stream()
        for doc in docs:
            users.append({"id": doc.id, **doc.to_dict()})
        return users
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/all-pizza-slices/")
async def get_pizza_slices():
    try:
        slices = []
        docs = db.collection('pizzaslices').stream()
        for doc in docs:
            slices.append({"id": doc.id, **doc.to_dict()})
        return slices
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# @app.get("/pizza-slices/{slice_id}")
# async def get_pizza_slice(slice_id: str):
#     """Get details of a specific pizza slice"""
#     try:
#         doc = db.collection('pizzaSlices').document(slice_id).get()
#         if not doc.exists:
#             raise HTTPException(status_code=404, detail="Pizza slice not found")
#         return {"id": doc.id, **doc.to_dict()}
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))

@app.post("/buy-pizza")
async def buy_pizza(data: dict):
    try:
        user_id = data.get("userId")
        slice_id = data.get("sliceId")
        
        if not user_id:
            raise HTTPException(status_code=400, detail="User ID is required")
        
        if not slice_id:
            raise HTTPException(status_code=400, detail="Slice data with ID is required")
        
        user_ref = db.collection('users').document(user_id)
        user = user_ref.get()
        
        if not user.exists:
            raise HTTPException(status_code=404, detail="User not found")
        
        slice_ref = db.collection('pizzaslices').document(slice_id)
        slice_data = slice_ref.get()
        
        if not slice_data.exists:
            raise HTTPException(status_code=404, detail="Pizza slice not found")
        
        slice_dict = slice_data.to_dict()
        user_dict = user.to_dict()
        
        if user_dict['coins'] < slice_dict['price']:
            raise HTTPException(status_code=400, detail="Insufficient coins")
        
        user_ref.update({
            'coins': user_dict['coins'] - slice_dict['price']
        })
        
        purchased_slice_data = {
            'userId': user_id,
            'sliceId': slice_id,
            'price': slice_dict['price'],
            'timestamp': datetime.now()
        }
        
        db.collection('purchasedSlices').add(purchased_slice_data)
        
        return {"message": "Pizza purchased successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/users/purchased-slices")
async def get_user_purchased_slices(data: dict ):
    try:
        user_id = data.get("userId")
        if not user_id:
            raise HTTPException(status_code=400, detail="User ID is required")
        
        purchases = []
        
        docs = db.collection('purchasedSlices').where('userId', '==', user_id).stream()
        
        for doc in docs:
            purchase_data = doc.to_dict()
            
            slice_id = purchase_data.get('sliceId')
            if not slice_id:
                continue  # Skip documents without 'sliceId'
            
            slice_data = db.collection('pizzaslices').document(slice_id).get()
            if slice_data.exists:
                purchases.append({
                    "purchase_id": doc.id,
                    "slice": slice_data.to_dict(),
                    "timestamp": purchase_data.get('timestamp'),
                    "price_paid": purchase_data.get('price')
                })
        
        return purchases

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))