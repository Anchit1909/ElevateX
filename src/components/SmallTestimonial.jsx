import React from "react";
import {
  motion,
  useViewportScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
function SmallTestimonial() {
  const [ref, inView] = useInView({
    triggerOnce: false, // Animation triggers only once
    threshold: 0.1, // Trigger animation when the component is 10% visible
  });

  return (
    <motion.section
      className="bg-[#FAFBFD] mt-12 py-20 section"
      ref={ref}
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -200 }}
      transition={{ duration: 1 }}
    >
      <div className="px-6 xl:px-0 text-center font-poppins max-w-screen-xl mx-auto flex flex-col items-center justify-center">
        <div>
          <h1 className="sm:text-lg md:text-2xl lg:text-3xl leading-10 tracking-tight max-w-6xl">
            "If you don't build your dream, someone else will hire you to help
            them build theirs."
          </h1>
        </div>
        <div className="flex mt-6 justify-center items-center space-x-6">
          <h2 className="font-semibold">Tony Gaskins</h2>
          <h2 className="text-[#98A2B2]"></h2>
        </div>
      </div>
    </motion.section>
  );
}

export default SmallTestimonial;
