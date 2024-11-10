import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { serverBaseUrl } from "../constants";
import { useEffect, useState } from "react";

interface HistoryPizzaModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  user: any;
}

export default function HistoryPizzaModal({
  open,
  setOpen,
  user,
}: HistoryPizzaModalProps): JSX.Element {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHistory = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${serverBaseUrl}/pizza-logs-history`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: user?.id }),
      });

      const data = await response.json();
      setHistory(data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching users:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    setHistory([]);
    if (open) fetchHistory();
  }, [open]);

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
                Pizza Log History of {user?.name}
              </h2>

              <div>
                {loading ? (
                  <div className="flex justify-center items-center">
                    <div className="loader"></div>{" "}
                    <p className="text-lg text-gray-500">Loading...</p>
                  </div>
                ) : history.length === 0 ? (
                  <div className="bg-white">
                    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                      <div className="text-center">
                        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
                          uhh ohh!
                        </h2>
                        <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                          No History Available
                        </p>
                        <p className=" mt-5 mx-auto text-xl text-gray-500">
                          Grab you pizza with coins and log them to participate
                          in the Challenge
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-2 mt-2">
                    {history.map((pizza: any) => (
                      <div
                        key={pizza?.logId}
                        className="relative rounded-lg border border-gray-300 bg-white px-4 py-3 shadow-sm flex items-center space-x-3 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="focus:outline-none">
                            <div className="flex flex-row justify-between">
                              <p className="font-semibold text-gray-900">
                                {pizza?.pizzaSlice?.name}
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
                                  <span className="text-sm">
                                    {pizza?.pizzaSlice?.price}
                                  </span>
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
                                  <span className="text-sm">
                                    {pizza?.pizzaSlice?.calories}
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="flex mt-1 flex-row items-center justify-between">
                              <p className="text-sm text-gray-500 truncate">
                                {pizza?.pizzaSlice?.description}
                              </p>
                            </div>
                            <p className="text-xs text-gray-700 font-light">
                              Logged On:{" "}
                              {new Date(pizza?.timestamp).toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-2 sm:flex sm:flex-row-reverse ">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Close
                </button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
