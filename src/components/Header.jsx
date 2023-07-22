import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-[#FEFDFB] py-4 px-32 relative z-10 shadow-sm">
      <div className="flex items-center flex-shrink-0 mr-6 text-3xl">
        <Link href="/">
          <p className="font-poppins">
            Elevate<span className="font-bold">X</span>
          </p>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 border rounded text-violet-500 border-violet-500 hover:text-black hover:border-black"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" fillRule="evenodd" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-lg lg:flex-grow lg:ml-80 lg:space-x-8">
          <Link href="/products" className="hover:text-violet-500">
            <p className="block mt-4 lg:inline-block lg:mt-0 mr-4">
              Explore Products
            </p>
          </Link>
          <Link href="/topinvestor" className="hover:text-violet-500">
            <p className="block mt-4 lg:inline-block lg:mt-0 mr-4">
              Top Investors
            </p>
          </Link>
          <Link href="/startupstories" className="hover:text-violet-500">
            <p className="block mt-4 lg:inline-block lg:mt-0">
              Startup Stories
            </p>
          </Link>
        </div>
        <div className="text-lg">
          {session ? (
            <img
              src={
                // session.user?.image ||
                session.user?.image ||
                "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
              }
              alt="user image"
              className="cursor-pointer rounded-full"
              width={34}
              height={34}
              onClick={() => signOut()}
            />
          ) : (
            <button
              className="my-auto bg-violet-500 text-white font-bold text-lg py-1 px-10 rounded-3xl"
              onClick={() => {
                e.preventDefault();
                signIn("google", { callbackUrl: "/products" });
              }}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
