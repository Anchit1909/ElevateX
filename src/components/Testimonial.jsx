import React from "react";

function Testimonial() {
  return (
    <section className="py-16">
      <div className="relative max-w-screen-xl mx-auto">
        <h1 className="text-center font-poppins font-semibold text-gray-900 text-3xl">
          Growth stories from our community
        </h1>
        <div className="absolute right-64 -top-10 w-[500px] h-[500px] bg-[#B3AAFC]/20 rounded-full -z-10 blur-3xl" />
        <div className="absolute right-16 -top-6 w-[500px] h-[500px] bg-[#E841E1]/20 rounded-full -z-10 blur-3xl" />
        <div className="absolute -right-40  w-[400px] h-[400px] bg-[#F1BB31]/20 rounded-full -z-10 blur-3xl" />
        {/* <div className="absolute -right-24 bottom-8 w-96 h-96 bg-[#DFF363]/20 rounded-full -z-10 blur-3xl" /> */}
        <p className="text-center text-[#6D798B] font-inter">
          Thousands of founders are using ProduictHunt to promote and sell their
          startups
        </p>
        <div className="flex space-x-2 justify-center items-center mt-4">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="/dp1.jpg"
            alt=""
          />
          <img
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
          />
        </div>
        <div className="flex my-12 mx-24 space-x-14 border rounded-xl bg-white">
          <img
            className="h-96 w-72 rounded-tl-xl rounded-bl-xl"
            src="/startup.jpg"
            alt=""
          />
          <div className="flex flex-col items-start">
            <img className="h-8 mt-8" src="/logo.png" alt="" />
            <h1 className="text-2xl mt-6 font-poppins font-medium max-w-xl">
              “If you’re serious about growth, you need more than “thought
              leadership” blog posts, courses, and podcasts.”
            </h1>
            <div className="mt-32 flex flex-row justify-between space-x-64">
              <div>
                <p className="text-[#1C1F34] font-medium font-poppins text-left">
                  Akarsh Saxena
                </p>
                <p className="text-[#6D798B] font-inter font-medium text-sm text-left">
                  Founder of Riya Gupta
                </p>
              </div>
              <button className="text-[#6938EF] border-2 font-inter rounded-3xl py-1 px-4 font-bold border-[#6938EF] hover:underline text-lg">
                Read their story
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
