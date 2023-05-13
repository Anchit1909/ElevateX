import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import React from "react";

function startupstories() {
  return (
    <div>
      <Head></Head>
      <Header />
      <section>
        <div className="flex flex-col md:flex-row bg-blue-100">
          <img
            className="py-6 md:h-6/12 md:w-6/12 px-5 lg:pl-5"
            src="/stories/mainheadimg.jpg"
            alt=""
          />
          <div className="flex items-center justify-center flex-col mx-10">
            <h1 className="text-4xl text-center font-bold text-gray-900 font-poppins">
              STARTUP STORIES
            </h1>
            <p className="my-6 md:mb-0 md:mt-6 text-lg font-poppins text-center">
              Every startup is a story, waiting to be told. It's a story of
              passion, perseverance, and the willingness to take risks in
              pursuit of a dream.
            </p>
          </div>
        </div>
        <div>
          <div className="my-28 flex flex-col lg:flex-row w-24 lg:h-12 md:space-x-3 lg:space-x-14 mx-auto items-center justify-center space-y-4 lg:space-y-0">
            <img src="/stories/ati_logo.png" alt="" />
            <img src="/stories/apple_logo2.png" alt="" />
            <img src="/stories/Twilio-logo-red.png" alt="" />
            <img src="/stories/Tinder.png" alt="" />
            <img src="/stories/adobe_logo.png" alt="" />
            <img src="/stories/Amazon.webp" alt="" />
            <img src="/stories/apple_logo.png" alt="" />
          </div>
          <div className="my-20 text-center">
            <h1 className="font-semibold text-5xl lg:px-84 text-gray-800 font-poppins">
              Some Leading Startup Stories
            </h1>
          </div>
          <div className="my-20 flex flex-col items-start justify-center lg:items-center lg:flex-row mx-10 lg:mx-40 lg:space-x-4 space-y-4 lg:space-y-0">
            <div className="lg:w-7/12 lg:pl-10">
              <h1 className="text-3xl font-medium lg:pt-2 xl:pt-6 text-gray-900 font-poppins">
                LIGHTMATTER - "Revolutionizing computing with photonic
                processors"
              </h1>
              <h1 className="pt-6 text-gray-600 font-inter">
                The idea for Lightmatter came about when Harris and Bunandar
                were researching ways to improve computing performance using
                light instead of electricity.
              </h1>
              <div className="pt-6 flex space-x-2">
                <button className="border rounded-3xl py-1 px-4 font-bold border-[#6938EF] text-[#6938EF] hover:underline">
                  READ MORE {">"}
                </button>
              </div>
            </div>
            <div>
              <img
                className="h-96 w-[500px] pr-10"
                src="/stories/my3.webp"
                alt=""
              />
            </div>
          </div>
          <div className="my-20 flex flex-col items-start justify-center lg:items-center lg:flex-row mx-10 lg:mx-40 lg:space-x-4 space-y-4 lg:space-y-0">
            <div className="lg:w-7/12 lg:pl-10">
              <h1 className="text-3xl font-medium lg:pt-2 xl:pt-6 text-gray-900 font-poppins">
                VSCO - "A community for creators, by creators"
              </h1>
              <h1 className="pt-6 text-gray-600">
                The idea for VSCO came about when Flory, a photographer, was
                frustrated with the limited editing capabilities of existing
                photo apps.
              </h1>
              <div className="pt-6 flex space-x-2">
                <button className="border rounded-3xl py-1 px-4 font-bold border-[#6938EF] text-[#6938EF] hover:underline">
                  READ MORE {">"}
                </button>
              </div>
            </div>
            <div>
              <img
                className="h-96 w-[500px] pr-10"
                src="/stories/my1.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="my-20 flex flex-col items-start justify-center lg:items-center lg:flex-row mx-10 lg:mx-40 lg:space-x-4 space-y-4 lg:space-y-0">
            <div className="lg:w-7/12 lg:pl-10">
              <h1 className="text-3xl font-medium lg:pt-2 xl:pt-6 text-gray-900 font-poppins">
                LUMINAR - "Bringing autonomous vehicles to reality with lidar"
              </h1>
              <h1 className="pt-6 text-gray-600">
                The idea for Luminar came about when Russell was frustrated with
                the limitations of existing lidar technology for autonomous
                vehicles.
              </h1>
              <div className="pt-6 flex space-x-2">
                <button className="border rounded-3xl py-1 px-4 font-bold border-[#6938EF] text-[#6938EF] hover:underline">
                  READ MORE {">"}
                </button>
              </div>
            </div>
            <div>
              <img
                className="h-96 w-[500px] pr-10"
                src="/stories/my5.jpeg"
                alt=""
              />
            </div>
          </div>
          <div className="my-20 flex flex-col items-start justify-center lg:items-center lg:flex-row mx-10 lg:mx-40 lg:space-x-4 space-y-4 lg:space-y-0">
            <div className="lg:w-7/12 lg:pl-10">
              <h1 className="text-3xl font-medium lg:pt-2 xl:pt-6 text-gray-900 font-poppins">
                SLACK - "Where work happens"
              </h1>
              <h1 className="pt-6 text-gray-600">
                The idea for Slack came about when Butterfield and his team were
                building a video game and realized that they needed a better way
                to communicate with each other.
              </h1>
              <div className="pt-6 flex space-x-2">
                <button className="border rounded-3xl py-1 px-4 font-bold border-[#6938EF] text-[#6938EF] hover:underline">
                  READ MORE {">"}
                </button>
              </div>
            </div>
            <div>
              <img
                className="h-96 w-[500px] pr-10"
                src="/stories/my6.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default startupstories;
