import Link from "next/link";
import React from "react";
import { AiFillLike } from "react-icons/ai";

function ProductRow({ id, data }) {
  return (
    <div className="mt-20 md:ml-30 flex flex-row ">
      <img src={data.image} alt="" className="w-20 h-20" />
      <div className=" ">
        <Link href="/startup">
          <div className="flex not-italic font-medium text-xl leading-3 pl-10">
            {data.heading}
          </div>
        </Link>
        <br />
        <div className=" flex not-italic font-medium text-base leading-6 text-gray-700 pl-10">
          {data.tagline}
          {/* {JSON.stringify(data.Name).replace(/"/g, "")} */}
        </div>
      </div>
      <div className="ml-auto border-solid flex flex-col md:mr-40">
        <AiFillLike size={40} color="#7A5AF8" /> <div className=" ">1234</div>
      </div>
    </div>
  );
}

export default ProductRow;

