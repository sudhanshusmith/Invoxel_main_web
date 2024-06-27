import React from "react";
import { testimonialImages } from "./data";

const SlidingImg = () => {
  const duplicateTimes = 10;
  let images = [];

  for (let i = 0; i < duplicateTimes; i++) {
    images = images.concat(testimonialImages);
  }

  return (
    <div className="flex flex-col items-center my-5 md:my-10">
      <div className="w-full overflow-hidden relative">
        <div className="flex animate-scroll">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-none h-24 transform transition-transform hover:scale-110"
            >
              <img
                src={image}
                alt={`testimonial-${index}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          width: calc(200px * ${images.length});
          animation: scroll 700s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SlidingImg;
