import React from "react";
import { GiDarkSquad } from "react-icons/gi";
import { GiCoins } from "react-icons/gi";
import { GiGreatPyramid } from "react-icons/gi";

function Features() {
  return (
    <section>
      <div className="flex max-w-screen-xl mx-auto items-center justify-center gap-x-40 py-20">
        {/* Left */}
        <div>
          <div className="mb-12">
            <button className="border px-4 rounded-2xl text-[#269140] bg-[#E9FBEF] font-inter font-bold">
              Features
            </button>
          </div>
          <div className="mt-6 space-y-4 mb-12 flex flex-col">
            <h1 className="font-semibold text-3xl text-gray-900 font-poppins max-w-3xl">
              If you’re serious about growth, you need more than “thought
              leadership” blog posts, courses, and podcasts
            </h1>
            <p className="text-lg text-gray-600 font-inter max-w-3xl">
              You need advice, support, and feedback, that’s 100% tailored to
              you. From operators that are actually “doing the things” (not just
              writing about it on LinkedIn).
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row items-center">
              <div>
                <GiCoins size={32} color="#7A5AF8" />
              </div>
              <div className="mx-3 text-black max-w-lg">
                <div className="font-bold font-inter text-lg">
                  Hop on 1:1 calls with vetted mentors
                </div>
                <div className="text-[#6D798B] font-inter text-sm">
                  Talk directly to your mentor 1-on-1 using Zoom or Google Meet
                  and learn directly from the people doing what you want to do
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div>
                <GiGreatPyramid size={32} color="#7A5AF8" />
              </div>
              <div className="mx-3 text-black max-w-lg">
                <div className="font-bold font-inter text-lg">
                  Hop on 1:1 calls with vetted mentors
                </div>
                <div className="text-[#6D798B] font-inter text-sm">
                  Talk directly to your mentor 1-on-1 using Zoom or Google Meet
                  and learn directly from the people doing what you want to do
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div>
                <GiDarkSquad size={32} color="#7A5AF8" />
              </div>
              <div className="mx-3 text-black max-w-lg">
                <div className="font-bold font-inter text-lg">
                  Hop on 1:1 calls with vetted mentors
                </div>
                <div className="text-[#6D798B] font-inter text-sm">
                  Talk directly to your mentor 1-on-1 using Zoom or Google Meet
                  and learn directly from the people doing what you want to do
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="w-1/2 relative">
          <div className="absolute right-10 -top-6 w-96 h-96 bg-[#B3AAFC]/20 rounded-full -z-10 blur-3xl" />
          <div className="absolute -right-10 -top-2 w-96 h-96 bg-[#E841E1]/10 rounded-full -z-10 blur-3xl" />
          <div className="absolute -right-28 top-8 w-96 h-96 bg-[#F1BB31]/10 rounded-full -z-10 blur-3xl" />
          <div className="absolute -right-36 top-20 w-96 h-96 bg-[#DFF363]/20 rounded-full -z-10 blur-3xl" />
          <img className="mt-20 w-80" src="dp7.jpg" alt="" />
          <img className="ml-40 -mt-32 w-80" src="dp7.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Features;
