import Image from "next/image";
import React from "react";
import { GiDarkSquad } from "react-icons/gi";
import { GiCoins } from "react-icons/gi";
import { GiGreatPyramid } from "react-icons/gi";

function Features() {
  return (
    <section>
      <div className="flex flex-col xl:flex-row max-w-screen-xl mx-auto items-center justify-center gap-x-40 py-20 px-4 2xl:px-0">
        {/* Left */}
        <div>
          <div className="mb-12">
            <button className="border px-4 sm:px- rounded-2xl text-[#269140] bg-[#E9FBEF] font-inter font-bold">
              Features
            </button>
          </div>
          <div className="mt-6 space-y-4 mb-12 flex flex-col">
            <h1 className="font-semibold text-3xl text-gray-900 font-poppins max-w-3xl">
              If you’re serious about growth, you need more than “thought
              leadership” blog posts, courses, and podcasts
            </h1>
            <p className="text-lg text-gray-600 font-inter max-w-3xl">
              ElevateX is a cutting-edge platform designed to bridge the gap
              between startups and investors.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row items-center">
              <div>
                <GiCoins size={32} color="#7A5AF8" />
              </div>
              <div className="mx-3 text-black max-w-lg">
                <div className="font-bold font-inter text-lg">
                  Search for the investor
                </div>
                <div className="text-[#6D798B] font-inter text-sm">
                  Take your startup to the next height by finding an investor
                  who can add their experience and funds to your startup and
                  make it reach the next level.
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div>
                <GiGreatPyramid size={32} color="#7A5AF8" />
              </div>
              <div className="mx-3 text-black max-w-lg">
                <div className="font-bold font-inter text-lg">
                  Invest in some leading startups
                </div>
                <div className="text-[#6D798B] font-inter text-sm">
                  Get your money invested in some brilliant startups and
                  increase your growth as well as their growth by making money
                  in your bank use.
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div>
                <GiDarkSquad size={32} color="#7A5AF8" />
              </div>
              <div className="mx-3 text-black max-w-lg">
                <div className="font-bold font-inter text-lg">
                  Community Support
                </div>
                <div className="text-[#6D798B] font-inter text-sm">
                  Get your startup to stand out in the crowd by showcasing it in
                  front of people who are working in the same field and a
                  reverberating with their experiences.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="w-1/2 relative mr-36 md:mr-12 lg:mr-0">
          <div className="absolute right-10 -top-6 w-96 h-96 bg-[#B3AAFC]/20 rounded-full -z-10 blur-3xl" />
          <div className="absolute -right-10 -top-2 w-96 h-96 bg-[#E841E1]/10 rounded-full -z-10 blur-3xl" />
          {/* <div className="absolute -right-28 top-8 w-96 h-96 bg-[#F1BB31]/10 rounded-full -z-10 blur-3xl" /> */}
          <div className="absolute -right-36 top-20 w-96 h-96 bg-[#DFF363]/20 rounded-full -z-10 blur-3xl" />
          <Image src="/startup1.jpg" width={320} height={320} alt="" />
          <Image
            className="ml-40 -mt-32"
            src="/startup2.jpg"
            width={320}
            height={320}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
