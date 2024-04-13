import React from "react";
import leftquote from "../../assets/home/leftquote.png";
import rightquote from "../../assets/home/rightquote.png";

function CustomQuote({ text }) {
  const arr = text.split(" ");
  return (
    <div className="font-extralight text-3xl xl:text-5xl my-10 flex flex-col justify-center items-center ">
      <div className="flex flex-col">
        <div className="flex">
          <img
            src={leftquote}
            className="mt-[-30px] object-contain w-4 xl:w-7"
          />
          <p className="font-extrabold text-2xl xl:text-5xl">
            {arr.map((word, index) => (
              <span key={index} className={`${index == 1 && "text-[#276dff]"}`}>
                {word.toUpperCase() + " "}
              </span>
            ))}
          </p>
          <img
            src={rightquote}
            className="mt-[-30px] object-contain w-4 xl:w-7"
          />
        </div>
      </div>
    </div>
  );
}

export default CustomQuote;
