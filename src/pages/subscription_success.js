import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import {
  getFirestore,
  doc,
  updateDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { app } from "../../firebase";
import { getSession, useSession } from "next-auth/react";
import { BsBagCheckFill } from "react-icons/bs";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import CheckAnimation from "../animations/89540-green-check.json";
import Link from "next/link";

function subscription_success() {
  const router = useRouter();
  const { data: session } = useSession();
  const { session_id } = router.query;
  let requiredDocId;
  const db = getFirestore(app);
  async function updateData() {
    const updatedData = {
      subscribed: true,
    };
    const docRef = doc(db, "users", requiredDocId);
    await updateDoc(docRef, updatedData);
  }

  async function getUserStatus() {
    const q = query(
      collection(db, "users"),
      where("email", "==", session.user.email)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      requiredDocId = doc.id;
    });
    await updateData();
  }

  // .then((docRef) => {
  //   console.log(
  //     "A New Document Field has been added to an existing document"
  //   );
  // })
  // .catch((error) => {
  //   console.log(error);
  // });
  // useEffect(() => {
  //   getUserStatus();
  // }, []);

  // console.log(user);

  return (
    <div>
      <Head>
        <title>Thank you for subscribing!</title>
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
              Thanks for{" "}
              <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent font-semibold">
                Subscribing!
              </span>{" "}
            </h1>
            <p className="text-center font-inter">
              You will receive your order confirmation via email.
            </p>
            <Link href="/products">
              <button
                type="button"
                className="py-2 px-3 text-sm font-medium text-center text-white rounded-md bg-[#7A5AF8] hover:bg-[#7A5AF8]/90 focus:ring-4 focus:outline-none focus:ring-[#7A5AF8]/50 mt-4 font-poppins"
                onClick={getUserStatus}
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

export default subscription_success;
//server side rendering
// export async function getServerSideProps(ctx) {
//   const session = await getSession(ctx);
//   if (!session) {
//     return {
//       props: {},
//     };
//   }
//   const { user } = session;
//   return {
//     props: { user },
//   };
// }
