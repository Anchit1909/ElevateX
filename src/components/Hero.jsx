import React from "react";

function Hero() {
  return (
    <section>
      <div className="flex bg-gradient-to-br from-violet-400 to-white">
      <div className="my-36 ml-32 w-3/6">
        <h1 className="font-bold text-7xl text-gray-900">Post Your Digital Product and Get Discovered</h1>
        <p className="text-gray-600 mt-4 text-lg w-6/12">Get the kind of personalized advice you’d never find reading blog posts or weatching courses.</p>
        <div className="mt-4 space-x-2">
          <button className="my-auto bg-violet-500 text-white font-bold text-lg py-1 px-4 rounded-3xl"><p className="login">Get Started</p></button>
          <button className="text-violet-700 border rounded-3xl py-1 px-4 font-bold border-violet-700 hover:underline">View Demo Video</button>
        </div>
      </div>
      <div className="h-6/12 w-6/12">
        <img src="/image.jpg" alt="" />
      </div>
    </div>
    </section>
  );
}

export default Hero;
