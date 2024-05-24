import { React, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import NormalHeading from "../../../components/Heading/NormalHeading";
import all_testimonials from "../../../assets/home/testimonial/all.png";
import TestimaonialQuote from "../../../components/Heading/TestimaonialQuote";
import testimonialData from "./data";

function Testimonial() {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
      emblaApi.on("select", () => {
        setCurrentImageIndex(emblaApi.selectedScrollSnap());
      });
      setCurrentImageIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);
  return (
    <>
      <NormalHeading text="Testimonials" />
      <img src={all_testimonials} />
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
        className=" mx-auto max-w-fit"
      >
        <CarouselContent>
          {testimonialData.map((testimonial) => {
            return (
              <CarouselItem>
                <TestimaonialQuote
                  name={testimonial.name}
                  text={testimonial.text}
                  emoji={testimonial.emoji}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="carousel-indicators">
          {testimonialData.map((_, index) => (
            <span
              key={index}
              className={index === 1 ? "active" : "inactive"}
              onClick={() => setCurrentImageIndex(index)}
            ></span>
          ))}
        </div>
      </Carousel>
    </>
  );
}

export default Testimonial;
