import Link from "next/link";
import React from "react";
import Footer from "./Footer";
import Image from "next/image";

function Rightbar() {
  return (
    <div className="hidden md:flex md:flex-col">
      <div className="mt-12 w-3/12">
        <div className="pl-7 w-72">
          <div className="text-[#6D798B] font-inter font-medium">
            TRENDING LAUNCHES
          </div>
          <div className="flex my-4 space-x-2 font-inter">
            <div>
              <h1 className="font-medium">Leaders Arena</h1>
              <h1 className="text-sm w-52 font-medium text-[#4B587C]">
                Turn your team into a productivity powerhouse
              </h1>
            </div>
            <Image
              width={48}
              height={48}
              style={{ objectFit: "cover" }}
              className="rounded-sm"
              src="/dp2.jpg"
              alt=""
            />
          </div>
          <div className="flex my-4 space-x-2 font-inter">
            <div>
              <h1 className="font-medium">Leaders Arena</h1>
              <h1 className="text-sm w-52 font-medium text-[#4B587C]">
                Turn your team into a productivity powerhouse
              </h1>
            </div>
            <Image
              width={48}
              height={48}
              style={{ objectFit: "cover" }}
              className="rounded-sm"
              src="/dp2.jpg"
              alt=""
            />
          </div>
          <div className="flex my-4 space-x-2 font-inter">
            <div>
              <h1 className="font-medium">Leaders Arena</h1>
              <h1 className="text-sm w-52 font-medium text-[#4B587C]">
                Turn your team into a productivity powerhouse
              </h1>
            </div>
            <Image
              width={48}
              height={48}
              style={{ objectFit: "cover" }}
              className="rounded-sm"
              src="/dp2.jpg"
              alt=""
            />
          </div>

          <hr className="bg-[#6D798B]/30" />
          {/* Latest Stories */}
          <div className="text-[#6D798B] font-inter font-medium mt-4">
            LATEST STORIES
          </div>
          <div className="flex my-4 space-x-2 font-inter">
            <div>
              <h1 className="font-medium">Leaders Arena</h1>
              <h1 className="text-sm w-52 font-medium text-[#4B587C]">
                Turn your team into a productivity powerhouse
              </h1>
            </div>
            <Image
              width={48}
              height={48}
              style={{ objectFit: "cover" }}
              className="rounded-sm"
              src="/dp2.jpg"
              alt=""
            />
          </div>
          <div className="flex my-4 space-x-2 font-inter">
            <div>
              <h1 className="font-medium">Leaders Arena</h1>
              <h1 className="text-sm w-52 font-medium text-[#4B587C]">
                Turn your team into a productivity powerhouse
              </h1>
            </div>
            <Image
              width={48}
              height={48}
              style={{ objectFit: "cover" }}
              className="rounded-sm"
              src="/dp2.jpg"
              alt=""
            />
          </div>
          <div className="flex my-4 space-x-2 font-inter">
            <div>
              <h1 className="font-medium">Leaders Arena</h1>
              <h1 className="text-sm w-52 font-medium text-[#4B587C]">
                Turn your team into a productivity powerhouse
              </h1>
            </div>
            <Image
              width={48}
              height={48}
              style={{ objectFit: "cover" }}
              className="rounded-sm"
              src="/dp2.jpg"
              alt=""
            />
          </div>

          <hr className="bg-[#6D798B]/30" />

          <h1 className="text-[#6D798B] font-inter font-medium mt-4">
            WANT TO LAUNCH YOUR OWN PRODUCT
          </h1>
          <div className="mt-2">
            <Link href="/createlisting">
              <button className=" bg-white w-48 h-8 hover:bg-purple-700 hover:text-white text-purple-700 border-2 border-solid border-purple-700 font-bold text-lg mr-2 mt-2 sm:w-auto px-6 rounded-md font-inter">
                Create your Listing
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
