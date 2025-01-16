import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Assuming the imports for images are correct and paths are valid
import gallery1 from "../../../assets/home/hero/desktop/1.jpg";
import gallery2 from "../../../assets/home/hero/desktop/2.jpg";
import gallery3 from "../../../assets/home/hero/desktop/3.jpg";
import gallery4 from "../../../assets/home/hero/desktop/4.jpg";
import gallery5 from "../../../assets/home/hero/desktop/5.png";
import galleryp1 from "../../../assets/home/hero/phone/1.jpg";
import galleryp2 from "../../../assets/home/hero/phone/2.jpg";
import galleryp3 from "../../../assets/home/hero/phone/3.jpg";
import galleryp4 from "../../../assets/home/hero/phone/4.jpg";
import galleryp5 from "../../../assets/home/hero/phone/5.png";

import fb from "../../../assets/social/fb-f.png";
import insta from "../../../assets/social/insta-f.png";
import linkedin from "../../../assets/social/linkedin-f.png";
import twitter from "../../../assets/social/twitter-f.png";

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 1000);
  const [isLg, setIsLg] = useState(window.innerWidth >= 1200);
  const [isXl, setIsXl] = useState(window.innerWidth >= 1500);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth <= 1000);
      setIsLg(window.innerWidth >= 1200);
      setIsXl(window.innerWidth >= 1500);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "linear",
    arrows: false,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentImageIndex(newIndex); // Update current index on slide change
    },
  };

  const getHeroImage = () => {
    if (isMobile)
      return [galleryp1, galleryp2, galleryp3, galleryp4, galleryp5];
    else return [gallery1, gallery2, gallery3, gallery4, gallery5];
  };
  const images = getHeroImage();

  return (
    <div className="carousel-container relative">
      {!isMobile && (
        <div className="social-icons bg-[#276DFF] px-3 rounded-tr-2xl rounded-br-2xl ">
          <a href="https://www.facebook.com/Invoxel" target="_blank">
            <img src={fb} className="w-8 object-contain" />
          </a>
          <a href="https://www.instagram.com/invoxel" target="_blank">
            <img src={insta} className="w-8 object-contain" />
          </a>
          <a href="https://www.linkedin.com/company/invoxel/" target="_blank">
            <img src={linkedin} className="w-8 object-contain" />
          </a>
          <a href="https://x.com/invoxel" target="_blank">
            <img src={twitter} className="w-8 object-contain" />
          </a>
        </div>
      )}

      <Slider ref={sliderRef} {...settings}>
        {images.map((src, index) => (
          <div
            key={index}
            className="w-screen"
            style={{ height: "calc(100vh - 3.5rem)" }}
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-screen object-cover"
              style={{ height: "calc(100vh - 3.5rem)" }}
            />
          </div>
        ))}
      </Slider>
      <div className="carousel-indicators absolute bottom-[10px] left-1/2 transform -translate-x-1/2 z-10 px-5 py-2">
        {images.map((_, index) => (
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
  );
};

export default Carousel;
