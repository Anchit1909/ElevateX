import Link from "next/link";
import React from "react";
import { IoTriangle } from "react-icons/io5";

function ProductRow({ id, data }) {
  return (
    <div className="flex flex-row items-center justify-center mt-8">
      <img
        src={data.image}
        alt=""
        className="w-[70px] h-[70px] object-contain rounded-md"
      />
      <div className="space-y-2">
        <Link href="/startup">
          <div className="flex font-medium text-xl leading-3 pl-10 font-inter">
            {data.heading}
          </div>
        </Link>
        <div className=" flex not-italic font-medium text-base leading-6 text-[#4B587C] pl-10">
          {data.tagline}
          {/* {JSON.stringify(data.Name).replace(/"/g, "")} */}
        </div>
      </div>
      <div className="ml-auto border-2 py-3 px-4 border-solid border-[#D9D9D9] rounded-[5px] flex flex-col items-center justify-center md:mr-40">
        <IoTriangle size={26} color="#475467" />{" "}
        <div className="text-[#4B587C] font-inter font-medium">1,234</div>
      </div>
    </div>
  );
}

export default ProductRow;
