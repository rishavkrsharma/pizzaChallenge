import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import toast from "react-hot-toast";
import { serverBaseUrl } from "../constants";
import { useEffect, useState } from "react";

interface BuyPizzaModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  user: any;
  refetchUsers: () => void;
}

type Cart = {
  [key: string]: number;
};

export interface Pizza {
  id: string;
  name: string;
  price: number;
  calories: number;
  description: string;
  toppings: string[];
}

export default function BuyPizzaModal({
  open,
  setOpen,
  user,
  refetchUsers,
}: BuyPizzaModalProps): JSX.Element {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  const [totalCartValue, setTotalCartValue] = useState(0);
  const [buying, setBuying] = useState(false);

  const fetchSlices = async () => {
    try {
      const response = await fetch(`${serverBaseUrl}/all-pizza-slices`, {
        method: "GET",
      });

      const data = await response.json();

      setPizzas(data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching users:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (open) {
      setCart({});
      setTotalCartValue(0);
      fetchSlices();
    }
  }, [open]);

  const handleIncrement = (pizzaId: string, price: number) => {
    setCart((prevCart) => {
      const newCart: Cart = { ...prevCart };
      newCart[pizzaId] = (newCart[pizzaId] || 0) + 1;
      setTotalCartValue(totalCartValue + price);
      return newCart;
    });
  };

  const handleDecrement = (pizzaId: string, price: number) => {
    setCart((prevCart) => {
      const newCart: Cart = { ...prevCart };
      if (newCart[pizzaId] > 0) {
        newCart[pizzaId] -= 1;
        setTotalCartValue(totalCartValue - price);
      }
      return newCart;
    });
  };

  const handleBuy = async () => {
    setBuying(true);
    try {
      const cartItems = Object.entries(cart as Cart).filter(
        ([, quantity]) => quantity > 0
      );

      for (const [pizzaId] of cartItems) {
        await fetch(`${serverBaseUrl}/buy-pizza`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: user.id,
            sliceId: pizzaId,
          }),
        });
      }
      toast.success("Pizza bought successfully!");
      refetchUsers();
      setOpen(false);
    } catch (error) {
      console.error("Error purchasing pizzas:", error);
    } finally {
      setBuying(false);
    }
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center  text-center sm:items-center ">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-4xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="flex text-base text-left transform transition w-full md:inline-block md:px-4 md:my-4 md:align-middle ">
              <h2 className="text-xl font-bold tracking-wide">
                Buy Pizza Slices for {user?.name}
              </h2>
              <div className="grid grid-cols-1 gap-2 mt-2">
                {pizzas.map((pizza: Pizza) => (
                  <div
                    key={pizza?.id}
                    className="relative rounded-lg border border-gray-300 bg-white px-4 py-3 shadow-sm flex items-center space-x-3 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="focus:outline-none">
                        <div className="flex flex-row justify-between">
                          <p className="font-semibold text-gray-900">
                            {pizza?.name}
                          </p>
                          <div className="flex flex-row items-center">
                            <div className="bg-lime-200 text-lime-600 flex flex-row items-center p-1 rounded-2xl">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                              </svg>
                              <span className="text-sm">{pizza?.price}</span>
                            </div>

                            <div className="text-orange-600 bg-orange-200 flex flex-row items-center p-1 rounded-2xl ml-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-5 "
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                                />
                              </svg>
                              <span className="text-sm">{pizza?.calories}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex mt-1 flex-row items-center justify-between">
                          <p className="text-sm text-gray-500 truncate">
                            {pizza?.description}
                          </p>
                          <div>
                            <button
                              onClick={() =>
                                handleDecrement(pizza.id, pizza.price)
                              }
                              className="px-2 bg-red-300 rounded-md"
                              disabled={!cart[pizza.id]}
                            >
                              -
                            </button>
                            <span className="mx-2">{cart[pizza.id] || 0}</span>
                            <button
                              onClick={() =>
                                handleIncrement(pizza.id, pizza.price)
                              }
                              className="px-2 bg-green-300 rounded-md"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="text-sm font-medium text-gray-800 mt-2">
                        <span className="mr-2">Toppings:</span>
                        {pizza?.toppings.map((topping, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 mr-1 bg-orange-100 text-orange-700 rounded-full text-sm"
                          >
                            {topping}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-row items-center justify-between mt-3 ">
                <span>
                  Available Coins: {user.coins} Cart Value: {totalCartValue}
                </span>

                <div className="sm:flex sm:flex-row-reverse ">
                  <button
                    type="button"
                    onClick={handleBuy}
                    disabled={
                      totalCartValue > user.coins ||
                      totalCartValue === 0 ||
                      buying
                    }
                    className={`inline-flex w-full justify-center rounded-md ${
                      totalCartValue > user.coins || buying
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-green-600 hover:bg-green-500"
                    } px-3 py-1.5 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto`}
                  >
                    {buying ? (
                      <div className="flex items-center">
                        <svg
                          className="animate-spin h-5 w-5 mr-2 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v2a6 6 0 100 12v2a8 8 0 01-8-8z"
                          ></path>
                        </svg>
                        Processing...
                      </div>
                    ) : (
                      "Buy"
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
