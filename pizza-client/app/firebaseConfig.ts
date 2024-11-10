import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace with your Firebase project configuration
const firebaseConfig = {
  type: "service_account",
  projectId: "pizza-main-d28e0",
  private_key_id: "d66ab5a1a15f3aa5fe5b81dfd6d45db854267f2a",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCZNwJphLylCVD7\nmtkELZ/kXD4FXkho/10ZDFYxiOGa4HbvHtp00Ixw9L7KaWc+zFm9Km0kX3R2wIMp\nZWkQx1lnPgqUOhY46LGLzxBSaYO+liZMwQwCUbJnJMOhY44xb2i7Najg7Eu/rzLr\nMPdTI8wxXn5b+osZrKcOHCMIJJ6oevxYKAdlW7e37rmTY2qBhAJ7Lfu52Oeizlzh\nNLD+1XpSJFh9V1pNMJRVyaA4VmgVmMQpoZ7QY6dxrdLp7VidFn2LgH2Jnsf5OTff\ny9gfEebnw/XGB4mCxpRwolHJVrm8OnPHlkctvCZ/WCU/vyzXtfBxf6NSsXKisnFm\nujQX6pX3AgMBAAECggEAGD6arJzbBxiOzomlzqHzm7y2+b1+ItNJ5ZVMrGD3Jj1f\nxJ3yvqpjlto7uKbuNgM7LhJhG/DY6pOzDaFk+0k4TfyEywjYDGBR/Agjko7s0INN\nAzdHEbTg0K6CIG8zCIKTJZCrrQ/nOqlcGthwQqE3BhboUuC2EzV9Z9+u8XJuAsXY\nk6nPNK/0qOjzNZEANd1AWec1uo/44ER3I9IUiv/rEKXYq7SZ03KTdWomZfHN6hHG\n7czWLqjFNdEaxboe3v7VyQ+Lv26OtyE9E/zQQqTE7rCjDLgIX8KTh6XBtBF+3h1m\ntPInGBxf7FiN+yJeUwVIrHfbF1JIIMsao/9TDLKfUQKBgQDRNwkin3O2H9Ujuw6Y\n4A43ocw2VSVJRxc92iZGZSYzUcYCZov5BySM6D+p2ELvWjTy7n9D3Yj1tA0sg41F\nw1jkl2lS0xX4ZkoKTJvNR2eitXWZrJa7fqDoUOkPsPJBhgEssU6ltIgZZhRl5pi9\nuypirUj3ZMG1TgxThpg9gw2FJwKBgQC7eiBwkQ0Db7+6Pkbgi0TV/aStd2upgplH\nYZJ/wPXKJBpR8/TmacTppSowCb8GvOdBOg3HyWV0RZyWSNRaEKkaBhDNgGEjQ+SL\nu1p+wPp9+UTM88fxIuTg29gU42Z7pxdTypwztAqwnyio1JsGM4ZKfhTjXlUP4577\n97VFr3IKsQKBgCH9Fe/ZBbxlyYOnhQSTCdxB3eJJzOfts7npseQn1J/rvgZv0Heh\nkG+P35/hMWafOhDpbCWDXRfFq4o6yP23cb6ZVpQNFPmo7Ihlz732xsBpSHSx1D8b\noFp9oo9ZCNJaSeCP4Z4MCTxPGCtB3jicqpMjYcJHTSz+RARhzmPX4Z9rAoGAJQlc\nbUCKlJo4A0AYWnXI9Il2Rfqon0U4qLxi57AkHnoBZR1PzVEp4IqLig/y2A7rlJw2\narijvVOfOqVKpjxSW9zE5wQsrH3WIbCykQXotohPCjpCzqV5F972kjHWZik9V4VY\nVHKGBhx7ONc/hPsa1Y6Q69YP8eKi3t4xxoGBgxECgYEApafr1em9uJP/dmHOouJz\noZ5aHrROTA2CHENz2ZchmaaEEGzSWmG+gf0D/ZcUVW2VMeKlRnAUt/oKm3kJNkeZ\ndQAr/773tb4yPlMBsR1NiWLmk/T5MsZTevdCq8ChPjFvh++lVy4H9/rb70Qkp6Xt\nskRnqkiEu968dQIIu7F7PoI=\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-9qchh@pizza-main-d28e0.iam.gserviceaccount.com",
  client_id: "113946540683234039686",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-9qchh%40pizza-main-d28e0.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
