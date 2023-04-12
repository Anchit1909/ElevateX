import React from "react";
import { AiFillLike } from "react-icons/ai";

function ProductRow({ id }) {
  return (
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
        <AiFillLike size={40} color="gray" /> <div className="mt-2">1234</div>
      </div>
    </div>
  );
}

export default ProductRow;
