import React from "react";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <section className="mt-16 py-10 h-16 text-center bg-[#FEFDFB]" id="footer">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center md:justify-between h-full px-12 md:flex-row">
        <div className="flex items-center text-black font-regular text-2xl md:text-2xl">
          <Link href="/">
            <p className="font-poppins text-2xl">
              Elevate<span className="font-bold">X</span>
            </p>
          </Link>
        </div>
        <div>
          <p className="text-[#334155] font-poppins text-sm md:text-base">
            © 2023 <span className="font-semibold">Team.</span> All rights
            reserved
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
