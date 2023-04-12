import React, { useState } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSession } from "next-auth/react";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";

function createlisting() {
  const { data: session } = useSession();
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("");
  const [imageurl, setImageurl] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(
      collection(db, "startups", {
        name,
        tagline,
        productLink: link,
        category,
        imageLink: imageurl,
        description,
        createdAt: serverTimestamp(),
        userEmail: session.user.email,
      })
    );
  };
  return (
    <>
      <Header />
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900">
            Add a new Startup Listing
          </h2>
          <form action="#">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Startup Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Type startup name"
                  required=""
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="tagline"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Enter tagline for startup
                </label>
                <input
                  type="text"
                  name="tagline"
                  id="tagline"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="tagline"
                  required=""
                  onChange={(e) => setTagline(e.target.value)}
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="link"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Website Link
                </label>
                <input
                  type="url"
                  name="link"
                  id="link"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="link"
                  required=""
                  onChange={(e) => setLink(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Category
                </label>
                <select
                  id="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option defaultValue="">Select category</option>
                  <option value="FI">Finance</option>
                  <option value="AI">AI</option>
                  <option value="W3">Web3</option>
                  <option value="SM">Sales and Marketing</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="imagelink"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Image URL
                </label>
                <input
                  type="url"
                  name="imagelink"
                  id="imagelink"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="url"
                  required=""
                  onChange={(e) => setImageurl(e.target.value)}
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
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
              className="my-auto bg-[#7A5AF8] text-white font-semibold text-lg  py-1 px-4 rounded-xl mt-4"
              onClick={handleSubmit}
            >
              <p>Add Product</p>
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default createlisting;
