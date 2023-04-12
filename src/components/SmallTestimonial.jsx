import React from "react";

function SmallTestimonial() {
  return (
    <section className="bg-[#FAFBFD] mt-12 py-20">
      <div className="px-6 xl:px-0 text-center font-poppins max-w-screen-xl mx-auto flex flex-col items-center justify-center">
        <div>
          <h1 className="sm:text-lg md:text-2xl lg:text-3xl leading-10 tracking-tight max-w-6xl">
            “I get to talk 1-on-1 to pretty much celebrities in my industry. I
            feel really privileged to just be in touch with some of these
            people, not to mention to get business advice from them."
          </h1>
        </div>
        <div className="flex mt-6 justify-center items-center space-x-6">
          <h2 className="font-semibold">Ena Mandic</h2>
          <h2 className="text-[#98A2B2]">
            Head of Customer Success at Lemlist.com
          </h2>
        </div>
      </div>
    </section>
  );
}

export default SmallTestimonial;
