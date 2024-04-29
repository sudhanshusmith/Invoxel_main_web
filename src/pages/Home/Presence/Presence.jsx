import React from "react";
import section_img from "../../../assets/projects/section_img.png";
import data from "./data";
import line_white from "../../../assets/projects/line_white.png";
import line from "../../../assets/projects/line.png";
import NormalHeading from "../../../components/Heading/NormalHeading";

function Presence() {
  return (
    <>
      <NormalHeading text="Our Presence" />

      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-4 w-[80%]">
          {data.map((point, index) => (
            <>
              <div
                className={`col-span-2 lg:col-span-1 mt-10 flex lg:justify-${
                  index % 2 == 0 ? "end" : "start"
                }`}
              >
                <div className="">
                  <div class="relative group">
                    <img
                      src={section_img}
                      alt="Your Image"
                      className="w-full h-auto shadow-md shadow-gray-500 rounded-lg"
                    />

                    <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-gradient-to-b from-[#276DFF] to-[#060434] rounded-lg">
                      <div className="flex mt-4">
                        <img src={line_white} className="w-20 "></img>
                        <div className="ml-[-4rem] text-white">
                          <p className="text-lg pr-5">
                            {point.title1.toUpperCase()}
                          </p>
                          <p className="text-lg pr-5 lg:mt-[-6px]">
                            {point.title2.toUpperCase()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-4">
                    <img src={line} className="w-20 "></img>
                    <div className="ml-[-4rem]">
                      <p className="text-lg pr-5">
                        {point.title1.toUpperCase()}
                      </p>
                      <p className="text-lg pr-5 lg:mt-[-6px]">
                        {point.title2.toUpperCase()}
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 roboto pl-20 ml-[-4rem] pr-4 text-sm">
                    {point.description}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Presence;
