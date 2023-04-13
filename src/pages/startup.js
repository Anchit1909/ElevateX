import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import React from "react";

function Startup() {
  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto">
        <div className="px-4 xl:px-4 lg:border-r-2 pr-3 border-gray-200 mt-24">
          <div className="flex">
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
          <div className="mt-6 text-gray-600 text-lg">
            <h1>
              Start seeling to enterpise customers with just a few lines of
              code.Implement feature like single sign-on in minutes instead of
              months.
            </h1>
            <h1></h1>
          </div>
          <hr className="w-11/12 my-10 bg-gray-200" />
          <div className="flex space-x-2 md:space-x-10 mt-20">
            <img className="w-6/12 h-64" src="my1.webp" alt="" />
            <img className="w-5/12 h-64" src="my2.jpg" alt="" />
          </div>
          <div className="flex mt-10 space-x-2 justify-center items-center">
            <img className="w-10 h-10 rounded-3xl" src="dp1.jpg" alt="" />
            <img className="w-10 h-10 rounded-3xl" src="dp2.jpg" alt="" />
            <img className="w-10 h-10 rounded-3xl" src="dp3.jpg" alt="" />
            <img className="w-10 h-10 rounded-3xl" src="dp4.jpg" alt="" />
            <img className="w-10 h-10 rounded-3xl" src="dp5.jpg" alt="" />
            <img className="w-10 h-10 rounded-3xl" src="dp6.jpg" alt="" />
            <img className="w-10 h-10 rounded-3xl" src="dp7.jpg" alt="" />
            <img className="w-10 h-10 rounded-3xl" src="dp2.jpg" alt="" />
            <img className="w-10 h-10 rounded-3xl" src="dp3.jpg" alt="" />
            <img className="w-10 h-10 rounded-3xl" src="dp4.jpg" alt="" />
            <img className="w-10 h-10 rounded-3xl" src="dp5.jpg" alt="" />
            <img className="w-10 h-10 rounded-3xl" src="dp6.jpg" alt="" />
            <img className="w-10 h-10 rounded-3xl" src="dp2.jpg" alt="" />
            <img className="w-10 h-10 rounded-3xl" src="dp3.jpg" alt="" />
            <img className="w-10 h-10 rounded-3xl" src="dp4.jpg" alt="" />
          </div>
          <div className="mt-20 bg-blue-50">
            <h1 className="text-gray-900 text-3xl font-bold pl-10">
              Support is great. Feedback is even better.
            </h1>
            <h1 className="text-gray-600 pl-10 text-lg">
              <i>
                We invite you to share your valuable feedback and suggestions
                with us, whether it's regarding our serivces, user experience,
                pricing, or any other aspect. Your input will play a crucial
                role in shaping the future of WorkOs, and we are genuinely
                excited to learn from your expertise.
              </i>
            </h1>
          </div>
        </div>
        <div className="my-16 md:my-32 md:w-3/12 mx-auto">
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
            <Link href="/createlisting">
              <button className="mt-2 w-60 bg-violet-500 text-white font-bold text-lg py-1 px-4 rounded-3xl">
                Create your listing
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Startup;
