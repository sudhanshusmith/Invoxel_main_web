import React from "react";

function Heading({ text, alignment }) {
  return (
    <div
      className={`text-[#DDDDDD] font-extrabold text-[4rem] xl:text-[7rem] px-4 xl:px-10 text-${alignment}`}
    >
      {text}
    </div>
  );
}

export default Heading;
