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
    <>
      <div className="bg-gradient-to-r from-violet-200 to-pink-200 h-[500px] flex flex-col justify-center items-center">
          <div className="  flex  flex-col w-1/2 mx-auto p-4 my-auto">
            <p className="not-italic font-medium text-7xl ">
              Welcome to Elevate<span className="font-bold text-7xl">X</span>!
            </p>
            <div className="  mt-2 not-italic font-medium text-lg flex flex-wrap text-gray-600">
           A cutting edge technology to connect startups and investors and help your money to grow to next level.
          </div>
          </div>

         
          <div className="w-full p-4 mt-auto">
          <div className="ml-40 mt-6 not-italic font-medium text-base leading-3 text-gray-600  mr-[200px]">
            TRENDING TOPICS
          </div>
          <div className="flex ml-40 mt-4 mr-[200px] flex-wrap ">
            <button className=" bg-white w-48 h-8 hover:bg-black hover:text-white  text-black border-2 border-solid border-black not-italic font-bold text-lg mr-2 mt-2   sm:w-auto sm:px-7">
              AI
            </button>
            <button className=" bg-white w-48 h-8 hover:bg-purple-700 hover:text-white  text-purple-700 border-2 border-solid border-purple-700 not-italic font-bold text-lg mr-2 mt-2   sm:w-auto sm:px-7">
              Productivity Tech
            </button>
            <button className=" bg-white w-48 h-8 hover:bg-green-700 hover:text-white  text-green-700 border-2 border-solid border-green-700 not-italic font-bold text-lg mr-2 mt-2  sm:w-auto sm:px-7">
              Devlopers Tools
            </button>
            <button className=" bg-white w-48 h-8 hover:bg-yellow-600 hover:text-white  text-yellow-600 border-2 border-solid border-yellow-600 not-italic font-bold text-lg mr-2 mt-2 sm:w-auto sm:px-7">
              Tech
            </button>
            <button className=" bg-white w-48 h-8 hover:bg-purple-600 hover:text-white  text-purple-600 border-2 border-solid border-purple-600 not-italic font-bold text-lg mr-2 mt-2  sm:w-auto sm:px-7">
              Marketing
            </button>
          </div>
          </div>
          </div>
      <div className="flex">
        <div className=" w-[1200px] border-r-gray-400 border-r-2 h-[1000px] mt-2">
        
          <hr className="mt-4 ml-40  mr-[200px]"></hr>
          <div className="mt-4 ml-40  mr-[200px] not-italic font-semibold text-3xl">
            The Next Big Thing
          </div>
          <div>
            <div className="flex flex-col">
              {error && <strong>Error: {JSON.stringify(error)}</strong>}
              {loading && <span>Collection: Loading...</span>}
              {value && (
                <div className="flex flex-col ml-40">
                  {value.docs.map((doc) => (
                    /* <React.Fragment key={doc.id}> */
                    /* {JSON.stringify(doc.data().Name)},{" "} */
                    <ProductRow key={doc.id} data={doc.data()} />
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
    </>
  );
}

export default Product;
