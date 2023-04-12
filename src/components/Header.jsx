import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const { data: session } = useSession();
  return (
    <section>
      <div className="flex space-x-80 bg-white py-3">
        <div className="text-3xl ml-16 my-auto">
          Product<span className="font-bold">Hunt</span>
        </div>
        <div className="flex space-x-8 my-auto text-lg">
          <Link href="/products">Explore Products</Link>
          <div>Top investors</div>
          <div>Startup stories</div>
        </div>
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
            onClick={() => signIn("google", { callbackUrl: "/products" })}
          >
            Login
          </button>
        )}
      </div>
    </section>
  );
}

export default Header;
