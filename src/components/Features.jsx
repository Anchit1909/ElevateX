import React from "react";
import { GiDarkSquad } from "react-icons/gi";
import { GiCoins } from "react-icons/gi";
import { GiGreatPyramid } from "react-icons/gi";

function Features() {
  return (
    <section>
     <div className="flex">
     <div className="ml-28 mt-20">
  <p className="my-5 border w-20 px-2 rounded-xl text-green-600 bg-emerald-50">
    Features
  </p>
  <div className="my-4 flex">
    <div className="mt-6">
      <h1 className="font-bold text-4xl text-gray-900">
        If you’re serious about growth, you need more than “thought leadership”
        blog posts, courses, and podcasts
      </h1>
      <h1 className="text-xl text-gray-600">
        You need advice, support, and feedback, that’s 100% tailored to you.
        From operators that are actually “doing the things” (not just writing
        about it on LinkedIn).
      </h1>
    </div>
  </div>
  <div className="flex w-7/12">
    <div className="mt-3"><GiCoins size={30} color="#7A5AF8"/></div>
    <div className="mx-3 text-gray-500">
    <div className="font-bold"> Hop on 1:1 calls with vetted mentors</div>
    <div className="text-gray-500">
      Talk directly to your mentor 1-on-1 using Zoom or Google Meet and learn
      directly from the people doing what you want to do
    </div>
    </div>
  </div>
  <div className="flex w-7/12">
    <div className="mt-3"><GiGreatPyramid size={30} color="#7A5AF8"/></div>
    <div className="mx-3 text-gray-500">
    <div className="font-bold"> Hop on 1:1 calls with vetted mentors</div>
    <div className="text-gray-500">
      Talk directly to your mentor 1-on-1 using Zoom or Google Meet and learn
      directly from the people doing what you want to do
    </div>
    </div>
  </div>
  <div className="flex w-7/12">
    <div className="mt-3"><GiDarkSquad size={30} color="#7A5AF8"/></div>
    <div className="mx-3 text-gray-500">
    <div className="font-bold">Hop on 1:1 calls with vetted mentors</div>
    <div className="text-gray-500">
      Talk directly to your mentor 1-on-1 using Zoom or Google Meet and learn
      directly from the people doing what you want to do
    </div>
    </div>
  </div>
</div>
<div className="w-11/12">
  <img className="mt-20 w-80 h-80 ml-20" src="dp7.jpg" alt="" />
  <img className="ml-52 -mt-32 w-80 h-80" src="dp7.jpg" alt="" />
</div>
     </div>

    </section>
  );
}

export default Features;
