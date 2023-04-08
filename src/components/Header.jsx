import React from "react";

function Header() {
  return (
    <section>
      <div className="flex space-x-80 h-16 bg-white">
        <div className="text-3xl ml-16 my-auto">
          Product<span class="font-bold">Hunt</span>
        </div>
        <div className="flex space-x-8 my-auto text-lg">
          <div>Explore Products</div>
          <div>Top investors</div>
          <div>Startup stories</div>
        </div>
        <button className="my-auto bg-violet-500 text-white font-bold text-lg py-1 px-10 rounded-3xl">
          <p className="login">Login</p>
        </button>
      </div>
    </section>
  );
}

export default Header;
