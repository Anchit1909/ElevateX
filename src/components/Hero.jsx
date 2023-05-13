import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section>
      <div className="flex flex-col max-w-screen-xl items-center justify-center mx-auto md:flex-row ">
        <div className="my-36 flex flex-col flex-1">
          <motion.h1 className="px-3 lg-px-0 font-semibold text-6xl text-gray-900 font-poppins max-w-lg md:max-w-xl relative z-10 " initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} >
            Post Your Startup Idea and Get Discovered
          </motion.h1>
          <div className="absolute -left-40 top-4 w-96 h-96 bg-[#B3AAFC]/[25%] rounded-full blur-3xl" />
          <div className="absolute -left-12 -top-36 w-96 h-96 bg-[#E841E1]/[25%] rounded-full blur-3xl" />
          <div className="absolute left-32 -top-24 w-96 h-96 bg-[#DFF363]/[25%] rounded-full blur-3xl" />
          <div className="absolute left-28 -top-40 w-96 h-96 bg-[#F1BB31]/[25%] rounded-full blur-3xl" />
          <motion.p className="px-3 lg-px-0 text-gray-600 mt-4 text-lg max-w-md font-inter z-10"initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
            Get the platform to show your startup or invest your money in some
            useful startups.
          </motion.p>
          <motion.div className="px-3 lg-px-0 mt-4 space-x-2 font-inter flex flex-row items-center z-10" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
            <button
              onClick={() => signIn("google", { callbackUrl: "/products" })}
              className="my-auto bg-[#7A5AF8] text-white font-bold text-lg py-1 px-4 rounded-3xl"
            >
              Get Started
            </button>
            <button className="text-[#6938EF] border rounded-3xl py-1 px-4 font-bold border-[#6938EF] hover:underline">
              View Demo Video
            </button>
          </motion.div>
        </div>
        <motion.div className="relative flex items-center justify-center w-1/2" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 1 }} transition={{ duration: 1 }}>
          {/* <img src="/heroimage5.png" className="h-[440px] " alt="" /> */}
          <Image
            src="/hero_image2.png"
            height={600}
            width={600}
            alt=""
            className="z-10"
          />
          <div className="absolute -right-40 -top-72 w-[500px] h-[500px] bg-[#2BE5EE]/[15%] rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
