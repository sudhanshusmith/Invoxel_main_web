import React, { useState, useEffect } from "react";
import "./Carousel.css"; // Assuming you have some CSS file for styling
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
  const images = [
    { desktop: gallery1, phone: galleryp1 },
    { desktop: gallery2, phone: galleryp2 },
    { desktop: gallery3, phone: galleryp3 },
    { desktop: gallery4, phone: galleryp4 },
    { desktop: gallery5, phone: galleryp5 },
  ];
  const title = [
    "Step into a digital playground of circuits and gears, where hands-on learning meets the limitless possibilities of virtual reality simulations.",
    "Transport students beyond the classroom with immersive VR simulations, revolutionizing education through hands-on experiential learning.",
    "Immerse yourself in a virtual realm of electronics and machinery, where learning meets innovation through interactive simulations and hands-on exploration.",
    "Immerse yourself in a virtual realm of electronics and machinery, where learning meets innovation through interactive simulations and hands-on exploration.",
    "Transport students beyond the classroom with immersive VR simulations, revolutionizing education through hands-on experiential learning.",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 6000); // Auto slide interval set to 1 second

    return () => clearInterval(interval); // Cleanup function to clear interval
  }, [currentImageIndex]); // Re-run effect whenever currentImageIndex changes

  return (
    <div className="carousel-container">
      <div className="carousel-images">
        {images.map((obj, index) => (
          <>
            {isMobile ? (
              <img
                key={index}
                src={obj.phone}
                className="carousel-image phone-image"
                style={{ translate: `${-100 * currentImageIndex}%` }}
              />
            ) : (
              <img
                key={index}
                src={obj.desktop}
                className="carousel-image desktop-image"
                style={{ translate: `${-100 * currentImageIndex}%` }}
              />
            )}
          </>
        ))}

        {/* <p className="carousel-title hidden md:block text-2xl">
          {title[currentImageIndex]}
        </p> */}
      </div>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentImageIndex ? "active" : ""}
            onClick={() => setCurrentImageIndex(index)}
          ></span>
        ))}
      </div>

      {/* removing arrows */}
      {/* <button className="prev" onClick={handlePrevClick}>
        &#10094;
      </button>
      <button className="next" onClick={handleNextClick}>
        &#10095;
      </button> */}
    </div>
  );
};

export default Carousel;
