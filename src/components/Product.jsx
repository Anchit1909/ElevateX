"use client";

import React, { useEffect, useState } from "react";
import Rightbar from "@/components/Rightbar";
import { AiFillLike } from "react-icons/ai";
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";
import { app } from "../../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useSession } from "next-auth/react";
import ProductRow from "./ProductRow";
import Footer from "./Footer";
function Product() {
  const { data: session } = useSession();
  const db = getFirestore(app);

  const [value, loading, error] = useCollection(
    query(collection(db, "startups"), orderBy("createdAt", "asc"))
  );
  return (
    <div className="bg-[#FEFDFB]">
      <div className="bg-[#F5F5F3] md:h-[400px] flex flex-col h-[300px] relative">
        <div className="absolute -left-60 -top-36 w-96 h-96 bg-[#B3AAFC]/30 rounded-full blur-3xl" />
        <div className="absolute -left-40 -top-36 w-96 h-96 bg-[#E841E1]/20 rounded-full blur-3xl" />
        <div className="absolute -top-36 w-96 h-96 bg-[#F1BB31]/20 rounded-full blur-3xl" />
        <div className="absolute left-32 -top-36 w-96 h-96 bg-[#DFF363]/10 rounded-full blur-3xl" />
        <div className="flex flex-col items-center justify-center mx-auto h-full font-poppins space-y-2 flex-1">
          <p className="font-medium md:text-6xl text-4xl text-[#1C1F34] z-10">
            Welcome to Elevate
            <span className="font-bold md:text-6xl text-4xl">X</span>!👋
          </p>
          <div className="max-w-xl text-lg flex flex-wrap text-[#0A171C] text-center z-10">
            A cutting edge technology to connect startups and investors and help
            your money to grow to next level.
          </div>
        </div>

        <div className="py-4">
          <div className="md:ml-40 font-medium text-base leading-3 text-[#6D798B] font-inter z-10">
            TRENDING TOPICS:
          </div>
          <div className="flex md:ml-40 mt-2 md:mr-[200px] flex-wrap font-inter space-x-2 z-10">
            <button className="w-42 h-8 hover:bg-black hover:text-white text-black border-2 border-solid border-black font-bold text-lg mr-2 mt-2 sm:w-auto px-6 rounded-md">
              AI
            </button>
            <button className="w-48 h-8 hover:bg-purple-700 hover:text-white  text-purple-700 border-2 border-solid border-purple-700 font-bold text-lg mr-2 mt-2 sm:w-auto px-6 rounded-md">
              Productivity
            </button>
            <button className="w-48 h-8 hover:bg-green-700 hover:text-white  text-green-700 border-2 border-solid border-green-700 font-bold text-lg mr-2 mt-2  sm:w-auto px-6 rounded-md">
              Developer Tools
            </button>
            <button className="w-48 h-8 hover:bg-yellow-600 hover:text-white  text-yellow-600 border-2 border-solid border-yellow-600 font-bold text-lg mr-2 mt-2 sm:w-auto px-6 rounded-md">
              Tech
            </button>
            <button className="w-48 h-8 hover:bg-purple-600 hover:text-white  text-purple-600 border-2 border-solid border-purple-600 font-bold text-lg mr-2 mt-2  sm:w-auto px-6 rounded-md">
              Marketing
            </button>
          </div>
        </div>
      </div>
      <div className="flex h-auto">
        <div className="md:w-[70%] w-full md:border-r-2 md:border-r-gray-200 h-auto my-8">
          <div className="">
            <div className="flex flex-col -mt-4">
              {error && <strong>Error: {JSON.stringify(error)}</strong>}
              {loading && <span>Collection: Loading...</span>}
              {value && (
                <div className="flex flex-col ml-10 md:ml-40">
                  {value.docs.map((doc) => (
                    /* <React.Fragment key={doc.id}> */
                    /* {JSON.stringify(doc.data().Name)},{" "} */
                    <ProductRow key={doc.id} data={doc.data()} id={doc.id} />
                    /* </React.Fragment> */
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mr-2">
          <Rightbar />
        </div>
      </div>
    </div>
  );
}

export default Product;
