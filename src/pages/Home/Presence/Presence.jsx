import React from "react";
// import section_img from "../../../assets/projects/section_img.png";
import data from "./data";
import line_white from "../../../assets/projects/line_white.png";
import line from "../../../assets/projects/line.png";
import NormalHeading from "../../../components/Heading/NormalHeading";
import WhiteLineHeading from "../../../components/Card/WhiteLineHeading";
import CardDescription from "../../../components/Card/CardDescription";

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
                <div className="w-full">
                  <div class="relative group  ">
                    <img
                      src={point.image}
                      alt="Your Image"
                      className="w-full max-h-90 shadow-md shadow-gray-500 rounded-lg object-cover"
                    />

                    <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-gradient-to-b from-[#276DFF] to-[#060434] rounded-lg">
                      <WhiteLineHeading
                        text1={point.title1}
                        text2={point.title2}
                      />
                    </div>
                  </div>

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
    </>
  );
}

export default Presence;
