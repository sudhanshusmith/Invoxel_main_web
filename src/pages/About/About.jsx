import React from "react";
import line from "../../assets/projects/line.png";
import CustomQuote from "../../components/Heading/CustomQuote";

import data from "./data";
import team from "./team";
import NormalHeading from "../../components/Heading/NormalHeading";
import section_img from "../../assets/projects/section_img.png";

function About() {
  return (
    <div className="my-20">
      {/* copy of about section in home page  */}
      <div className="flex justify-center">
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
            <p className="mx-10 roboto text-sm">{point.description}</p>
          </div>
        ))}
      </div>
      {/* copy ends here */}

      <div className="flex justify-center mt-16">
        <img src={line} className="w-20"></img>
        <p className="ml-[-4rem] text-xl lg:text-2xl">MISSION & VISION</p>
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

      <div className="font-bold text-4xl lg:text-6xl mt-10 xl:mt-16 text-center lg:text-center">
        {"Meet The Team".toUpperCase()}
      </div>

      {team.map((point, index) => (
        <div className="grid grid-cols-2 gap-4 px-5 my-8  xl:mx-20">
          <div
            className={`col-span-2 lg:col-span-1 mt-10 lg:mt-20 ${
              index % 2 === 1 ? "lg:order-first" : "lg:order-last"
            }`}
          >
            <img src={section_img} className="w-[28rem] rounded-2xl"></img>
          </div>
          <div className={`col-span-2 lg:col-span-1 flex flex-col justify-end`}>
            <div className="flex">
              <img src={line} className="w-20"></img>
              <div className="ml-[-4rem] lg:text-xl pr-5">
                <p>{point.title1.toUpperCase()}</p>
                <p>{point.title2.toUpperCase()}</p>
              </div>
            </div>

            <p className="mt-3 pl-20 ml-[-4rem] text-sm roboto">
              {point.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default About;
