import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import NormalHeading from "../../../components/Heading/NormalHeading";
import all_testimonials from "../../../assets/home/testimonial/all.png";
import TestimaonialQuote from "../../../components/Heading/TestimaonialQuote";
import testimonialData from "./data";

function Testimonial() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((current + 1) % testimonialData.length);
    }, 5000); // Change testimonial every 8 seconds
    return () => clearInterval(timer); // Clean up on component unmount
  }, [current]);

  return (
    <>
      <NormalHeading text="Testimonials" />
      <img src={all_testimonials} />
      <div className="mx-auto max-w-fit">
        <Fade key={current} duration={2000}>
          {" "}
          {/* Add key to Fade component */}
          <TestimaonialQuote
            name={testimonialData[current].name}
            text={testimonialData[current].text}
            emoji={testimonialData[current].emoji}
          />
        </Fade>
      </div>
    </>
  );
}

export default Testimonial;
