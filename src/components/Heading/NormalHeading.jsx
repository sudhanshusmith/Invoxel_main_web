import React from "react";

function NormalHeading({ text }) {
  return (
    <div className="font-bold text-4xl lg:text-6xl mt-14 mb-6 text-center lg:text-center">
      {text.toUpperCase()}
    </div>
  );
}

export default NormalHeading;
