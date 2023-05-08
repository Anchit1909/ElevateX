import Link from "next/link";
import React, { useState } from "react";
import { IoTriangle } from "react-icons/io5";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { app } from "../../firebase";
import { useSession } from "next-auth/react";

function ProductRow({ key, data, id }) {
  const { data: session } = useSession();
  const [upvote, setUpvote] = useState(data.upvote);
  const db = getFirestore(app);
  const docRef = doc(db, "startups", id);

  function handleIncrement(e) {
    // console.log(e.target.value);
    if (!data.upvote.includes(session.user.email)) {
      const newData = [...data.upvote, session.user.email];
      setUpvote(newData);
      // console.log(session.user.email);
    }
  }
  const updatedData = {
    upvote: upvote,
  };

  updateDoc(docRef, updatedData)
    .then((docRef) => {
      console.log(
        "A New Document Field has been added to an existing document"
      );
    })
    .catch((error) => {
      console.log(error);
    });
  // console.log(upvote);
  return (
    <div className="flex flex-row items-center justify-center mt-8">
      <img
        src={data.logo}
        alt=""
        className="w-[70px] h-[70px] object-contain rounded-md"
      />
      <div className="space-y-2">
        <Link href={`/startup/${id}`}>
          <div className="flex font-medium text-xl leading-3 pl-10 font-inter">
            {data.heading}
          </div>
        </Link>
        <div className=" flex not-italic font-medium text-base leading-6 text-[#4B587C] pl-10">
          {data.tagline}
          {/* {JSON.stringify(data.Name).replace(/"/g, "")} */}
        </div>
      </div>
      <button
        className="ml-auto border-2 py-3 px-4 border-solid border-[#D9D9D9] rounded-[5px] flex flex-col items-center justify-center md:mr-40"
        onClick={(e) => handleIncrement(e)}
      >
        <IoTriangle size={26} color="#475467" />{" "}
        <div className="text-[#4B587C] font-inter font-medium">
          {data.upvote.length}
        </div>
      </button>
    </div>
  );
}

export default ProductRow;
