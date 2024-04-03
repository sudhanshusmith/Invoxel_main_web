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

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Banner /> */}
      <TagLine />
      <Video />
      <Services />
      <Connect />
      <Client />
      <Footer />
    </>
  );
}

export default Home;
