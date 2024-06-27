import React from "react";
// import section_img from "../../../assets/projects/section_img.png";
import data from "./data";
import line from "../../../assets/projects/line.png";
import NormalHeading from "../../../components/Heading/NormalHeading";
import CardDescription from "../../../components/Card/CardDescription";

function Services() {
  return (
    <div id="services" className="">
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
                    src={point.image}
                    className=" shadow-md shadow-gray-500 rounded-lg"
                  ></img>
                  <CardDescription
                    text1={point.title1}
                    text2={point.title2}
                    description={point.description}
                  />
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
