import React from "react";
import section_img from "../../../assets/projects/section_img.png";
import data from "./data";
import line from "../../../assets/projects/line.png";
import NormalHeading from "../../../components/Heading/NormalHeading";

function Services() {
  return (
    <div id="services">
      <NormalHeading text="Services" />

      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-4 w-[80%] ">
          {data.map((point, index) => (
            <>
              <div
                className={`col-span-2 lg:col-span-1 mt-10 flex ${
                  index % 2 == 0 ? "lg:justify-end" : "lg:justify-start"
                }`}
              >
                <div className="">
                  <img
                    src={section_img}
                    className=" shadow-md shadow-gray-500 rounded-lg"
                  ></img>
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
    </div>
  );
}

export default Services;
