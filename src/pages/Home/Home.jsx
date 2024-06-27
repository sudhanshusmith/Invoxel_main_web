import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Client from "./Client";
import Connect from "./Connect";
import Hero from "./Hero/Carousel";
import Navbar from "../../components/Navbar/Navbar";
import Video from "./Video/Video";
import About from "./About/About";

import CustomQuote from "../../components/Heading/CustomQuote";
import Services from "./Services/Services";
import Presence from "./Presence/Presence";
import Carrer from "./Carrer";
import CustomPhoneQuote from "../../components/Heading/CustomPhoneQuote";
import SeeinNews from "./News/SeeinNews";
import Testimonial from "./Testimonial/Testimonial";

function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  }, [pathname]);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Hero />
      {isMobile ? (
        <CustomPhoneQuote
          text1="the art of"
          text2="digitization"
          highlight="art"
        />
      ) : (
        <CustomQuote text="The art of digitization" />
      )}
      <Video />
      <About />
      <Services />
      <Connect />
      <Presence />
      {isMobile ? (
        <CustomPhoneQuote
          text1="merging"
          text2="realities"
          highlight="realities"
        />
      ) : (
        <CustomQuote text="Merging Realities" />
      )}
      <SeeinNews />
      <Testimonial />
      <Carrer />
      {/* <Client /> */}
    </>
  );
}

export default Home;
