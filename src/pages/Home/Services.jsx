import React from "react";
import Heading from "../../components/Heading";
import ServiceCard from "./components/ServiceCard";
import service_left_image from "../../assets/home/services left image.png";
import service_right_image from "../../assets/home//service right image.png";

function Services() {
  return (
    <div>
      <Heading text="SERVICES" alignment="left" />
      <ServiceCard
        image={service_left_image}
        alignment="left"
        tag="APPROACH"
        title="AGUMENTED REALITY"
        description="Every experience we deliver is tailored, unique and custom-built to
          fit your needs. Our team of experts works with you to understand your
          strategic edge and comes up with solutions that will exceed your
          expectations."
      />
      <ServiceCard
        image={service_right_image}
        alignment="right"
        tag="APPROACH"
        title="AGUMENTED REALITY"
        description="Every experience we deliver is tailored, unique and custom-built to
          fit your needs. Our team of experts works with you to understand your
          strategic edge and comes up with solutions that will exceed your
          expectations."
      />
    </div>
  );
}

export default Services;
