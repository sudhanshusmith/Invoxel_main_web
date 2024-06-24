import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Assuming the imports for images are correct and paths are valid
import gallery1 from "../../../assets/home/hero/desktop/1.png";
import gallery2 from "../../../assets/home/hero/desktop/2.png";
import gallery3 from "../../../assets/home/hero/desktop/3.png";
import gallery4 from "../../../assets/home/hero/desktop/4.png";
import gallery5 from "../../../assets/home/hero/desktop/5.png";
import galleryp1 from "../../../assets/home/hero/phone/1.png";
import galleryp2 from "../../../assets/home/hero/phone/2.png";
import galleryp3 from "../../../assets/home/hero/phone/3.png";
import galleryp4 from "../../../assets/home/hero/phone/4.png";
import galleryp5 from "../../../assets/home/hero/phone/5.png";

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
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
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentImageIndex(newIndex); // Update current index on slide change
    },
  };

  const imagesDesktop = [gallery1, gallery2, gallery3, gallery4, gallery5];
  const imagesMobile = [galleryp1, galleryp2, galleryp3, galleryp4, galleryp5];
  const images = isMobile ? imagesMobile : imagesDesktop;

  return (
    <div className="carousel-container">
      <Slider ref={sliderRef} {...settings}>
        {images.map((src, index) => (
          <div key={index} className="w-screen h-screen">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="object-cover"
            />
          </div>
        ))}
      </Slider>
      <div className="carousel-indicators absolute bottom-0 left-1/2 transform -translate-x-1/2 px-5 py-2">
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
