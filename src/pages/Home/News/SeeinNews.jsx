import React, { useState, useRef } from "react";
import Slider from "react-slick";
import NormalHeading from "../../../components/Heading/NormalHeading";
import news1 from "../../../assets/home/news/news1.png";

const news = [news1, news1, news1, news1];

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
            <div key={item} className="px-2 outline-none">
              <img
                src={news[item - 1]}
                alt={`News ${item}`}
                className="w-full h-auto block"
              />
              {/* <p className="text-center mt-2">News {item}</p> */}
            </div>
          ))}
        </Slider>
        <div className="carousel-indicators absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 z-10 px-5 py-2">
          {news.map((_, index) => (
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
