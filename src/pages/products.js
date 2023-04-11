import React from "react";
import Header from "@/components/Header";
import Product from "@/components/Product";
import Footer from "@/components/Footer";
import { useSession, signIn, signOut } from "next-auth/react";
function products() {
  const { data: session } = useSession();
  return (
    session && (
      <div>
        <Header />
        <Product />
        <Footer />
      </div>
    )
  );
}

export default products;
