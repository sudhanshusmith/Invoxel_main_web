import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

import gandhiData from "./data/gandhi";
import rsm from "./data/rsm";
import defence from "./data/defence";
import amritpex from "./data/amritpex";
import aero from "./data/aero";
import audi from "./data/audi";
import lng from "./data/lng";
import minda from "./data/minda";
import oil from "./data/oil";
import protiviti from "./data/protiviti";
import ProjectHeading from "../../components/Heading/ProjectHeading";
import NormalHeading from "../../components/Heading/NormalHeading";
import section_img from "../../assets/projects/section_img.png";
import line from "../../assets/projects/line.png";
import Carrer from "../Home/Carrer";

function YTvideo(props) {
  return (
    <div className="flex justify-center my-8 lg:my-12">
      <iframe
        width="100%"
        height="315"
        className="responsive-iframe"
        src={props.iframeLink}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}

function SectionContent(props) {
  return (
    <div className="grid grid-cols-2 gap-4 my-8">
      {props.data.map((point, index) => (
        <>
          <div className="col-span-2 lg:col-span-1 mt-10 lg:mt-20 flex justify-end">
            <img src={section_img}></img>
          </div>
          <div className="col-span-2 lg:col-span-1 flex flex-col justify-end lg:ml-10">
            <div className="flex">
              <img src={line} className="w-20"></img>
              <div className="ml-[-4rem] text-xl pr-5">
                <p>{point.title1.toUpperCase()}</p>
                <p>{point.title2.toUpperCase()}</p>
              </div>
            </div>

            <p className="mt-3 ml-[-4rem] pl-20 roboto text-sm">
              {point.description}
            </p>
          </div>
        </>
      ))}
    </div>
  );
}

function GalleryImages(props) {
  return (
    <div className="grid grid-cols-2 gap-y-8 lg:gap-y-14 gap-x-3 mb-10 lg:mt-10">
      {props.images.map((image, index) => (
        <div
          className={`col-span-2 lg:col-span-1 border flex ${
            index % 2 === 0 ? "justify-end" : "justify-start"
          }`}
        >
          <img src={image} className="w-full object-cover"></img>
        </div>
      ))}
    </div>
  );
}

function Project() {
  const { pid } = useParams();
  const [data, setData] = useState(null);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  useEffect(() => {
    if (pid === "gandhi") {
      setData(gandhiData);
    } else if (pid === "rsm") {
      setData(rsm);
    } else if (pid === "defence") {
      setData(defence);
    } else if (pid === "amritpex") {
      setData(amritpex);
    } else if (pid === "aero") {
      setData(aero);
    } else if (pid === "audi") {
      setData(audi);
    } else if (pid === "lng") {
      setData(lng);
    } else if (pid === "minda") {
      setData(minda);
    } else if (pid === "oil") {
      setData(oil);
    } else if (pid === "protiviti") {
      setData(protiviti);
    } else {
      setData(null);
    }
  }, [pid]);
  return (
    <Fade>
      {data ? (
        <div className="flex flex-col items-center border">
          <div className=" w-[80%]">
            <ProjectHeading text={data.title} />
            {data.video?.provider === "youtube" ? (
              <YTvideo iframeLink={data.video.iframeLink}></YTvideo>
            ) : (
              <></>
            )}
            <div className="font-bold text-2xl lg:text-3xl mt-14 mb-6 text-center lg:text-center">
              {data.about.heading.toUpperCase()}
            </div>
            <div className="roboto">{data.about.description}</div>
            {/* <NormalHeading text={data.section.title} />
            <SectionContent data={data.section.data}></SectionContent> */}
            <NormalHeading text={data.gallery.title} />
            <GalleryImages images={data.gallery.images}></GalleryImages>
          </div>
        </div>
      ) : (
        <div className="text-3xl font-semibold h-screen flex justify-center items-center border">
          Project not found
        </div>
      )}
      <Carrer />
    </Fade>
  );
}

export default Project;
