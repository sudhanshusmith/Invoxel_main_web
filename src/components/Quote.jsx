import React from "react";
import leftquote from "../assets/home/leftquote.png";
import rightquote from "../assets/home/rightquote.png";

function Quote({ text1, text2 }) {
  return (
    <div className="font-extralight text-3xl xl:text-5xl my-10 flex flex-col justify-center items-center ">
      <div className="flex flex-col">
        <div className="flex">
          <img src={leftquote} className="mt-[-30px] object-contain w-7" />
          <p>{text1}</p>
        </div>
        <div className="flex ml-20 xl:ml-52">
          <p>{text2}</p>
          <img src={rightquote} className="mt-[-30px] object-contain w-7" />
        </div>
      </div>
    </div>
  );
}

export default Quote;
