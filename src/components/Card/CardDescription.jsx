import React from "react";
import line from "../../assets/projects/line.png";

function CardDescription({ text1, text2, description }) {
  return (
    <>
      <div className="flex mt-4">
        <img src={line} className="w-20 "></img>
        <div className="ml-[-4rem]">
          <p className="text-lg pr-5">{text1.toUpperCase()}</p>
          <p className="text-lg pr-5 lg:mt-[-6px]">{text2.toUpperCase()}</p>
        </div>
      </div>

      <p className="mt-3 roboto pl-20 ml-[-4rem] pr-4 text-sm">{description}</p>
    </>
  );
}

export default CardDescription;
