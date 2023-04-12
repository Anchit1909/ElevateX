import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

function Header() {
  const { data: session } = useSession();
  return (
    <section>
      <div className="flex space-x-80 h-16 bg-white">
        <div className="text-3xl ml-16 my-auto">
          Product<span className="font-bold">Hunt</span>
        </div>
        <div className="flex space-x-8 my-auto text-lg">
          <div>Explore Products</div>
          <div>Top investors</div>
          <div>Startup stories</div>
        </div>
        {session ? (
          <Image
            src={
              // session.user?.image ||
              session.user?.image ||
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            }
            alt="user image"
            className="cursor-pointer rounded-full"
            width={34}
            height={34}
            style={{ objectFit: "cover" }}
            onClick={() => signOut()}
          />
        ) : (
          <button
            className="my-auto bg-violet-500 text-white font-bold text-lg py-1 px-10 rounded-3xl"
            onClick={() => signIn()}
          >
            Login
          </button>
        )}
      </div>
    </section>
  );
}

export default Header;
