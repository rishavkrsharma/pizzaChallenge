"use client";
import Header from "../components/header";

import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

export default function Home() {
  const [leaderboard, setLeaderboard] = useState<any>([]);

  useEffect(() => {
    const q = query(collection(db, "users"), orderBy("pizzasEaten", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const users: any = snapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        pizzasEaten: doc.data().pizzasEaten,
      }));
      setLeaderboard(users);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Header />
      <div className="bg-white">
        <div className=" pt-12 sm:pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-indigo-900 sm:text-4xl">
                THE LEADERBOARD
              </h2>
              <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                Real pizza lovers gather here for the ultimate count-down
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto py-4">
          <ul role="list" className="divide-y divide-gray-100">
            {leaderboard.map((person: any, index: number) => (
              <li key={person.id} className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4 items-center">
                  <p className="text-sm font-semibold text-gray-900">
                    {index + 1}
                  </p>
                  <div className="min-w-0 flex-auto">
                    <p className="text-lg font-semibold text-gray-900">
                      {person.name}
                    </p>
                    <p className="mt-1 truncate text-xs/5 text-gray-500">
                      Number of Pizza Eaten: {person.pizzasEaten}
                    </p>
                  </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm/6 text-gray-900">{person.role}</p>
                  <div className="mt-1 flex items-center gap-x-1.5">
                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <p className="text-xs/5 text-gray-500">Online</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
