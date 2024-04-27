import React from "react";

function NormalHeading({ text }) {
  return (
    <div className="font-bold text-4xl lg:text-6xl pl-5 pr-16 text-left lg:text-center my-8">
      {text.toUpperCase()}
    </div>
  );
}

export default NormalHeading;
