import React from "react";
import Heading from "../../components/Heading";
import career from "../../assets/dummy/carrer.png";

function Carrer() {
  return (
    <div>
      <Heading text="CAREER" alignment="center" size="1" />
      <img src={career} className="my-5" />
    </div>
  );
}

export default Carrer;
