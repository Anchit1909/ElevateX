  import { signIn } from "next-auth/react";
  import React from "react";

  function Hero() {
    return (
      <section>
        <div className="flex flex-col max-w-screen-xl items-center justify-center mx-auto gap-x-24 md:flex-row">
          <div className="my-36 flex flex-col">
            <h1 className="px-3 lg-px-0 font-semibold text-6xl text-gray-900 font-poppins max-w-lg relative">
            Post Your Startup Idea and Get Discovered
            </h1>
            <div className="absolute -left-40 top-1 w-96 h-96 bg-[#B3AAFC]/40 rounded-full blur-3xl -z-10" />
            <div className="absolute -left-20 -top-28 w-96 h-96 bg-[#E841E1]/40 rounded-full blur-3xl -z-10" />
            <div className="absolute left-28 -top-28 w-96 h-96 bg-[#F1BB31]/40 rounded-full blur-3xl -z-10" />
            <div className="absolute left-52 -top-28 w-96 h-96 bg-[#DFF363]/40 rounded-full blur-3xl -z-10" />
            <p className="px-3 lg-px-0 text-gray-600 mt-4 text-lg max-w-md font-inter">
            Get the platform to show your startup or invest your money in some useful startups.
            </p>
            <div className="px-3 lg-px-0 mt-4 space-x-2 font-inter flex flex-row items-center">
              <button
                onClick={() => signIn("google", { callbackUrl: "/products" })}
                className="my-auto bg-[#7A5AF8] text-white font-bold text-lg py-1 px-4 rounded-3xl"
              >
                Get Started
              </button>
              <button className="text-[#6938EF] border rounded-3xl py-1 px-4 font-bold border-[#6938EF] hover:underline">
                View Demo Video
              </button>
            </div>
          </div>
          <div className="w-1/2">
            <img src="/hero_image.png" alt="" />
          </div>
        </div>
      </section>
    );
  }

  export default Hero;

