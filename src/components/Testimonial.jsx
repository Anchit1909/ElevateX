import React from "react";

function Testimonial() {
  return (
    <section>
      <div className="bg-gradient-to-tr from-white to-indigo-500">
        <h1 className="text-center font-bold text-gray-900 text-3xl mt-10">
          Growth stories from our community
        </h1>
        <p className="text-center text-gray-500 my-3">
          Thousands of founders are using ProduictHunt to promote and sell their
          startups
        </p>
        <div className="flex space-x-2 justify-center items-center">
          <img className="w-10 h-10 rounded-3xl" src="/dp1.jpg" alt="" />
          <img className="w-10 h-10 rounded-3xl" src="/dp2.jpg" alt="" />
          <img className="w-10 h-10 rounded-3xl" src="/dp3.jpg" alt="" />
          <img className="w-10 h-10 rounded-3xl" src="/dp4.jpg" alt="" />
          <img className="w-10 h-10 rounded-3xl" src="/dp5.jpg" alt="" />
          <img className="w-10 h-10 rounded-3xl" src="/dp6.jpg" alt="" />
          <img className="w-10 h-10 rounded-3xl" src="/dp7.jpg" alt="" />
        </div>
        <div className="flex my-12 mx-52 space-x-14 border rounded-xl bg-white">
          <img
            className="h-96 w-80 rounded-tl-xl rounded-bl-xl"
            src="/startup.jpg"
            alt=""
          />
          <div>
            <img className="h-8 mt-8" src="/logo.png" alt="" />
            <h1 className="text-4xl mt-2">
              “If you’re serious about growth, you need more than “thought
              leadership” blog posts, courses, and podcasts.”
            </h1>
            <div className="mt-16 flex">
              <div>
                <p className="text-gray-900 text-xl font-bold">Akarsh Saxena</p>
                <p className="text-gray-500">Founder of Riya Gupta</p>
              </div>
              <button className="ml-96 text-violet-700 border rounded-3xl p-2 font-bold border-violet-700 hover:underline">
                Read Their Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
