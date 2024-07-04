import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import NormalHeading from "../../../components/Heading/NormalHeading";
import TestimaonialQuote from "../../../components/Heading/TestimaonialQuote";
import meghwal_review from "../../../assets/home/testimonial/content/meghwal_review.png";
import { testimonialData } from "./data";
import SlidingImg from "./SlidingImg";

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
      <SlidingImg />
      <div className="mx-auto max-w-fit">
        <Fade key={current} duration={2000}>
          {" "}
          {/* Add key to Fade component */}
          {current == 2 ? (
            <img src={meghwal_review} className="p-4" />
          ) : (
            <TestimaonialQuote
              name={testimonialData[current].name}
              text={testimonialData[current].text}
              emoji={testimonialData[current].emoji}
            />
          )}
        </Fade>
      </div>
    </>
  );
}

export default Testimonial;
