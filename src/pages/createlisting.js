import React, { useState } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSession } from "next-auth/react";
import { app } from "../../firebase";
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { useRouter } from "next/navigation";
import { storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { toast } from "react-hot-toast";

function createlisting() {
  const router = useRouter();
  const { data: session } = useSession();
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("");
  const [imageurl, setImageurl] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
  const [description, setDescription] = useState("");
  const [imageDownloadURL, setImageDownloadURL] = useState("");
  // console.log(session.user.email);
  const db = getFirestore(app);

  // const uploadImage = () => {
  //   if (imageUpload == null) return;
  //   const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
  //   uploadBytes(imageRef, imageUpload)
  //     .then((snapshot) => {
  //       return getDownloadURL(snapshot.ref);
  //     })
  //     .then((downloadURL) => {
  //       setImageDownloadURL(downloadURL);
  //     })
  //     .then(() => {
  //       toast.success("File Uploaded Successfully", {
  //         position: "bottom-right",
  //       });
  //     });
  // };

  const uploadImage = async () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    try {
      const snapshot = await uploadBytes(imageRef, imageUpload);
      const downloadURL = await getDownloadURL(snapshot.ref);
      // setImageDownloadURL(downloadURL);
      // toast.success("File Uploaded Successfully", {
      //   position: "bottom-right",
      // });
      return downloadURL;
    } catch (error) {
      console.log(error);
    }
  };

  const createListing = async (e) => {
    e.preventDefault();
    let downloadURL = await uploadImage();
    setTimeout(function () {}, 1000);
    const dbRef = collection(db, "startups");
    await addDoc(dbRef, {
      heading: name,
      tagline: tagline,
      productLink: link,
      category: category,
      image: downloadURL,
      description: description,
      createdAt: serverTimestamp(),
      userEmail: session.user.email,
    })
      .then((docRef) => {
        // console.log("Document has been added successfully");
        toast.success("Listing created Successfully", {
          position: "bottom-right",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Header />
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900">
            Add a new Startup Listing
          </h2>
          <form onSubmit={createListing}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Startup Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Type startup name"
                  required={true}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Enter tagline for startup
                </label>
                <input
                  type="text"
                  name="tagline"
                  id="tagline"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="tagline"
                  required={true}
                  onChange={(e) => setTagline(e.target.value)}
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Website Link
                </label>
                <input
                  type="url"
                  name="link"
                  id="link"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="link"
                  required={true}
                  onChange={(e) => setLink(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Category
                </label>
                <select
                  id="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option defaultValue="FI">Select category</option>
                  <option value="FI">Finance</option>
                  <option value="AI">AI</option>
                  <option value="W3">Web3</option>
                  <option value="SM">Sales and Marketing</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Image URL
                </label>
                <input
                  type="url"
                  name="imagelink"
                  id="imagelink"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="url"
                  required={true}
                  onChange={(e) => setImageurl(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Upload Image
                </label>
                <input
                  type="file"
                  name="imagefile"
                  accept="image/png, image/jpeg, image/jpg"
                  maxLength="3000000"
                  id="imagefile"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required={true}
                  onChange={(e) => setImageUpload(e.target.files[0])}
                />
                {/* <button onClick={uploadImage}>Upload</button> */}
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Product Description
                </label>
                <textarea
                  id="description"
                  rows="8"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Write a short description of your product"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="my-auto bg-[#7A5AF8] text-white font-semibold text-lg  py-1 px-4 rounded-xl mt-4"
            >
              Add Product
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default createlisting;
