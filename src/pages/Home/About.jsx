import React from "react";
import about from "../../assets/dummy/about.png";
import abouts from "../../assets/dummy/abouts.png";
import aboutl from "../../assets/dummy/aboutl.png";
import Quote from "../../components/Quote";

function About() {
  return (
    <div>
      <img src={about}></img>
      <h1 className="text-3xl text-center font-bold mt-10">
        Invoxel Technologies
      </h1>
      <p className="text-center px-[18rem] my-5 text-justify">
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

      <img src={abouts} />
      <Quote text1="IMAGINE" text2="FUTURE" />
      <img src={aboutl} />
    </div>
  );
}

export default About;
