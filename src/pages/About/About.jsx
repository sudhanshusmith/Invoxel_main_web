import React, { useEffect, useState } from "react";
import line from "../../assets/projects/line.png";
import CustomQuote from "../../components/Heading/CustomQuote";

import data from "./data";
import team from "./team";
import NormalHeading from "../../components/Heading/NormalHeading";
import section_img from "../../assets/projects/section_img.png";
import BlackLineHeading from "../../components/Card/BlackLineHeading";
import CustomPhoneQuote from "../../components/Heading/CustomPhoneQuote";
import CardDescription from "../../components/Card/CardDescription";

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
        {/* copy of about section in home page  */}

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
            diverse spectrum of industries. Leveraging advanced technologies
            including VR, AR, 3D Scanning, Holography, and 3D Projection
            Mapping, we curate impeccable virtual environments tailored for
            industries, art, culture, heritage, training, education, and beyond.
            Our mission is to elevate human interaction through immersive and
            captivating visual experiences, meticulously crafted by our seasoned
            experts proficient in designing, developing, and deploying VR and AR
            applications across various verticals.
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
        {/* copy ends here */}

        <div className="flex lg:justify-center mt-16">
          <BlackLineHeading text1="Mission & Vision" text2="" />
        </div>
        <p className="text-justify mt-8 roboto">
          Invoxel Technologies, born from the esteemed halls of IIT Delhi and
          led by one of its distinguished alumni, stands as an innovative force
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
          for industries, art, culture, heritage, training, education, and
          beyond. Our mission is to elevate human interaction through immersive
          and captivating visual experiences, meticulously crafted by our
          seasoned experts proficient in designing, developing, and deploying VR
          and AR applications across various verticals.
        </p>

        <NormalHeading text="Meet The Team" />

        {team.map((point, index) => (
          <div className="grid grid-cols-2 gap-4 my-8">
            <div
              className={`col-span-2 lg:col-span-1 mt-10 lg:mt-20 ${
                index % 2 === 1 ? "lg:order-first" : "lg:order-last"
              }`}
            >
              <img src={section_img} className="w-[28rem] rounded-2xl"></img>
            </div>
            <div
              className={`col-span-2 lg:col-span-1 flex flex-col justify-end`}
            >
              <CardDescription
                text1={point.title1}
                text2={point.title2}
                description={point.description}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
