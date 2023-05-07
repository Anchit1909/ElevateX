import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Rightbar from "@/components/Rightbar";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getDoc, getFirestore, doc } from "firebase/firestore";
import { app } from "../../../firebase";
import { useRouter } from "next/router";
import safeJsonStringify from "safe-json-stringify";

async function fetchData(id, db) {
  // const db = getFirestore(app);
  const docRef = doc(db, "startups", id);
  // setTimeout(function () {}, 2000);
  const docSnap = await getDoc(docRef);
  const data = docSnap.exists() ? docSnap.data() : null;
  // console.log(data);
  return data;
}

function Startup({ datas }) {
  const db = getFirestore(app);
  // console.log(datas);
  const [data, setData] = useState({});
  const router = useRouter();
  const ids = router.query.id;
  console.log(ids);
  useEffect(() => {
    async function getData() {
      const fetchedData = await fetchData(ids, db);
      // console.log(data);
      if (fetchedData) {
        setData(fetchedData);
      }
    }
    getData();
  }, [ids]);
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
            <img height={60} width={60} src={data.image} alt="" />
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
            <button className=" bg-[#7A5AF8] text-white w-48 h-9 hover:bg-purple-700 hover:text-white font-bold text-lg sm:w-auto px-6 rounded-md">
              UPVOTE
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto mb-6">
          <div className="px-4 xl:px-4 lg:border-r-2 pr-3 border-gray-200 mt-12">
            <h1 className="text-[#4B587C] text-lg font-inter font-medium">
              {data.description}
            </h1>
            <div className="flex my-4 items-center">
              <h1 className="text-[#4B587C] font-inter font-medium">
                Launched in
              </h1>
              <button className="border-2 border-green-600 text-green-600 mx-2 px-2 rounded-md font-bold font-inter flex items-center justify-center">
                {data.category}
              </button>
            </div>
            <div className="flex justify-center space-x-2 md:space-x-10 mt-10">
              <Image
                className=""
                src="/my1.webp"
                width={400}
                height={220}
                alt=""
              />
              <Image
                className=""
                src="/my2.jpg"
                width={400}
                height={220}
                alt=""
              />
            </div>
            <div className="flex mt-10 space-x-2 justify-center items-center">
              <Image src="/startup_founders.png" width={705} height={42} />
            </div>
            <div className="my-14">
              <h1 className="text-gray-900 text-lg font-medium font-poppins mb-1">
                Interested in the product?
              </h1>
              <button className="border-2 px-2 rounded-md text-xl font-inter font-bold border-[#7268E2] text-[#7268E2]">
                Schedule Meeting with the founder
              </button>
            </div>
            <div className="mt-10">
              <h1 className="text-gray-900 text-2xl font-medium font-poppins">
                Support is great. Feedback is even better.
              </h1>
              <h1 className="text-gray-600 text-base font-inter max-w-5xl leading-6 tracking-wide">
                <em>
                  We invite you to share your valuable feedback and suggestions
                  with us, whether it's regarding our serivces, user experience,
                  pricing, or any other aspect. Your input will play a crucial
                  role in shaping the future of WorkOs, and we are genuinely
                  excited to learn from your expertise.
                </em>
              </h1>
            </div>
            <div>
              <h1 className="text-black text-xl font-poppins font-medium mt-10">
                About the product
              </h1>
              <p className="font-inter mt-2 leading-8 text-[#292524]">
                Hi ElevateX 👋
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
                learning process!
              </p>
            </div>
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
            “Article Summary powered by ChatGPT is a free Chrome Extension that
            lets you quickly access the summary of any web articles you are
            reading. Use this extension to save time and learn more quickly.”
          </h1>
          <div className="flex flex-col space-y-1">
            <Image
              className="w-20 h-20 mt-8 mx-auto rounded-full"
              src="/dp8.jpg"
              alt=""
              height={80}
              width={80}
            />
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-xl font-poppins leading-tight">
                Disha Patani
              </h2>
              <p className="text-sm text-gray-900 font-poppins">
                CEO of Boys Heart
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Startup;

//Backend Code

// export const getServerSideProps = async (context) => {
//   const db = getFirestore(app);
//   const docRef = doc(db, "startups", context.query.id);
//   const docSnap = await getDoc(docRef);
//   // const data = docSnap.exists() ? docSnap.data() : null;
//   // console.log(data);
//   return {
//     props: {
//       docSnap: docSnap.exists()
//         ? JSON.parse(
//             safeJsonStringify({ id: docSnap.id, ...docSnap.data() }) // needed for dates
//           )
//         : "",
//     },
//   };
// };
