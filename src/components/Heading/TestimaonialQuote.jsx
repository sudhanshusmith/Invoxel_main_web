import React from "react";
import leftquote from "../../assets/home/leftquote.png";
import rightquote from "../../assets/home/rightquote.png";

function TestimaonialQuote({ name, text, emoji }) {
  return (
    <div className="font-extralight my-8 xl:my-8 flex flex-col items-center ">
      <div className="flex flex-col text-3xl w-[80%] xl:w-[35%]">
        <div className="flex">
          <img
            src={leftquote}
            className="mt-[-30px] object-contain w-4 xl:w-6"
          />
          <p className="">
            {name.toUpperCase()} {emoji}
          </p>
        </div>
        <div className="flex flex-col items-end mt-2">
          <p className="pl-4 xl:pl-6 text-sm">{text}</p>
          <img
            src={rightquote}
            className="mt-[-10px] object-contain w-4 xl:w-6"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimaonialQuote;
