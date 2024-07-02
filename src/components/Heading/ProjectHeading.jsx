import React from "react";

function ProjectHeading({ text }) {
  const arr = text.split(" ");
  return (
    <div className="font-bold text-4xl lg:text-6xl text-left lg:text-center my-8">
      {arr.map((word, index) => (
        <span key={index} className={`${index == 1 && "text-[#276dff]"}`}>
          {word.toUpperCase() + " "}
        </span>
      ))}
    </div>
  );
}

export default ProjectHeading;
