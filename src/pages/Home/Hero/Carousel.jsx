import React, { useState, useEffect } from "react";
import "./Carousel.css"; // Assuming you have some CSS file for styling
import gallery1 from "../../../assets/home/hero/1.png";
import gallery2 from "../../../assets/home/hero/2.png";
import gallery3 from "../../../assets/home/hero/3.png";
import gallery4 from "../../../assets/home/hero/4.png";
import gallery5 from "../../../assets/home/hero/5.png";

const Carousel = () => {
  const images = [gallery1, gallery2, gallery3, gallery4, gallery5];
  const title = [
    "Step into a digital playground of circuits and gears, where hands-on learning meets the limitless possibilities of virtual reality simulations.",
    "Transport students beyond the classroom with immersive VR simulations, revolutionizing education through hands-on experiential learning.",
    "Immerse yourself in a virtual realm of electronics and machinery, where learning meets innovation through interactive simulations and hands-on exploration.",
    "Immerse yourself in a virtual realm of electronics and machinery, where learning meets innovation through interactive simulations and hands-on exploration.",
    "Transport students beyond the classroom with immersive VR simulations, revolutionizing education through hands-on experiential learning.",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    }, 2000); // Auto slide interval set to 1 second

    return () => clearInterval(interval); // Cleanup function to clear interval
  }, [currentImageIndex]); // Re-run effect whenever currentImageIndex changes

  return (
    <div className="carousel-container">
      <div className="carousel-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className="carousel-image"
            style={{ translate: `${-100 * currentImageIndex}%` }}
          />
        ))}

        <p className="carousel-title">{title[currentImageIndex]}</p>
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
      <button className="prev" onClick={handlePrevClick}>
        &#10094;
      </button>
      <button className="next" onClick={handleNextClick}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
