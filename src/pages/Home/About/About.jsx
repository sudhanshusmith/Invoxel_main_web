import React from "react";
import line from "../../../assets/projects/line.png";
import CustomQuote from "../../../components/Heading/CustomQuote";

import data from "./data";
import NormalHeading from "../../../components/Heading/NormalHeading";

function About() {
  return (
    <>
      <div className="flex mx-5 lg:mx-0 lg:justify-center">
        <img src={line} className="w-20"></img>
        <p className="ml-[-4rem] text-xl lg:text-2xl">
          INVOXEL <br /> TECHNOLOGIES
        </p>
      </div>
      <p className="mx-5 text-justify mt-8 xl:mx-20 roboto">
        Invoxel Technologies, born from the esteemed halls of IIT Delhi and led
        by one of its distinguished alumni, stands as an innovative force
        specialising in crafting bespoke B2B Immersive solutions for global
        enterprises. Our expertise lies in engineering computer-generated
        simulations, 3-D Scanning and immersive experiences that facilitate
        seamless interaction within three-dimensional environments. With a
        dedicated focus on Industry 4.0 solutions, we serve as catalysts in
        businesses' digital transformation journeys, offering comprehensive
        support in deploying cutting-edge Virtual Reality (VR), Augmented
        Reality (AR), and Immersive Digital Twin technologies. From digital
        twins to training simulators and smart visualization solutions, our
        repertoire spans a diverse spectrum of industries. Leveraging advanced
        technologies including VR, AR, 3D Scanning, Holography, and 3D
        Projection Mapping, we curate impeccable virtual environments tailored
        for industries, art, culture, heritage, training, education, and beyond.
        Our mission is to elevate human interaction through immersive and
        captivating visual experiences, meticulously crafted by our seasoned
        experts proficient in designing, developing, and deploying VR and AR
        applications across various verticals.
      </p>
      <CustomQuote text="Imagine Future" />
      <div className="grid grid-cols-3 gap-y-8 mx-6 xl:mx-20">
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

      <div className="flex justify-center mt-5 xl:mt-10">
        <button className="bg-[#276DFF] text-white font-thin rounded-lg px-8 py-3 mt-4">
          Read More About Us
        </button>
      </div>
    </>
  );
}

export default About;
