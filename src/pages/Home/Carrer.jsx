import React from "react";

function Carrer() {
  return (
    <>
      <div className="bg-[#04002C] flex flex-col text-white justify-center items-center py-8 xl:py-16">
        <p className="font-semibold text-4xl lg:text-6xl mb-8">CAREER</p>
        <p className="text-xs xl:text-xl text-center font-extralight">
          BE A PART OF THE ORGANISATION AND BUILD TOGETHER!
        </p>
        <p className="mt-3 font-semibold text-lg lg:mb-8">
          Ready to create impact?
        </p>
        <a
          className="bg-[#276DFF] px-20 py-4 rounded-lg mt-3 text-sm"
          href="https://forms.gle/DKxYTAfrgm6z9cmw5"
          target="_blank"
        >
          APPLY
        </a>
      </div>
    </>
  );
}

export default Carrer;
