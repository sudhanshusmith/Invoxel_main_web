import React from "react";
import { Slide } from "react-awesome-reveal";

function ServiceCard({ alignment, image, title, description, tag }) {
  return (
    <Slide direction={alignment}>
      <div className="grid grid-cols-2 gap-4 my-10 xl:my-20">
        <div
          className={`${
            alignment == "right" ? "xl:order-2" : "xl:order-1"
          } order-1 col-span-2 xl:col-span-1 flex justify-center items-center px-6`}
        >
          <img
            src={image}
            className="w- xl:w-[25rem] object-contain"
            alt="Service Image"
          />
        </div>
        <div
          className={`${
            alignment == "right" ? "xl:order-1" : "xl:order-2"
          } order-2 col-span-2 xl:col-span-1 flex flex-col justify-center px-6 xl:px-20`}
        >
          <p className="font-medium tracking-[0.2rem] text-[#7f7f7f]">{tag}</p>
          <p className="font-medium tracking-[0.2rem] text-3xl my-2">{title}</p>
          <p className="font-light text-[#767676]">{description}</p>
        </div>
      </div>
    </Slide>
  );
}

export default ServiceCard;
