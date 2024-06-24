import React, { useState, useEffect, useRef } from "react";
import all_testimonials from "../../../assets/home/testimonial/all.png";

function CollidingImg() {
  const [offsetX, setOffsetX] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  const containerRef = useRef(null);

  useEffect(() => {
    const updatePosition = () => {
      const containerWidth = containerRef.current.offsetWidth;
      // Ensuring the image width is significantly larger than the container
      const imageWidth = containerWidth * 1.5; // Using 200% for safe coverage
      const maxOffset = imageWidth - containerWidth;

      const interval = setInterval(() => {
        setOffsetX((prevOffset) => {
          let newOffset = prevOffset + direction * 10; // Move 10px at a time

          // Check for boundary conditions and adjust direction
          if (newOffset > maxOffset || newOffset < 0) {
            setDirection(-direction); // Reverse direction
            newOffset = newOffset > maxOffset ? maxOffset : 0; // Correct the position to within bounds
          }

          return newOffset;
        });
      }, 100); // Movement speed adjustment

      return () => clearInterval(interval);
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  }, [direction]);

  return (
    <>
      <div ref={containerRef} className="relative overflow-hidden w-full h-60">
        <img
          src={all_testimonials}
          alt="Testimonials"
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300"
          style={{ transform: `translateX(-${offsetX}px)` }}
        />
      </div>
    </>
  );
}

export default CollidingImg;
