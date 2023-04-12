"use client";

import React, { useEffect, useState } from "react";
import Rightbar from "@/components/Rightbar";
import { AiFillLike } from "react-icons/ai";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useSession } from "next-auth/react";
import ProductRow from "./ProductRow";
function Product() {
  const { data: session } = useSession();
  // const [StartupList, setStartupList] = useState([]);
  // const startupCollection = collection(db, "startups");

  const [startups, loading] = useCollection(
    session && collection(db, "user", session.user.email, "startups")
  );

  console.log(startups);

  // const getstartupList = async () => {
  //   try {
  //     const data = await getDocs(startupCollection);
  //     const filteredData = data.docs.map((doc, id) => ({
  //       ...doc.data(),
  //       // id: doc.id,
  //     }));
  //     setStartupList(filteredData);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  // useEffect(() => {
  //   getstartupList();
  // }, []);

  return (
    <div>
      <div className="flex">
        <div className=" w-[1200px] border-r-gray-400 border-r-2 h-[1000px] mt-2">
          <div className="mt-10 ml-40 mr-[230px] pt-8 pb-8 pl-3 pr-10 bg-gradient-to-r from-violet-200 to-pink-200 flex  ">
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
            <button className=" bg-white w-48 h-12 hover:bg-purple-600 hover:text-white  text-purple-600 border-2 border-solid border-purple-600 not-italic font-bold text-xl mr-4 mt-2 leading-6 pt-2 pb-2 rounded-full">
              AI
            </button>
            <button className=" bg-white w-48 h-12 hover:bg-purple-600 hover:text-white  text-purple-600 border-2 border-solid border-purple-600 not-italic font-bold text-xl mr-4 mt-2 leading-6 pt-2 pb-2 rounded-full">
              Productivity Tech
            </button>
            <button className=" bg-white w-48 h-12 hover:bg-purple-600 hover:text-white  text-purple-600 border-2 border-solid border-purple-600 not-italic font-bold text-xl mr-4 mt-2 leading-6 pt-2 pb-2 rounded-full">
              Devlopers Tools
            </button>
            <button className=" bg-white w-48 h-12 hover:bg-purple-600 hover:text-white  text-purple-600 border-2 border-solid border-purple-600 not-italic font-bold text-xl mr-4 mt-2 leading-6 pt-2 pb-2 rounded-full">
              Tech
            </button>
            <button className=" bg-white w-48 h-12 hover:bg-purple-600 hover:text-white  text-purple-600 border-2 border-solid border-purple-600 not-italic font-bold text-xl mr-4 mt-2 leading-6 pt-2 pb-2 rounded-full">
              Marketing
            </button>
            <button className=" bg-white w-48 h-12 hover:bg-purple-600 hover:text-white  text-purple-600 border-2 border-solid border-purple-600 not-italic font-bold text-xl mr-4 mt-2 leading-6 pt-2 pb-2 rounded-full">
              User Experience
            </button>
            <button className=" bg-white w-48 h-12 hover:bg-purple-600 hover:text-white  text-purple-600 border-2 border-solid border-purple-600 not-italic font-bold text-xl mr-4 mt-2 leading-6 pt-2 pb-2 rounded-full">
              Design Tools
            </button>
            <button className=" bg-white w-48 h-12 hover:bg-purple-600 hover:text-white  text-purple-600 border-2 border-solid border-purple-600 not-italic font-bold text-xl mr-4 mt-2 leading-6 pt-2 pb-2 rounded-full">
              Growth Hacking
            </button>
            <button className=" bg-white w-48 h-12 hover:bg-purple-600 hover:text-white  text-purple-600 border-2 border-solid border-purple-600 not-italic font-bold text-xl mr-4 mt-2 leading-6 pt-2 pb-2 rounded-full">
              Content Creation
            </button>
            <button className=" bg-white w-48 h-12 hover:bg-purple-600 hover:text-white  text-purple-600 border-2 border-solid border-purple-600 not-italic font-bold text-xl mr-4 mt-2 leading-6 pt-2 pb-2 rounded-full">
              WEb3
            </button>
            <button className=" bg-white w-48 h-12 hover:bg-purple-600 hover:text-white  text-purple-600 border-2 border-solid border-purple-600 not-italic font-bold text-xl mr-4 mt-2 leading-6 pt-2 pb-2 rounded-full">
              Fin-tech
            </button>
            <button className=" bg-white w-48 h-12 hover:bg-purple-600 hover:text-white  text-purple-600 border-2 border-solid border-purple-600 not-italic font-bold text-xl mr-4 mt-2 leading-6 pt-2 pb-2 rounded-full">
              Ecommerce
            </button>
            <button className=" bg-white w-48 h-12 hover:bg-purple-600 hover:text-white  text-purple-600 border-2 border-solid border-purple-600 not-italic font-bold text-xl mr-4 mt-2 leading-6 pt-2 pb-2 rounded-full">
              Twitter
            </button>
          </div>
          <hr className="mt-4 ml-40  mr-[200px]"></hr>
          <div className="mt-4 ml-40  mr-[200px] not-italic font-semibold text-3xl">
            The Next Big Thing
          </div>
          <div>
            {startups.docs.map((doc) => (
              <ProductRow key={doc.id} id={doc.id} />
            ))}
          </div>
          <div className="mt-4 ml-40  mr-[200px] flex">
            <img src="/box1.jpg" alt="" className="w-40 h-40" />
            <div className="mt-8 ml-4 ">
              <p className=" not-italic font-medium text-xl leading-3">ddd</p>
              <br />
              <p className="not-italic font-medium text-base leading-3 text-gray-700">
                Turn your team into a productivity powerhouse
              </p>
            </div>
            <div className="pl-4 pt-2 h-20 w-20 ml-[200px] mt-10 border-solid border-2 border-gray-400">
              <AiFillLike size={40} color="gray" />{" "}
              <div className="mt-2">1234</div>
            </div>
          </div>
          <div className="mt-4 ml-40 mr-[200px] flex">
            <img src="/box1.jpg" alt="" className="w-40 h-40" />
            <div className="mt-8 ml-4 ">
              <p className=" not-italic font-medium text-xl leading-3">
                Monday.com for Productivity
              </p>
              <br></br>
              <p className="not-italic font-medium text-base leading-3 text-gray-700">
                Turn your team into a productivity powerhouse
              </p>
            </div>
            <div className="pl-4 pt-2 h-20 w-20 ml-[200px] mt-10 border-solid border-2 border-gray-400">
              {" "}
              <AiFillLike size={40} color="gray" />{" "}
              <div className="mt-2">1234</div>
            </div>
          </div>
          <div className="mt-4 ml-40 mr- mr-[200px] flex">
            <img src="/box1.jpg" alt="" className="w-40 h-40" />
            <div className="mt-8 ml-4 ">
              <p className=" not-italic font-medium text-xl leading-3">
                Monday.com for Productivity
              </p>{" "}
              <br></br>{" "}
              <p className="not-italic font-medium text-base leading-3 text-gray-700">
                Turn your team into a productivity powerhouse
              </p>
            </div>
            <div className="pl-4 pt-2 h-20 w-20 ml-[200px] mt-10 border-solid border-2 border-gray-400">
              {" "}
              <AiFillLike size={40} color="gray" />{" "}
              <div className="mt-2">1234</div>
            </div>
          </div>
          <div className="mt-4 ml-40 mr-[200px] flex">
            <img src="/box1.jpg" alt="" className="w-40 h-40" />
            <div className="mt-8 ml-4 ">
              <p className=" not-italic font-medium text-xl leading-3">
                Monday.com for Productivity
              </p>{" "}
              <br></br>{" "}
              <p className="not-italic font-medium text-base leading-3 text-gray-700">
                Turn your team into a productivity powerhouse
              </p>
            </div>
            <div className="pl-4 pt-2 h-20 w-20 ml-[200px] mt-10 border-solid border-2 border-gray-400">
              {" "}
              <AiFillLike size={40} color="gray" />{" "}
              <div className="mt-2">1234</div>
            </div>
          </div>
          <div className="mt-4 ml-40  mr-[200px] flex">
            <img src="/box1.jpg" alt="" className="w-40 h-40" />
            <div className="mt-8 ml-4 ">
              <p className=" not-italic font-medium text-xl leading-3">
                Monday.com for Productivity
              </p>{" "}
              <br></br>{" "}
              <p className="not-italic font-medium text-base leading-3 text-gray-700">
                Turn your team into a productivity powerhouse
              </p>
            </div>
            <div className="pl-4 pt-2 h-20 w-20 ml-[200px] mt-10 border-solid border-2 border-gray-400">
              {" "}
              <AiFillLike size={40} color="gray" />{" "}
              <div className="mt-2">1234</div>
            </div>
          </div>
          <div className="mt-4 ml-40  mr-[200px] flex">
            <img src="/box1.jpg" alt="" className="w-40 h-40" />
            <div className="mt-8 ml-4 ">
              <p className=" not-italic font-medium text-xl leading-3">
                Monday.com for Productivity
              </p>{" "}
              <br></br>{" "}
              <p className="not-italic font-medium text-base leading-3 text-gray-700">
                Turn your team into a productivity powerhouse
              </p>
            </div>
            <div className="pl-4 pt-2 h-20 w-20 ml-[200px] mt-10 border-solid border-2 border-gray-400">
              {" "}
              <AiFillLike size={40} color="gray" />{" "}
              <div className="mt-2">1234</div>
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
