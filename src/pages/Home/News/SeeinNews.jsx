import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import news1 from "../../../assets/home/news/news1.png";
import NormalHeading from "../../../components/Heading/NormalHeading";

function SeeinNews() {
  const newsData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <NormalHeading text="See Us In the News" />
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="my-8 md:my-16"
      >
        <CarouselContent>
          {newsData.map((news) => {
            return (
              <CarouselItem>
                <img src={news1} className="w-[30rem] basis-1/3" />
                <p className="legend">News {news}</p>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </>
    // <div>
    //   <Carousel>
    //     {newsData.map((news) => {
    //       return (
    //         <div className="flex w-[40%]">
    //           <img src={news1} className="" />
    //           <p className="legend">Legend {news}</p>
    //           <img src={news1} className="" />
    //           <p className="legend">Legend {news}</p>
    //           <img src={news1} className="" />
    //           <p className="legend">Legend {news}</p>
    //         </div>
    //       );
    //     })}
    //   </Carousel>
    // </div>
  );
}

export default SeeinNews;
