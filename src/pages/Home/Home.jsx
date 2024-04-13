import React from "react";
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

function Home() {
  return (
    <>
      <Hero />
      <CustomQuote text="The art of digitization" />
      <Video />
      <About />
      <Services />
      <Connect />
      <Presence />
      <CustomQuote text="Merging Realities" />
      <Carrer />
      {/* <Client /> */}
    </>
  );
}

export default Home;
