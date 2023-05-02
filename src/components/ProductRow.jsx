import Link from "next/link";
import React from "react";
import { AiFillLike } from "react-icons/ai";

function ProductRow({ id, data }) {
  return (
    <div className="mt-8 flex flex-row items-center justify-center">
      <img src={data.image} alt="" className="w-18 h-18" />
      <div className="ml-4 ">
        <Link href="/startup">
          <p className=" not-italic font-medium text-xl leading-3">
            {data.heading}
          </p>
        </Link>
        <br />
        <p className="not-italic font-medium text-base leading-3 text-gray-700">
          {data.tagline}
          {/* {JSON.stringify(data.Name).replace(/"/g, "")} */}
        </p>
      </div>
      <div className="pl-4 pt-2 h-20 w-20 ml-[200px] border-solid border-2 border-gray-400">
        <AiFillLike size={40} color="gray" /> <div className="">1234</div>
      </div>
    </div>
  );
}

export default ProductRow;
