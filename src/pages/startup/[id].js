import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Rightbar from "@/components/Rightbar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  getDoc,
  getFirestore,
  doc,
  updateDoc,
  query,
  getDocs,
  collection,
  where,
} from "firebase/firestore";
import { app } from "../../../firebase";
import { useRouter } from "next/router";
import { IoTriangle } from "react-icons/io5";
import getStripe from "@/utils/get-stripejs";
import { fetchPostJSON } from "@/utils/api-helpers";
import Stripe from "stripe";
import Link from "next/link";
import { useSession } from "next-auth/react";

async function fetchData(id, db) {
  // const db = getFirestore(app);
  const docRef = doc(db, "startups", id);
  const docSnap = await getDoc(docRef);
  const data = docSnap.exists() ? docSnap.data() : null;
  return data;
}

function Startup({ datas }) {
  const db = getFirestore(app);
  const [data, setData] = useState({});
  const router = useRouter();
  const ids = router.query.id;
  const { data: session } = useSession();
  // console.log(ids);
  const [subscriptionStatus, setSubscriptionStatus] = useState(false);

  async function getSubscriptionStatus() {
    const q = query(
      collection(db, "users"),
      where("email", "==", session.user.email)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      if (doc.data().subscribed == true) setSubscriptionStatus(true);
    });
  }
  useEffect(() => {
    async function getData() {
      const fetchedData = await fetchData(ids, db);
      if (fetchedData) {
        setData(fetchedData);
      }
    }
    getData();
    getSubscriptionStatus();
  }, [ids]);
  // const [upvote, setUpvote] = useState(data.upvote);
  // console.log(data.upvote);
  // const docRef = doc(db, "startups", ids);
  // function handleIncrement(e) {
  //   // console.log(e.target.value);
  //   if (!data.upvote.includes(session.user.email)) {
  //     const newData = [...data.upvote, session.user.email];
  //     setUpvote(newData);
  //     // console.log(session.user.email);
  //   }
  // }
  // const updatedData = {
  //   upvote: upvote,
  // };
  // updateDoc(docRef, updatedData)
  //   .then((docRef) => {
  //     console.log(
  //       "A New Document Field has been added to an existing document"
  //     );
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // const updatedData = {
  //   upvote: upvote,
  // };
  // updateDoc(docRef, updatedData)
  //   .then((docRef) => {
  //     console.log(
  //       "A New Document Field has been added to an existing document"
  //     );
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  const item = ["investment call", 4999];

  const createCheckoutSession = async () => {
    // setLoading(true);
    const checkoutSession = await fetchPostJSON("/api/checkout_sessions", item);
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
    <>
      <Header />
      <div className="bg-[#FEFDFB] mx-auto">
        <div className="flex flex-row items-end justify-between pl-32 pr-[420px] py-8 bg-[#F5F5F3] md:h-[400px] h-[300px] relative">
          <div className="absolute -left-64 -top-36 w-96 h-96 bg-[#B3AAFC]/20 rounded-full blur-3xl" />
          <div className="absolute -left-40 -top-36 w-96 h-96 bg-[#E841E1]/20 rounded-full blur-3xl" />
          <div className="absolute -top-36 w-96 h-96 bg-[#F1BB31]/20 rounded-full blur-3xl" />
          <div className="absolute left-32 -top-36 w-96 h-96 bg-[#DFF363]/10 rounded-full blur-3xl" />
          <div className="md:w-1/2 space-y-1 z-10">
            <img height={60} width={60} src={data.logo} alt="" />
            <h2 className="font-poppins font-medium text-3xl text-black">
              {data.heading}
            </h2>
            <p className="text-[#0A171C] text-xl max-w-sm font-poppins">
              {data.tagline}
            </p>
          </div>
          <div className="mt-10 md:mt-0 space-x-2 flex flex-col md:flex-row items-center justify-start font-inter">
            <a href={data.productLink} target="_blank">
              <button className="w-48 h-9 hover:bg-purple-700 hover:text-white text-[#7A5AF8] border-2 border-solid border-purple-700 font-bold text-lg sm:w-auto px-6 rounded-md">
                VISIT
              </button>
            </a>
            <button
              className=" bg-[#7A5AF8] text-white w-48 h-9 hover:bg-purple-700 hover:text-white font-semibold text-base sm:w-auto px-6 rounded-md"
              onClick={(e) => handleIncrement(e)}
            >
              <div className="flex flex-row items-center space-x-2">
                <IoTriangle size={18} color="#ffffff" />{" "}
                <div className="font-inter">UPVOTE</div>
                <div>{data.upvote ? data.upvote.length : 0}</div>
              </div>
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto mb-6">
          <div className="px-4 xl:px-4 lg:border-r-2 pr-3 border-gray-200 mt-12">
            <h1 className="text-[#4B587C] text-lg font-inter font-medium">
              {data.description}
            </h1>
            <div className="flex my-4 items-center">
              <h1 className="text-[#4B587C] font-poppins font-medium">
                Launched in
              </h1>
              <button className="border-2 border-green-600 text-green-600 mx-2 px-2 rounded-md font-bold font-inter flex items-center justify-center">
                {data.category}
              </button>
            </div>
            <div className="flex flex-col px-7 md:px-0 md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-10 mt-10">
              <Image
                className=""
                src={data.image1}
                width={400}
                height={220}
                alt=""
              />
              <Image
                className=""
                src={data.image2}
                width={400}
                height={220}
                alt=""
              />
            </div>
            <div className="flex mt-10 space-x-2 justify-center items-center">
              <Image src="/startup_founders.png" width={705} height={42} />
            </div>
            <div className="mt-12">
              <h1 className="text-black text-xl font-poppins font-medium mb-1">
                Interested in the product?
              </h1>
              <button
                className="border-2 px-2 rounded-md text-xl font-inter font-bold border-[#7268E2] text-[#7268E2]"
                onClick={createCheckoutSession}
              >
                Schedule Meeting with the founder
              </button>
            </div>
            <div className="mt-10">
              <h1 className="text-black text-xl font-poppins font-medium">
                Support is great. Feedback is even better.
              </h1>
              <h1 className="text-gray-600 text-lg font-inter max-w-5xl leading-6 tracking-wide mt-1">
                We invite you to share your valuable feedback and suggestions
                with us, whether it's regarding our serivces, user experience,
                pricing, or any other aspect. Your input will play a crucial
                role in shaping the future of WorkOs, and we are genuinely
                excited to learn from your expertise.
              </h1>
            </div>
            <div className="mb-3">
              <h1 className="text-black text-xl font-poppins font-medium mt-10">
                About the product
              </h1>
              <p className="font-inter mt-2 leading-8 text-[#292524] text-lg">
                {/* Hi ElevateX 👋
                <br /> "Article Summary powered by ChatGPT" maker here! 🚀
                <br />
                Today, we’re launching "Article Summary powered by ChatGPT"
                Chrome Extension - an easy and fast way to access summaries of
                any web articles that you're reading thanks to OpenAI's ChatGPT
                🙌
                <br /> ✅ Free <br />✅ Custom prompt
                <br /> ✅ Select ChatGPT models
                <br /> ✅ Many language options
                <br /> Features:
                <br /> - Summarize web articles
                <br /> - Keyboard shortcut to start summarizing
                <br /> - Customize prompts as you want Hope this helps your
                learning process! */}
                {data.aboutProduct}
              </p>
            </div>
            {!subscriptionStatus && (
              <div>
                <h3 className="text-black text-xl font-poppins font-medium mt-10">
                  Want to know more about the startup?
                </h3>
                <h4 className="mb-2 font-inter text-lg">
                  Gain access to startup financials by getting a monthly
                  subscription to our services.
                </h4>
                <Link href="/pricing">
                  <button className="border-2 px-2 rounded-md text-xl font-inter font-bold border-[#7268E2] text-[#7268E2]">
                    Subscribe
                  </button>
                </Link>
              </div>
            )}
          </div>
          <div className="mr-2">
            <Rightbar />
          </div>
        </div>
        <div className="bg-[#F5F5F3] text-center py-14 flex flex-col items-center justify-center relative">
          <div className="absolute right-10 -top-6 w-96 h-96 bg-[#B3AAFC]/10 rounded-full blur-3xl" />
          <div className="absolute -right-10 -top-2 w-96 h-96 bg-[#E841E1]/10 rounded-full blur-3xl" />
          <div className="absolute -right-28 top-8 w-96 h-96 bg-[#F1BB31]/10 rounded-full blur-3xl" />
          <div className="absolute -right-36 top-20 w-96 h-96 bg-[#DFF363]/10 rounded-full blur-3xl" />
          <h1 className="text-xl px-2 md:px-64 text-[#0A171C] font-regular font-poppins z-10">
            "Working with ElevateX has been a game-changer for our startup.
            Their platform has provided us with unparalleled access to a network
            of investors and resources that have accelerated our growth. The
            team at ElevateX has been incredibly supportive throughout our
            journey, offering valuable guidance and connections."
          </h1>
          <div className="flex flex-col space-y-1">
            <Image
              className="w-20 h-20 mt-8 mx-auto rounded-full"
              src="/dp5.jpg"
              alt=""
              height={80}
              width={80}
            />
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-xl font-poppins leading-tight">
              Jane Smith
              </h2>
              <p className="text-sm text-gray-900 font-poppins">
              CEO of a TechCo Solutions
              </p>
            </div>
          </div>
        </div>
        {subscriptionStatus && (
          <div className="max-w-screen-xl xl:mx-auto mx-2">
            <div className="mt-8 mx-2">
              <h1 className="text-black text-xl font-poppins font-medium">
                Business Model and Pricing
              </h1>
              <p className="font-inter mt-2 leading-8 text-[#292524] text-lg">
                {data.businessModel}
              </p>
            </div>
            <div>
              <h1 className="text-black text-xl font-poppins font-medium mt-10">
                Company Financials
              </h1>
              <div className="mt-10 grid grid-cols-3 space-x-8 gap-y-12">
                <div className="block max-w-sm p-6 bg-[#F5F5F3] border border-1 border-[#6D798B]/30 shadow">
                  <div className="flex items-center justify-center flex-col">
                    <h5 className="text-[#514D4D] text-4xl font-bold font-poppins">
                      ₹{data.revenueTTM}
                    </h5>
                    <p className="text-[#556987] font-poppins font-medium">
                      TTM Gross Revenue
                    </p>
                  </div>
                </div>
                <div className="block max-w-sm p-6 bg-[#F5F5F3] border border-1 border-[#6D798B]/30 shadow">
                  <div className="flex items-center justify-center flex-col">
                    <h5 className="text-[#514D4D] text-4xl font-bold font-poppins">
                      ₹{data.profitTTM}
                    </h5>
                    <p className="text-[#556987] font-poppins font-medium">
                      TTM Net Profit
                    </p>
                  </div>
                </div>
                <div className="block max-w-sm p-6 bg-[#F5F5F3] border border-1 border-[#6D798B]/30 shadow">
                  <div className="flex items-center justify-center flex-col">
                    <h5 className="text-[#514D4D] text-4xl font-bold font-poppins">
                      ₹{data.annualRevenue}
                    </h5>
                    <p className="text-[#556987] font-poppins font-medium">
                      Annual Recurring Revenue
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10 grid grid-cols-3 space-x-8 gap-y-12">
                <div className="block max-w-sm p-6 bg-[#F5F5F3] border border-1 border-[#6D798B]/30 shadow">
                  <div className="flex items-center justify-center flex-col">
                    <h5 className="text-[#514D4D] text-4xl font-bold font-poppins">
                      ₹{data.monthRevenue}
                    </h5>
                    <p className="text-[#556987] font-poppins font-medium">
                      Last Month Revenue
                    </p>
                  </div>
                </div>
                <div className="block max-w-sm p-6 bg-[#F5F5F3] border border-1 border-[#6D798B]/30 shadow">
                  <div className="flex items-center justify-center flex-col">
                    <h5 className="text-[#514D4D] text-4xl font-bold font-poppins">
                      ₹{data.monthProfit}
                    </h5>
                    <p className="text-[#556987] font-poppins font-medium">
                      Last Month Profit
                    </p>
                  </div>
                </div>
                <div className="block max-w-sm p-6 bg-[#F5F5F3] border border-1 border-[#6D798B]/30 shadow">
                  <div className="flex items-center justify-center flex-col">
                    <h5 className="text-[#514D4D] text-4xl font-bold font-poppins">
                      {data.annualGrowth}%
                    </h5>
                    <p className="text-[#556987] font-poppins font-medium">
                      Annual Growth Rate
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-black text-xl font-poppins font-medium mt-10">
                About the company
              </h1>
              <div className="mt-10 grid grid-cols-3 space-x-8 gap-y-12">
                <div className="block max-w-sm p-6 bg-[#F5F5F3] border border-1 border-[#6D798B]/30 shadow">
                  <div className="flex items-center justify-center flex-col">
                    <h5 className="text-[#514D4D] text-4xl font-bold font-poppins">
                      {data.yearFounded}
                    </h5>
                    <p className="text-[#556987] font-poppins font-medium">
                      Year Founded
                    </p>
                  </div>
                </div>
                <div className="block max-w-sm p-6 bg-[#F5F5F3] border border-1 border-[#6D798B]/30 shadow">
                  <div className="flex items-center justify-center flex-col">
                    <h5 className="text-[#514D4D] text-4xl font-bold font-poppins">
                      {data.teamSize}
                    </h5>
                    <p className="text-[#556987] font-poppins font-medium">
                      Startup Team Size
                    </p>
                  </div>
                </div>
                <div className="block max-w-sm p-6 bg-[#F5F5F3] border border-1 border-[#6D798B]/30 shadow">
                  <div className="flex items-center justify-center flex-col">
                    <h5 className="text-[#514D4D] text-4xl font-bold font-poppins">
                      {data.customers}
                    </h5>
                    <p className="text-[#556987] font-poppins font-medium">
                      No. of Customers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
export default Startup;
