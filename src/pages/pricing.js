import Head from "next/head";
import React from "react";
import getStripe from "@/utils/get-stripejs";
import { fetchPostJSON } from "@/utils/api-helpers";
import { AiFillCheckCircle } from "react-icons/ai";

function pricing() {
  const item = ["Subscription Plan", 799];
  const createSubscriptionSession = async () => {
    // setLoading(true);
    const checkoutSession = await fetchPostJSON(
      "/api/subscription_sessions",
      item
    );
    //Internal server error
    if (checkoutSession.statusCode === 500) {
      console.error(checkoutSession.message);
      return;
    }
    // Redirect to checkout
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      // Make the id field from the Checkout Session creation API response
      // available to this file, so you can provide it as parameter here
      // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
      sessionId: checkoutSession.id,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    console.warn(error.message);

    // setLoading(false);
  };
  return (
    <div>
      <Head>
        <title>Pricing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <div className="px-16 py-20 h-full w-screen xl:h-screen xl:w-full bg-white bg-cover bg-center bg-no-repeat">
          <div className="w-full h-full bg-front-image bg-cover bg-bottom bg-no-repeat shadow-2xl">
            <h1 className="px-16 py-10 text-4xl text-gray-900 font-poppins font-bold">
              Simple,{" "}
              <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                affordable{" "}
              </span>
              <br />
              pricing.
            </h1>
            <div className="px-16 flex flex-col lg:flex-row lg:space-x-10 space-y-8 lg:space-y-0 pb-10 justify-center items-center">
              <div className="space-y-5 w-11/12 pb-8">
                <h1 className="text-[#6938EF] font-poppins font-medium text-xl">
                  Want to experiance more ? Upgrade to{" "}
                  <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent font-semibold">
                    ElevateX Pro
                  </span>{" "}
                  and grab the below benefits
                </h1>
                <div className="text-black text-lg">
                  <h1 className="font-semibold font-poppins">
                    INDUSTRY AND AUDIENCE ANALYSIS
                  </h1>
                  <p className="text-gray-600 font-inter">
                    Benchmark your company against the industry to inform your
                    growth strategy and analyze market trends.
                  </p>
                </div>
                <div className="text-black text-lg">
                  <h1 className="font-semibold font-poppins">
                    COMPANY ANALYSIS
                  </h1>
                  <p className="text-gray-600 font-inter">
                    Uncover competitor digital strategies and deep dive into any
                    company's digital footprint.
                  </p>
                </div>
                <div className="text-black text-lg">
                  <h1 className="font-semibold font-poppins">
                    NETWORKING OPPORTUNITIES
                  </h1>
                  <p className="text-gray-600 font-inter">
                    We offer subscribers the chance to connect with other
                    entrepreneurs, investors, and industry experts.
                  </p>
                </div>
              </div>
              <div className="bg-white border-2 border-[#6938EF] md:w-[60%] rounded-md shadow-lg flex flex-col items-center justify-center font-inter h-96 relative">
                <div className="absolute left-12 -top-40 w-96 h-96 bg-[#B3AAFC]/20 rounded-full blur-3xl" />
                <div className="absolute left-40 -top-60 w-96 h-96 bg-[#E841E1]/10 rounded-full blur-3xl" />
                <div className="flex flex-col lg:flex-row px-10 py-4 items-center">
                  <div>
                    <h1 className="text-2xl text-black font-bold font-poppins">
                      Pro Plan
                    </h1>
                    <h1 className="text-gray-600">
                      Best for large scale uses and extended redistribution
                      rights.
                    </h1>
                  </div>
                  <h1 className="text-black text-3xl font-bold font-poppins">
                    ₹799/Year
                  </h1>
                </div>
                <button
                  className="bg-[#6938EF]/80 text-white rounded-md font-semibold px-10 lg:px-32 py-2 text-lg font-poppins -ml-8 z-10"
                  onClick={createSubscriptionSession}
                >
                  Upgrade Now
                </button>
                <div className="flex px-10 py-4 space-x-5 text-gray-600">
                  <div className="space-y-2 flex flex-col items-start justify-center">
                    <div className="flex items-start justify-center">
                      <AiFillCheckCircle className="text-green-600 w-5 h-5"></AiFillCheckCircle>
                      <h1>Growth Rate</h1>
                    </div>
                    <div className="flex items-start justify-center">
                      <AiFillCheckCircle className="text-green-600 w-5 h-5"></AiFillCheckCircle>
                      <h1>Team Size</h1>
                    </div>
                    <div className="flex items-start justify-center">
                      <AiFillCheckCircle className="text-green-600 w-5 h-5"></AiFillCheckCircle>
                      <h1>Last Month Revenue</h1>
                    </div>
                    <div className="flex items-start justify-center">
                      <AiFillCheckCircle className="text-green-600 w-5 h-5"></AiFillCheckCircle>
                      <h1>Last Month Profit</h1>
                    </div>
                  </div>
                  <div className="space-y-2 flex flex-col items-start justify-center">
                    <div className="flex items-start justify-center">
                      <AiFillCheckCircle className="text-green-600 w-5 h-5"></AiFillCheckCircle>
                      <h1>No. of customers</h1>
                    </div>
                    <div className="flex items-start justify-center">
                      <AiFillCheckCircle className="text-green-600 w-5 h-5"></AiFillCheckCircle>
                      <h1>Business Model and Pricing</h1>
                    </div>
                    <div className="flex items-start justify-center">
                      <AiFillCheckCircle className="text-green-600 w-5 h-5"></AiFillCheckCircle>
                      <h1>TTM Revenue</h1>
                    </div>
                    <div className="flex items-start justify-center">
                      <AiFillCheckCircle className="text-green-600 w-5 h-5"></AiFillCheckCircle>
                      <h1>TTM Profit</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default pricing;
