import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { getSession, useSession } from "next-auth/react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import CheckAnimation from "../animations/89540-green-check.json";
import Link from "next/link";

function success() {
  const router = useRouter();
  // const { data: session, status } = useSession();
  // const { session_id } = router.query;
  // async function rr() {
  //   const response = await getSession();
  //   console.log(response);
  // }
  // if (status === "authenticated") {
  //   return <p>Signed in user token {session}</p>;
  // }

  return (
    <div>
      <Head>
        <title>Thank you!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-white h-screen flex items-center justify-center relative">
        <div className="absolute right-[400px] -top-16 w-96 h-96 bg-[#B3AAFC]/[10%] rounded-full blur-3xl" />
        <div className="absolute right-[500px] -top-16 w-96 h-96 bg-[#E841E1]/[6%] rounded-full blur-3xl" />
        <div className="flex flex-col items-center justify-center bg-white shadow-lg max-w-md h-auto w-[760px] py-8 rounded-md">
          <Player
            autoplay
            loop
            // src="https://assets6.lottiefiles.com/private_files/lf30_WdTEui.json"
            src={CheckAnimation}
            style={{ height: "100px", width: "100px" }}
          >
            <Controls
              visible={false}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player>
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-poppins text-center text-xl">
              Investment Call
              <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent font-semibold">
                {" "}
                Confirmed!
              </span>{" "}
            </h1>
            <p className="text-center font-inter">
              You will receive your meeting link via email.
            </p>
            <Link href="/products">
              <button
                type="button"
                className="py-2 px-3 text-sm font-medium text-center text-white rounded-md bg-[#7A5AF8] hover:bg-[#7A5AF8]/90 focus:ring-4 focus:outline-none focus:ring-[#7A5AF8]/50 mt-4 font-poppins"
              >
                Return to Products Page
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default success;
