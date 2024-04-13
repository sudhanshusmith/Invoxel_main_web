import React from "react";
import section_img from "../../../assets/projects/section_img.png";
import data from "./data";
import line_white from "../../../assets/projects/line_white.png";
import line from "../../../assets/projects/line.png";

function Presence() {
  return (
    <>
      <div
        id="presence"
        className="font-bold text-4xl lg:text-5xl mt-10 xl:mt-16 text-center lg:text-center"
      >
        {"Our Presence".toUpperCase()}
      </div>

      <div className="grid grid-cols-2 gap-4 px-5 my-8">
        {data.map((point, index) => (
          <>
            <div
              className={`col-span-2 lg:col-span-1 lg:mt-10 flex flex-col justify-${
                index % 2 == 0 ? "start" : "end"
              } xl:mx-20`}
            >
              {/* <img src={section_img} className="xl:w-[30rem]"></img> */}
              <div class="relative group">
                <img src={section_img} alt="Your Image" class="w-full h-auto" />

                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-gradient-to-b from-[#276DFF] to-[#060434]">
                  <div className="flex justify-center items-center text-white">
                    <img src={line_white} className="w-20"></img>
                    <p className="ml-[-4rem] text-xl lg:text-2xl pr-5">
                      {point.title.toUpperCase()}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex mt-4">
                <img src={line} className="w-20"></img>
                <p className="ml-[-4rem] text-xl lg:text-2xl pr-5">
                  {point.title.toUpperCase()}
                </p>
              </div>

              <p className="mt-3 text-justify">{point.description}</p>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Presence;
