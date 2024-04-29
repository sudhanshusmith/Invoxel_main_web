import React from "react";
import leftquote from "../../assets/home/leftquote.png";
import rightquote from "../../assets/home/rightquote.png";

function CustomPhoneQuote({ text1, text2, highlight }) {
  const arr1 = text1.split(" ");
  const arr2 = text2.split(" ");
  return (
    <div className="font-extralight my-10 xl:my-20 flex flex-col items-center ">
      <div className="flex flex-col text-4xl font-extrabold w-[80%]">
        <div className="flex">
          <img src={leftquote} className="mt-[-30px] object-contain w-4" />
          <p>
            {arr1.map((word, index) => (
              <span
                key={index}
                className={`${
                  word == highlight && "text-[#276dff]"
                } tracking-wide xl:tracking-wider`}
              >
                {word.toUpperCase() + " "}
              </span>
            ))}
          </p>
        </div>
        <div className="flex">
          <p className="pl-4">
            {arr2.map((word, index) => (
              <span
                key={index}
                className={`${
                  word == highlight && "text-[#276dff]"
                } tracking-wide xl:tracking-wider`}
              >
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

export default CustomPhoneQuote;
