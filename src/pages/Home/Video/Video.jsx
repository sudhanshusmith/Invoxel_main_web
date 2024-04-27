import React, { useRef, useEffect, useState } from "react";
import product from "../../../assets/video/product.mp4";

function Video() {
  const videoRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { top, bottom } = videoRef.current.getBoundingClientRect();
      const isIntersecting = top >= 0 && bottom <= window.innerHeight;
      setIsInView(isIntersecting);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isInView]);

  return (
    <div className="flex justify-center">
      <div className="video-container mt-[-10px]  px-5">
        <video
          ref={videoRef}
          controls
          autoPlay={false} // Disable default autoplay
          muted // Mute the video to ensure audio plays
          className="mb-16 xl:w-[72rem] rounded-2xl"
        >
          <source src={product} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Video;
