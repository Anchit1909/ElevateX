import Image from "next/image";
import React from "react";

function HowItWorks() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="mb-12">
          <button className="border px-4 rounded-2xl text-[#269140] bg-[#E9FBEF] font-inter font-bold">
            How it works
          </button>
        </div>
        <div className="flex flex-col gap-y-32">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <div className="lg:w-1/2 flex flex-col">
              <p className="text-[#6938EF] font-poppins font-medium mb-2">
                Log in and enjoy the ElevateX{"-->"}{" "}
              </p>
              <h1 className="font-semibold font-poppins text-3xl mb-5 text-gray-900 max-w-xl">
                Interact with ElatedX and easily access the way to look at the
                tech startups.
              </h1>
              <p className="text-lg text-[#425466] font-inter max-w-xl">
                Your like and your dislike matters in the startup of everyone so
                give it to the most deserving one
              </p>
            </div>
            <div className="w-1/2 flex items-center justify-center">
              <Image src="/hiwform.png" alt="" width={420} height={420} />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <div className="lg:w-1/2 flex flex-col">
              <p className="text-[#6938EF] font-poppins font-medium mb-2">
                On the way to invest{"-->"}{" "}
              </p>
              <h1 className="font-semibold font-poppins text-3xl mb-5 text-gray-900 max-w-xl">
                The most impactful part of someone's career is "Think Twice,
                give rise"
              </h1>
              <p className="text-lg text-[#425466] font-inter max-w-xl">
                It is the brain of our website as this controls the process that
                regulates our theme and the user has to choose the best out of
                the list
              </p>
            </div>
            <div className="w-1/2 flex items-center justify-center">
              <Image src="/hiw2.png" alt="" width={420} height={420} />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <div className="lg:w-1/2 flex flex-col">
              <p className="text-[#6938EF] font-poppins font-medium mb-2">
                Take a look at the product{"-->"}{" "}
              </p>
              <h1 className="font-semibold font-poppins text-3xl mb-5 text-gray-900 max-w-xl">
                Most Anxious time for the product and the invester to have a
                contract in future.
              </h1>
              <p className="text-lg text-[#425466] font-inter max-w-xl">
                Get to know more about the product that you have selected and
                understand the work flow of that organization.
              </p>
            </div>
            <div className="w-1/2 flex items-center justify-center">
              <Image src="/hiw3.png" alt="" width={420} height={420} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
