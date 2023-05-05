import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import React from "react";

function Startup() {
  return (
    <>
      <Header />
      <div className="flex mt-24 max-w-screen-xl px-32">
    <div className="md:w-6/12">
      <img className="w-40" src="/company1.png" alt="" />
      <h1 className="text-gray-600 text-2xl max-w-md">
        Your app,Enterpise Ready
      </h1>
    </div>
    <div className="md:ml-72 mt-10  space-x-2 flex flex-col md:flex-row items-center justify-start">
      <button className="my-auto text-violet-700 border text-lg rounded-md py-1 px-4 font-bold border-violet-700">
        Visit
      </button>
      <button className="my-auto bg-violet-500 text-white font-bold text-lg py-1 px-4 rounded-md">
        Upvote
      </button>
    </div>
  </div>
  <div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto mb-6">
    <div className="px-4 xl:px-4 lg:border-r-2 pr-3 border-gray-200 mt-20">
      <div className="mt-6 text-gray-600 text-lg">
        <h1>
          Start seeling to enterpise customers with just a few lines of
          code.Implement feature like single sign-on in minutes instead of
          months.
        </h1>
        <h1 />
      </div>
      <div className="flex my-4">
        <h1 className="text-gray-600">Launched in</h1>
        <button className="border-2 border-green-600 text-green-600 mx-2 px-2 rounded-lg font-bold">
          Marketing
        </button>
      </div>
      <div className="flex space-x-2 md:space-x-10 mt-10">
        <img className="w-6/12 h-64" src="my1.webp" alt="" />
        <img className="w-5/12 h-64" src="my2.jpg" alt="" />
      </div>
      <div className="flex mt-10 space-x-2 justify-center items-center">
        <img
          className="w-5 h-5 md:w-10 md:h-10 rounded-full"
          src="dp1.jpg"
          alt=""
        />
        <img
          className="w-5 h-5 md:w-10 md:h-10 rounded-full"
          src="dp2.jpg"
          alt=""
        />
        <img
          className="w-5 h-5 md:w-10 md:h-10 rounded-full"
          src="dp3.jpg"
          alt=""
        />
        <img
          className="w-5 h-5 md:w-10 md:h-10 rounded-full"
          src="dp4.jpg"
          alt=""
        />
        <img
          className="w-5 h-5 md:w-10 md:h-10 rounded-full"
          src="dp5.jpg"
          alt=""
        />
        <img
          className="w-5 h-5 md:w-10 md:h-10 rounded-full"
          src="dp6.jpg"
          alt=""
        />
        <img
          className="w-5 h-5 md:w-10 md:h-10 rounded-full"
          src="dp7.jpg"
          alt=""
        />
        <img
          className="w-5 h-5 md:w-10 md:h-10 rounded-full"
          src="dp2.jpg"
          alt=""
        />
        <img
          className="w-5 h-5 md:w-10 md:h-10 rounded-full"
          src="dp3.jpg"
          alt=""
        />
        <img
          className="w-5 h-5 md:w-10 md:h-10 rounded-full"
          src="dp4.jpg"
          alt=""
        />
        <img
          className="w-5 h-5 md:w-10 md:h-10 rounded-full"
          src="dp5.jpg"
          alt=""
        />
        <img
          className="w-5 h-5 md:w-10 md:h-10 rounded-full"
          src="dp6.jpg"
          alt=""
        />
        <img
          className="w-5 h-5 md:w-10 md:h-10 rounded-full"
          src="dp2.jpg"
          alt=""
        />
        <img
          className="w-5 h-5 md:w-10 md:h-10 rounded-full"
          src="dp3.jpg"
          alt=""
        />
        <img
          className="w-5 h-5 md:w-10 md:h-10 rounded-full"
          src="dp4.jpg"
          alt=""
        />
      </div>
      <div className="my-14">
        <h1 className="text-gray-900 text-lg font-semibold mb-1">
          Interested in the product?
        </h1>
        <button className="border-2 px-2 rounded-lg text-xl font-bold border-indigo-500 text-indigo-500">
          Schedule Meeting with the founder
        </button>
      </div>
      <div className="mt-10">
        <h1 className="text-gray-900 text-3xl font-bold">
          Support is great. Feedback is even better.
        </h1>
        <h1 className="text-gray-600 text-lg">
          <i>
            We invite you to share your valuable feedback and suggestions with
            us, whether it's regarding our serivces, user experience, pricing,
            or any other aspect. Your input will play a crucial role in shaping
            the future of WorkOs, and we are genuinely excited to learn from
            your expertise.
          </i>
        </h1>
      </div>
    </div>
    <div className="my-16 md:my-28 md:w-3/12 mx-auto">
      <div className="pl-7 w-72">
        <div className="text-gray-700">TRENDING LAUNCHES --&gt;</div>
        <div className="flex my-4 space-x-2">
          <div>
            <h1 className="text-sm">Leaders Arena</h1>
            <h1 className="text-xs w-52">
              Turn your team into a productivity powerhouse
            </h1>
          </div>
          <img className="w-12 h-12" src="dp2.jpg" alt="" />
        </div>
        <div className="flex my-4 space-x-2">
          <div>
            <h1 className="text-sm">Leaders Arena</h1>
            <h1 className="text-xs w-52">
              Turn your team into a productivity powerhouse
            </h1>
          </div>
          <img className="w-12 h-12" src="dp2.jpg" alt="" />
        </div>
        <div className="flex my-4 space-x-2">
          <div>
            <h1 className="text-sm">Leaders Arena</h1>
            <h1 className="text-xs w-52">
              Turn your team into a productivity powerhouse
            </h1>
          </div>
          <img className="w-12 h-12" src="dp2.jpg" alt="" />
        </div>
        <hr className="bg-gray-900" />
        <div className="text-gray-700 mt-4">LATEST STORIES --&gt;</div>
        <div className="flex my-3 space-x-2">
          <div>
            <h1 className="text-sm">
              5 pro tips for making a great product demo video
            </h1>
            <h1 className="text-xs w-52">5 min read</h1>
          </div>
          <img className="w-12 h-12" src="dp2.jpg" alt="" />
        </div>
        <div className="flex my-4 space-x-2">
          <div>
            <h1 className="text-sm">
              5 pro tips for making a great product demo video
            </h1>
            <h1 className="text-xs w-52">5 min read</h1>
          </div>
          <img className="w-12 h-12" src="dp2.jpg" alt="" />
        </div>
        <div className="flex my-4 space-x-2">
          <div>
            <h1 className="text-sm">
              5 pro tips for making a great product demo video
            </h1>
            <h1 className="text-xs w-52">5 min read</h1>
          </div>
          <img className="w-12 h-12" src="dp2.jpg" alt="" />
        </div>
        <hr className="bg-gray-900" />
        <h1 className="mt-6">WANT TO LAUNCH YOUR OWN PRODUCT --&gt;</h1>
        <link href="/createlisting" />
        <button className="mt-2 w-60 bg-violet-500 text-white font-bold text-lg py-1 px-4 rounded-3xl">
          Create your listing
        </button>
      </div>
    </div>
  </div>
  <div className="bg-gray-100 text-center py-14">
    <div className="text-2xl px-2 md:px-64 text-gray-900 font-semibold">
      “Article Summary powered by ChatGPT is a free Chrome Extension that lets
      you quickly access the summary of any web articles you are reading. Use
      this extension to save time and learn more quickly.”
    </div>
    <div>
      <img
        className="w-20 h-20 mt-8 mx-auto rounded-full"
        src="/dp8.jpg"
        alt=""
      />
      <h1 className="text-xl font-semibold">Disha Patani</h1>
      <h2 className="text-xs text-gray-900">CEO of Boys Heart</h2>
    </div>
  </div>
    </>
  );
}
export default Startup;
