import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import toast from "react-hot-toast";
import { serverBaseUrl } from "../constants";
import { useEffect, useState } from "react";

interface LogPizzaModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  user: any;
}

export default function LogPizzaModal({
  open,
  setOpen,
  user,
}: LogPizzaModalProps): JSX.Element {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [logging, setLogging] = useState(false);
  const [selectedPizzas, setSelectedPizzas] = useState([]);

  const fetchPurchasedSlices = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${serverBaseUrl}/users/purchased-slices`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: user?.id }),
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
    setPizzas([]);
    setSelectedPizzas([]);
    if (open) fetchPurchasedSlices();
  }, [open]);

  const toggleSelectPizza = (pizza) => {
    setSelectedPizzas((prevSelected) =>
      prevSelected.some((selected) => selected.purchaseId === pizza.purchaseId)
        ? prevSelected.filter(
            (selected) => selected.purchaseId !== pizza.purchaseId
          )
        : [...prevSelected, pizza]
    );
  };

  const handleLogPizza = async () => {
    if (selectedPizzas.length === 0) {
      toast.error("Please select at least one pizza to log.");
      return;
    }

    setLogging(true);
    try {
      for (const pizza of selectedPizzas) {
        await fetch(`${serverBaseUrl}/log-pizza`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: user.id,
            sliceId: pizza?.slice?.id,
            purchasedSliceId: pizza?.purchaseId,
          }),
        });
      }

      toast.success("Pizzas logged successfully!");
      setOpen(false);
    } catch (error) {
      console.error("Error logging pizzas:", error);
      toast.error("Error logging pizzas.");
    } finally {
      setLogging(false);
    }
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center text-center sm:items-center">
          <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl sm:my-8 sm:w-full sm:max-w-4xl">
            <div className="flex text-base text-left w-full md:inline-block md:px-4 md:my-4">
              <h2 className="text-xl font-bold tracking-wide">
                Available Pizza Slices for {user?.name}
              </h2>

              <div>
                {loading ? (
                  <div className="flex justify-center items-center">
                    <div className="loader"></div>
                    <p className="text-lg text-gray-500">Loading...</p>
                  </div>
                ) : pizzas.length === 0 ? (
                  <div className="bg-white">
                    <div className="text-center">
                      <h2 className="text-base font-semibold text-indigo-600">
                        uhh ohh!
                      </h2>
                      <p className="mt-1 text-4xl font-extrabold text-gray-900">
                        No Pizza Available
                      </p>
                      <p className="mt-5 mx-auto text-xl text-gray-500">
                        Buy your pizza with coins and log them to participate in
                        the Challenge
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-2 mt-2">
                    {pizzas.map((pizza) => (
                      <div
                        key={pizza?.purchaseId}
                        onClick={() => toggleSelectPizza(pizza)}
                        className={`relative rounded-lg border ${
                          selectedPizzas.some(
                            (selected) =>
                              selected.purchaseId === pizza.purchaseId
                          )
                            ? "border-green-500"
                            : "border-gray-300"
                        } bg-white px-4 py-3 shadow-sm flex items-center space-x-3 cursor-pointer`}
                      >
                        <div className="flex-1 min-w-0">
                          <div className="focus:outline-none">
                            <div className="flex flex-row justify-between">
                              <p className="font-semibold text-gray-900">
                                {pizza?.slice?.name}
                              </p>
                              <div className="flex flex-row items-center">
                                <div className="bg-lime-200 text-lime-600 flex items-center p-1 rounded-2xl">
                                  <span className="text-sm">
                                    {pizza?.coinsUsed}
                                  </span>
                                </div>
                                <div className="text-orange-600 bg-orange-200 flex items-center p-1 rounded-2xl ml-2">
                                  <span className="text-sm">
                                    {pizza?.slice?.calories}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <p className="text-sm text-gray-500 truncate mt-1">
                              {pizza?.slice?.description}
                            </p>
                            <p className="text-xs text-gray-700 font-light">
                              Purchase Date:{" "}
                              {new Date(pizza?.timestamp).toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="mt-2 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={handleLogPizza}
                  disabled={selectedPizzas.length === 0 || logging}
                  className={`inline-flex w-full justify-center rounded-md ${
                    logging || selectedPizzas.length === 0
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green-600 hover:bg-green-500"
                  } px-3 py-1.5 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto`}
                >
                  {logging ? (
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
                    "Log Pizza"
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
