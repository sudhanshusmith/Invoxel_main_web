import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import gandhiData from "./data/gandhi";
import rsm from "./data/rsm";
import defence from "./data/defence";
import amritpex from "./data/amritpex";
import aero from "./data/aero";
import ProjectHeading from "../../components/Heading/ProjectHeading";
import NormalHeading from "../../components/Heading/NormalHeading";
import section_img from "../../assets/projects/section_img.png";
import line from "../../assets/projects/line.png";

function YTvideo(props) {
  return (
    <div className="flex justify-center my-8 lg:my-12 px-5">
      <iframe
        width="900"
        height="315"
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
    <div className="grid grid-cols-2 gap-4 px-5 my-8 xl:mx-40">
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
    <div className="grid grid-cols-2 gap-4 xl:mx-40">
      {props.images.map((image, index) => (
        <div
          className={`col-span-2 lg:col-span-1 px-5 flex ${
            index % 2 === 0 ? "justify-end" : "justify-start"
          }`}
        >
          <img src={section_img} className="w-[30rem]"></img>
        </div>
      ))}
    </div>
  );
}

function Project() {
  const { pid } = useParams();
  const [data, setData] = useState(null);

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
    } else {
      setData(null);
    }
  }, [pid]);
  return (
    <div className="my-24">
      {data ? (
        <div>
          <ProjectHeading text={data.title} />
          <div className="px-5 lg:px-40 roboto">{data.description}</div>
          <YTvideo iframeLink={data.iframeLink}></YTvideo>
          <NormalHeading text={data.section.title} />
          <SectionContent data={data.section.data}></SectionContent>
          <NormalHeading text={data.gallery.title} />
          <GalleryImages images={data.gallery.images}></GalleryImages>
        </div>
      ) : (
        <div>Project not found</div>
      )}
    </div>
  );
}

export default Project;
