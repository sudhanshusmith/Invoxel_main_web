import React, { useEffect, useState } from "react";
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

function Home() {
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
      {/* <SeeinNews /> */}
      <Carrer />
      {/* <Client /> */}
    </>
  );
}

export default Home;
