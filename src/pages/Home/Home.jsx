import React from "react";
import Banner from "./Banner";
import TagLine from "./TagLine";
import Services from "./Services";
import Footer from "./Footer";
import Client from "./Client";
import Connect from "./Connect";

function Home() {
  return (
    <>
      <Banner />
      <TagLine />
      <Services />
      <Connect />
      <Client />
      <Footer />
    </>
  );
}

export default Home;
