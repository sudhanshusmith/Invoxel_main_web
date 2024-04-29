import React from "react";
import line_white from "../../assets/projects/line_white.png";

function WhiteLineHeading({ text1, text2 }) {
  return (
    <div className="flex mt-4">
      <img src={line_white} className="w-20 "></img>
      <div className="ml-[-4rem] text-white">
        <p className="text-lg pr-5">{text1.toUpperCase()}</p>
        <p className="text-lg pr-5 lg:mt-[-6px]">{text2.toUpperCase()}</p>
      </div>
    </div>
  );
}

export default WhiteLineHeading;
