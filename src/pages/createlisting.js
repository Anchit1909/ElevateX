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
  const [logoUpload, setLogoUpload] = useState(null);
  const [image1Upload, setImage1Upload] = useState(null);
  const [image2Upload, setImage2Upload] = useState(null);
  const [description, setDescription] = useState("");
  const [aboutProduct, setAboutProduct] = useState("");
  const [imageDownloadURL, setImageDownloadURL] = useState("");
  const [yearFounded, setYearFounded] = useState(0);
  const [teamSize, setTeamSize] = useState(0);
  const [country, setCountry] = useState("");
  const [customers, setCustomers] = useState(0);
  const [revenueTTM, setRevenueTTM] = useState(0);
  const [profitTTM, setProfitTTM] = useState(0);
  const [monthRevenue, setMonthRevenue] = useState(0);
  const [monthProfit, setMonthProfit] = useState(0);
  const [annualRevenue, setAnnualRevenue] = useState(0);
  const [annualGrowth, setAnnualGrowth] = useState(0);
  const [businessModel, setBusinessModel] = useState("");

  // console.log(session.user.email);
  const db = getFirestore(app);

  const uploadImage = async (imageName) => {
    if (imageName == null) return;
    const imageRef = ref(storage, `images/${imageName.name + v4()}`);
    try {
      const snapshot = await uploadBytes(imageRef, imageName);
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
    let logoDownloadURL = await uploadImage(logoUpload);
    let image1DownloadURL = await uploadImage(image1Upload);
    let image2DownloadURL = await uploadImage(image2Upload);
    setTimeout(function () {}, 1000);
    const dbRef = collection(db, "startups");
    await addDoc(dbRef, {
      heading: name,
      tagline: tagline,
      productLink: link,
      category: category,
      logo: logoDownloadURL,
      description: description,
      image1: image1DownloadURL,
      image2: image2DownloadURL,
      aboutProduct: aboutProduct,
      createdAt: serverTimestamp(),
      userEmail: session.user.email,
      upvote: [session.user.email],
      upvotes: 1,
      yearFounded: yearFounded,
      teamSize: teamSize,
      country: country,
      customers: customers,
      revenueTTM: revenueTTM,
      profitTTM: profitTTM,
      monthRevenue: monthRevenue,
      monthProfit: monthProfit,
      annualRevenue: annualRevenue,
      annualGrowth: annualGrowth,
      businessModel: businessModel,
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
      <section className="bg-[#FEFDFB]">
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
                  placeholder="Tagline"
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
                  placeholder="Website Link"
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
              {/* <div>
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
              </div> */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Upload Logo
                </label>
                <input
                  type="file"
                  name="logoFile"
                  accept="image/png, image/jpeg, image/jpg"
                  maxLength="3000000"
                  id="logoFile"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required={true}
                  onChange={(e) => setLogoUpload(e.target.files[0])}
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
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Upload First Product Image
                </label>
                <input
                  type="file"
                  name="image1file"
                  accept="image/png, image/jpeg, image/jpg"
                  maxLength="3000000"
                  id="image1file"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required={true}
                  onChange={(e) => setImage1Upload(e.target.files[0])}
                />
                {/* <button onClick={uploadImage}>Upload</button> */}
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Upload Second Product Image
                </label>
                <input
                  type="file"
                  name="image2file"
                  accept="image/png, image/jpeg, image/jpg"
                  maxLength="3000000"
                  id="image2file"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required={true}
                  onChange={(e) => setImage2Upload(e.target.files[0])}
                />
                {/* <button onClick={uploadImage}>Upload</button> */}
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Detailed Info about the product
                </label>
                <textarea
                  id="aboutproduct"
                  rows={10}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Write a short description of your product"
                  onChange={(e) => setAboutProduct(e.target.value)}
                ></textarea>
              </div>
            </div>
            <h2 className="font-poppins font-semibold mt-2 text-lg">
              Company Details for interested Investors
            </h2>
            <p className="mb-4">
              <span className="font-poppins font-bold font-sm">NOTE:</span> This
              will only be visible to investors and not your users
            </p>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Year Founded
                </label>
                <input
                  type="number"
                  name="yearfounded"
                  id="yearfounded"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Year Founded"
                  required={true}
                  onChange={(e) => setYearFounded(e.target.value)}
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Startup Team Size
                </label>
                <input
                  type="number"
                  name="teamsize"
                  id="teamsize"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Team size"
                  required={true}
                  onChange={(e) => setTeamSize(e.target.value)}
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Country of Origin
                </label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Country of origin"
                  required={true}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Customers
                </label>
                <input
                  type="number"
                  name="customers"
                  id="customers"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Approx. no. of customers"
                  required={true}
                  onChange={(e) => setCustomers(e.target.value)}
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Revenue in TTM
                </label>
                <input
                  type="number"
                  name="revenuettm"
                  id="revenuettm"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="TTM Revenue"
                  required={true}
                  onChange={(e) => setRevenueTTM(e.target.value)}
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Profit in TTM
                </label>
                <input
                  type="number"
                  name="profitttm"
                  id="profitttm"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="TTM Profit"
                  required={true}
                  onChange={(e) => setProfitTTM(e.target.value)}
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Revenue Last Month
                </label>
                <input
                  type="number"
                  name="reventuemonth"
                  id="profitmonth"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Last month revenue"
                  required={true}
                  onChange={(e) => setMonthRevenue(e.target.value)}
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Profit Last Month
                </label>
                <input
                  type="number"
                  name="profitmonth"
                  id="profitmonth"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Last month Profit"
                  required={true}
                  onChange={(e) => setMonthProfit(e.target.value)}
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Annual Recurring Revenue
                </label>
                <input
                  type="number"
                  name="annualrecur"
                  id="annualrecur"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Recurring revenue"
                  required={true}
                  onChange={(e) => setAnnualRevenue(e.target.value)}
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Annual Growth Rate
                </label>
                <input
                  type="number"
                  name="annualgrowth"
                  id="annualgrowth"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Growth Rate"
                  required={true}
                  onChange={(e) => setAnnualGrowth(e.target.value)}
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Business Model and Pricing
                </label>
                <textarea
                  id="businessmodel"
                  rows={10}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Write a short description of your business model and your pricing plans"
                  onChange={(e) => setBusinessModel(e.target.value)}
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
