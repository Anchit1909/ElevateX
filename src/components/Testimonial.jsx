import Image from "next/image";
import React from "react";
import {
  motion,
  useViewportScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function Testimonial() {
  const [ref, inView] = useInView({
    triggerOnce: false, // Animation triggers only once
    threshold: 0.1, // Trigger animation when the component is 10% visible
  });
  return (
    <section className="py-16">
      <div className="relative max-w-screen-xl mx-auto">
        <motion.h1
          className="px-2 md:px-0 text-center font-poppins font-semibold text-gray-900 text-3xl"
          ref={ref}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
          transition={{ duration: 1 }}
        >
          Growth stories from our community
        </motion.h1>
        <div className="absolute right-36 -top-28 w-[412px] h-[412px] bg-[#B3AAFC]/[16%] rounded-full -z-10  blur-3xl" />
        <div className="absolute -right-8 -top-28 w-[412px] h-[412px] bg-[#E841E1]/[16%] rounded-full -z-10  blur-3xl" />
        <div className="absolute -right-28 -top-28  w-[412px] h-[412px] bg-[#F1BB31]/[16%] rounded-full -z-10 blur-3xl" />
        <div className="absolute -right-48 -top-32 w-[412px] h-[412px] bg-[#DFF363]/[16%] rounded-full -z-10 blur-3xl" />
        <p className="px-2 md:px-0 text-center text-[#6D798B] font-inter">
          Thousands of founders are using ElevateX to promote and sell their
          startups
        </p>
        <motion.div
          className="flex space-x-2 justify-center items-center mt-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
          transition={{ duration: 1 }}
        >
          <Image src="/founder_images.png" alt="" height={42} width={348} />
          {/* <img
            className="w-10 h-10 rounded-full object-cover"
            src="/dp2.jpg"
            alt=""
          />
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="/dp3.jpg"
            alt=""
          />
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="/dp4.jpg"
            alt=""
          />
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="/dp5.jpg"
            alt=""
          />
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="/dp6.jpg"
            alt=""
          />
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="/dp7.jpg"
            alt=""
          /> */}
        </motion.div>
        <motion.div
          className="flex flex-col lg:flex-row my-12 mx-24 space-x-14 border rounded-xl bg-white"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 1 }}
        >
          <Image
            className="rounded-xl lg:rounded-tl-xl lg:rounded-bl-xl lg:rounded-br-none lg:rounded-tr-none"
            src="/startup4.jpg"
            alt=""
            height={384}
            width={288}
          />
          <div className="flex flex-col items-start">
            <Image
              className="mt-8"
              src="/logo.png"
              height={32}
              width={144}
              alt=""
            />
            <h1 className="text-2xl mt-6 font-poppins font-medium max-w-xl px-2 md:px-0">
              “If you’re serious about growth, you need more than “thought
              leadership” blog posts, courses, and podcasts.”
            </h1>
            <div className="mt-32 flex flex-col md:flex-row justify-between md:space-x-64 mb-6 lg:mb-0">
              <div>
                <p className="text-[#1C1F34] font-medium font-poppins text-left">
                  Akarsh Saxena
                </p>
                <p className="text-[#6D798B] font-inter font-medium text-sm text-left">
                  Founder of WebSolutionsZ
                </p>
              </div>
              <button className="mt-4 md:mt-0 text-[#6938EF] border-2 font-inter rounded-3xl py-1 px-4 font-bold border-[#6938EF] hover:underline text-lg">
                Read their story
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonial;
