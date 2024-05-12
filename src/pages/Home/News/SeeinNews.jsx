import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import news1 from "../../../assets/home/news/news1.png";

function SeeinNews() {
  const newsData = [1, 2];
  return (
    <div>
      <Carousel>
        {newsData.map((news) => {
          return (
            <div className="flex w-[40%]">
              <img src={news1} className="" />
              <p className="legend">Legend {news}</p>
              <img src={news1} className="" />
              <p className="legend">Legend {news}</p>
              <img src={news1} className="" />
              <p className="legend">Legend {news}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default SeeinNews;
