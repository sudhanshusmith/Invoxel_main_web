import React, { useState, useRef } from "react";
import Slider from "react-slick";
import NormalHeading from "../../../components/Heading/NormalHeading";
import redirect from "../../../assets/home/news/redirect.png";
import { newsData } from "./data";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";

function SeeinNews() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5, // Show 2.5 slides for desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentImageIndex(newIndex); // Update current index on slide change
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5, // 2.5 slides ensure the half part of the third slide shows
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <NormalHeading text="See Us In the News" />
      <div className="py-8 relative">
        <Slider ref={sliderRef} {...settings}>
          {Array.from({ length: 4 }, (_, i) => i + 1).map((item) => (
            <Link
              to={newsData[item - 1].url}
              target="_blank"
              key={item}
              className="px-3 outline-none relative aspect-video"
            >
              <img
                src={newsData[item - 1].image}
                alt={`News ${item - 1}`}
                className="w-full h-auto block custom_box_shadow rounded-lg"
              />
              <div className="absolute bottom-0 lg:bottom-1 left-0 right-0 bg-white m-5 lg:m-6 p-2 lg:p-4 rounded-md custom_box_shadow">
                <p className="text-sm lg:text-xl font-bold truncate">
                  {newsData[item - 1].title}
                </p>
                <p className="text-xs lg:text-base font-thin turncate_two_lines">
                  {newsData[item - 1].description}
                </p>
              </div>

              <img src={redirect} className="absolute top-2 right-6" />
            </Link>
          ))}
        </Slider>
        <div className="carousel-indicators absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 z-10 px-5 py-2">
          {newsData.map((_, index) => (
            <span
              key={index}
              className={`inline-block w-2 h-2 rounded-full mx-1 cursor-pointer ${
                index === currentImageIndex ? "bg-[#276DFF]" : "bg-gray-400"
              }`}
              onClick={() => sliderRef.current.slickGoTo(index)}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
}

export default SeeinNews;
