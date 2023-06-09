import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SmallTestimonial from "@/components/SmallTestimonial";
import Features from "@/components/Features";
import Companies from "@/components/Companies";
import HowItWorks from "@/components/HowItWorks";
import Startups from "@/components/Startups";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

export default function Home() {
  
  return (
    <>
      <Head>
        <title>ElevateX</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Header />
        <Hero />
        <SmallTestimonial />
        <Features />
        <Companies />
        <HowItWorks />
        {/* <Startups /> */}
        <Testimonial />
        <Footer />
      </main>
    </>
  );
}
