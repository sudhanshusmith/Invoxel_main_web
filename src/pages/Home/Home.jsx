import React from "react";
import Banner from "./Banner";
import TagLine from "./TagLine";
import Services from "./Services";
import Footer from "./Footer";
import Client from "./Client";
import Connect from "./Connect";
import Hero from "./Hero/Carousel";
import Navbar from "../../components/Navbar/Navbar";
import Video from "./Video/Video";
import About from "./About";
import Quote from "../../components/Quote";
import Carrer from "./Carrer";
import Feedback from "./Feedback";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Banner /> */}
      <TagLine />
      <Video />
      <About />
      <Services />
      <Quote text1="MERGING" text2="REALITIES" />
      <Connect />
      <Carrer />
      <Feedback />
      <Client />
      <Footer />
    </>
  );
}

export default Home;
