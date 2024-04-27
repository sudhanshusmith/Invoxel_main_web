import React from "react";
import section_img from "../../../assets/projects/section_img.png";
import data from "./data";
import line from "../../../assets/projects/line.png";

function Services() {
  return (
    <div id="services">
      <div className="font-bold text-4xl lg:text-6xl mt-20 xl:mt-16 text-center lg:text-center">
        {"Services".toUpperCase()}
      </div>

      <div className="grid grid-cols-2 gap-4 my-8 lg:mx-20">
        {data.map((point, index) => (
          <>
            <div
              className={`col-span-2 lg:col-span-1 mt-10 flex ${
                index % 2 == 0 ? "lg:justify-end" : "lg:justify-start"
              } `}
            >
              <div className="mx-8 lg:mx-0 lg:w-[80%]">
                <img
                  src={section_img}
                  className=" shadow-md shadow-gray-500 rounded-lg"
                ></img>
                <div className="flex mt-4">
                  <img src={line} className="w-20 "></img>
                  <div className="ml-[-4rem]">
                    <p className="text-lg pr-5">{point.title1.toUpperCase()}</p>
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
  );
}

export default Services;
