import React from "react";
import line from "../../assets/projects/line.png";

function BlackLineHeading({ text1, text2 }) {
  return (
    <div className="flex mt-4">
      <img src={line} className="w-20 "></img>
      <div className="ml-[-4rem] flex flex-col justify-center">
        <p className="text-lg pr-5">{text1.toUpperCase()}</p>
        {text2 && (
          <p className="text-lg pr-5 lg:mt-[-6px]">{text2.toUpperCase()}</p>
        )}
      </div>
    </div>
  );
}

export default BlackLineHeading;
