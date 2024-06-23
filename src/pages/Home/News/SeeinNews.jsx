import React from "react";
import Slider from "react-slick";
import NormalHeading from "../../../components/Heading/NormalHeading";
import news1 from "../../../assets/home/news/news1.png";

function SeeinNews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5, // Show 2.5 slides for desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
      <div className="px-4 md:px-16 py-8">
        <Slider {...settings}>
          {Array.from({ length: 4 }, (_, i) => i + 1).map((item) => (
            <div key={item} className="px-2 outline-none">
              <img
                src={news1}
                alt={`News ${item}`}
                className="w-full h-auto block"
              />
              {/* <p className="text-center mt-2">News {item}</p> */}
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default SeeinNews;
