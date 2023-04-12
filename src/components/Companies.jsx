import React from "react";

function Companies() {
  return (
    <section className="py-16 bg-[#FAFBFD]">
      <div className="max-w-screen-xl flex flex-col items-center justify-center mx-auto">
        <p className="text-center text-gray-800 font-semibold text-lg font-poppins">
          Join ElevateX to get access to startup investors from amazing
          companies like:
        </p>
        <div className="">
          <img src="/companies_logos.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Companies;
