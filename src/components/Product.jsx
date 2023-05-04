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
      <div className="flex">
        <div className=" w-[1200px] border-r-gray-400 border-r-2 h-[1000px] mt-2">
          <div className="mt-10 ml-40 mr-[230px] pt-8 pb-8 pl-3 pr-10 bg-gradient-to-r from-violet-200 to-pink-200 flex">
            <p className="not-italic font-medium text-3xl">
              Welcome to ProductHunt
            </p>
          </div>
          <div className="mt-12 ml-40 mr-[200px] not-italic font-medium text-3xl">
            Dicover startup to use and invest to
          </div>
          <div className="ml-40 mt-6 not-italic font-medium text-base leading-3 text-gray-600  mr-[200px]">
            TRENDING TOPICS
          </div>
          <div className="flex ml-40 mt-4 mr-[200px] flex-wrap">
            <button className=" bg-white w-48 h-12 hover:bg-purple-600 hover:text-white  text-purple-600 border-2 border-solid border-purple-600 not-italic font-bold text-xl mr-4 mt-2 leading-6 pt-2 pb-2 rounded-full sm:w-auto sm:px-7">
              AI
            </button>
            <button className=" bg-white w-48 h-12 hover:bg-purple-600 hover:text-white  text-purple-600 border-2 border-solid border-purple-600 not-italic font-bold text-xl mr-4 mt-2 leading-6 pt-2 pb-2 rounded-full sm:w-auto sm:px-7">
              Productivity Tech
            </button>
            <button className=" bg-white w-48 h-12 hover:bg-purple-600 hover:text-white  text-purple-600 border-2 border-solid border-purple-600 not-italic font-bold text-xl mr-4 mt-2 leading-6 pt-2 pb-2 rounded-full sm:w-auto sm:px-7">
              Devlopers Tools
            </button>
            <button className=" bg-white w-48 h-12 hover:bg-purple-600 hover:text-white  text-purple-600 border-2 border-solid border-purple-600 not-italic font-bold text-xl mr-4 mt-2 leading-6 pt-2 pb-2 rounded-full sm:w-auto sm:px-7">
              Tech
            </button>
            <button className=" bg-white w-48 h-12 hover:bg-purple-600 hover:text-white  text-purple-600 border-2 border-solid border-purple-600 not-italic font-bold text-xl mr-4 mt-2 leading-6 pt-2 pb-2 rounded-full sm:w-auto sm:px-7">
              Marketing
            </button>
            <button className=" bg-white w-48 h-12 hover:bg-purple-600 hover:text-white  text-purple-600 border-2 border-solid border-purple-600 not-italic font-bold text-xl mr-4 mt-2 leading-6 pt-2 pb-2 rounded-full sm:w-auto sm:px-7">
              User Experience
            </button>
            <button className=" bg-white w-48 h-12 hover:bg-purple-600 hover:text-white  text-purple-600 border-2 border-solid border-purple-600 not-italic font-bold text-xl mr-4 mt-2 leading-6 pt-2 pb-2 rounded-full sm:w-auto sm:px-7">
              Design Tools
            </button>
            <button className=" bg-white w-48 h-12 hover:bg-purple-600 hover:text-white  text-purple-600 border-2 border-solid border-purple-600 not-italic font-bold text-xl mr-4 mt-2 leading-6 pt-2 pb-2 rounded-full sm:w-auto sm:px-7">
              Growth Hacking
            </button>
            <button className=" bg-white w-48 h-12 hover:bg-purple-600 hover:text-white  text-purple-600 border-2 border-solid border-purple-600 not-italic font-bold text-xl mr-4 mt-2 leading-6 pt-2 pb-2 rounded-full sm:w-auto sm:px-7">
              Content Creation
            </button>
            <button className=" bg-white w-48 h-12 hover:bg-purple-600 hover:text-white  text-purple-600 border-2 border-solid border-purple-600 not-italic font-bold text-xl mr-4 mt-2 leading-6 pt-2 pb-2 rounded-full sm:w-auto sm:px-7">
              Web3
            </button>
            <button className=" bg-white w-48 h-12 hover:bg-purple-600 hover:text-white  text-purple-600 border-2 border-solid border-purple-600 not-italic font-bold text-xl mr-4 mt-2 leading-6 pt-2 pb-2 rounded-full sm:w-auto sm:px-7">
              Fin-tech
            </button>
            <button className=" bg-white w-48 h-12 hover:bg-purple-600 hover:text-white  text-purple-600 border-2 border-solid border-purple-600 not-italic font-bold text-xl mr-4 mt-2 leading-6 pt-2 pb-2 rounded-full sm:w-auto sm:px-7">
              Ecommerce
            </button>
            <button className=" bg-white w-48 h-12 hover:bg-purple-600 hover:text-white  text-purple-600 border-2 border-solid border-purple-600 not-italic font-bold text-xl mr-4 mt-2 leading-6 pt-2 pb-2 rounded-full sm:w-auto sm:px-7">
              Twitter
            </button>
          </div>
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