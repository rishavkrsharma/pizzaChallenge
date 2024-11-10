"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";
import Header from "../components/header";
import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/solid";
import ClassNames from "../utils/classnamesUtil";

const stats = [
  {
    name: "Total Subscribers",
    stat: "71,897",
    previousStat: "70,946",
    change: "12%",
    changeType: "increase",
  },
  {
    name: "Avg. Open Rate",
    stat: "58.16%",
    previousStat: "56.14%",
    change: "2.02%",
    changeType: "increase",
  },
  {
    name: "Avg. Click Rate",
    stat: "24.57%",
    previousStat: "28.62%",
    change: "4.05%",
    changeType: "decrease",
  },
];

export default function Home() {
  const { theme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    const newTheme = theme == "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <>
      <Header />
      <div className="bg-white">
        <div className="bg-gray-50 pt-12 sm:pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Trusted by developers from over 80 planets
              </h2>
              <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellendus repellat laudantium.
              </p>
            </div>
          </div>
          <div className="mt-10 pb-12 bg-white sm:pb-16">
            <div className="relative">
              <div className="absolute inset-0 h-1/2 bg-gray-50" />
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                  <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                    <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                      <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                        Pepperoni
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                        100%
                      </dd>
                    </div>
                    <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                      <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                        Delivery
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                        24/7
                      </dd>
                    </div>
                    <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                      <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                        Calories
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                        100k
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto py-4">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Last 30 days
            </h3>
            <dl className="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x">
              {stats.map((item) => (
                <div key={item.name} className="px-4 py-5 sm:p-6">
                  <dt className="text-base font-normal text-gray-900">
                    {item.name}
                  </dt>
                  <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                    <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                      {item.stat}
                      <span className="ml-2 text-sm font-medium text-gray-500">
                        from {item.previousStat}
                      </span>
                    </div>

                    <div
                      className={ClassNames(
                        item.changeType === "increase"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800",
                        "inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0"
                      )}
                    >
                      {item.changeType === "increase" ? (
                        <ArrowSmUpIcon
                          className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                          aria-hidden="true"
                        />
                      ) : (
                        <ArrowSmDownIcon
                          className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"
                          aria-hidden="true"
                        />
                      )}

                      <span className="sr-only">
                        {item.changeType === "increase"
                          ? "Increased"
                          : "Decreased"}{" "}
                        by
                      </span>
                      {item.change}
                    </div>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        {/* <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="pb-16 xl:flex xl:items-center xl:justify-between">
            <div>
              <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
                <span className="text-gray-900">All the Pizza You Crave </span>
                <span className="text-indigo-600">500 coins free</span>
              </h1>
              <p className="mt-5 text-2xl text-gray-500">
                Participate in the Challenge and prove top pizza lover in whole
                world!
              </p>
            </div>
            <a
              href="#"
              className="mt-8 w-full bg-indigo-600 border border-transparent px-5 py-3 inline-flex items-center justify-center text-base font-medium rounded-md text-white hover:bg-indigo-700 sm:mt-10 sm:w-auto xl:mt-0"
            >
              Get started now
            </a>
          </div>
          <div className="border-t border-gray-200 pt-16 ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href={"/newUser"}
                className="flex flex-col items-center justify-center p-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                  />
                </svg>

                <span>New User</span>
              </Link>

              <Link
                href={"/leaderboard"}
                className="flex flex-col items-center justify-center p-6 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                  />
                </svg>

                <span>Leaderboard</span>
              </Link>

              <Link
                href={"/managePlayers"}
                className="flex flex-col items-center justify-center p-6 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>

                <span>Manage Players</span>
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
