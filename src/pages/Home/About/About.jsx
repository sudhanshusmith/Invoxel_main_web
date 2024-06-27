import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import line from "../../../assets/projects/line.png";
import CustomQuote from "../../../components/Heading/CustomQuote";

import data from "./data";
import NormalHeading from "../../../components/Heading/NormalHeading";
import CustomPhoneQuote from "../../../components/Heading/CustomPhoneQuote";
import BlackLineHeading from "../../../components/Card/BlackLineHeading";

function About() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Function to update state based on viewport width
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    // Initial call to set state based on viewport width
    handleResize();

    // Event listener to update state on viewport width change
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="flex flex-col items-center">
      <div className="w-[80%]">
        <div className="flex lg:justify-center">
          <BlackLineHeading text1="Invoxel" text2="Technologies" />
        </div>

        <div className="flex justify-center">
          <p className="text-justify mt-8 roboto">
            Invoxel Technologies, born from the esteemed halls of IIT Delhi and
            led by one of its distinguished alumni, stands as an innovative
            force specialising in crafting bespoke B2B Immersive solutions for
            global enterprises. Our expertise lies in engineering
            computer-generated simulations, 3-D Scanning and immersive
            experiences that facilitate seamless interaction within
            three-dimensional environments. With a dedicated focus on Industry
            4.0 solutions, we serve as catalysts in businesses' digital
            transformation journeys, offering comprehensive support in deploying
            cutting-edge Virtual Reality (VR), Augmented Reality (AR), and
            Immersive Digital Twin technologies. From digital twins to training
            simulators and smart visualization solutions, our repertoire spans a
            diverse spectrum of industries.
          </p>
        </div>
        {isMobile ? (
          <CustomPhoneQuote text1="imagine" text2="future" highlight="future" />
        ) : (
          <CustomQuote text="imagine future" />
        )}
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-y-8">
            {data.map((point, index) => (
              <div className="col-span-3 xl:col-span-1 flex flex-col">
                <div className="flex items-center">
                  <img src={point.icon} className="w-10"></img>
                  <p className="font-semibold text-xl tracking-wide">
                    {point.title}
                  </p>
                </div>
                <p className="ml-10 roboto text-sm">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-5 xl:mt-10">
          <Link
            to="/about"
            className="bg-[#276DFF] text-white font-medium rounded-lg px-8 py-3 mt-4"
          >
            Read More About Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
