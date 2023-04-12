import React from "react";
import { AiFillLike } from "react-icons/ai";

function ProductRow({ id, data }) {
  return (
    <div className="mt-4 flex flex-row items-center justify-center">
      <img src={data.image} alt="" className="w-20 h-20" />
      <div className="mt-8 ml-4 ">
        <p className=" not-italic font-medium text-xl leading-3">
          {data.heading}
        </p>
        <br />
        <p className="not-italic font-medium text-base leading-3 text-gray-700">
          {data.tagline}
          {/* {JSON.stringify(data.Name).replace(/"/g, "")} */}
        </p>
      </div>
      <div className="pl-4 pt-2 h-20 w-20 ml-[200px] mt-10 border-solid border-2 border-gray-400">
        <AiFillLike size={40} color="gray" /> <div className="mt-2">1234</div>
      </div>
    </div>
  );
}

export default ProductRow;
