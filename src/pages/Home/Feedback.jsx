import React from "react";
import Heading from "../../components/Heading";
import feedback from "../../assets/dummy/feedback.png";

function Feedback() {
  return (
    <div>
      {/* <Heading text="FEEDBACK" alignment="center" size="1" /> */}
      <img src={feedback} className="mb-[-8rem]" />
    </div>
  );
}

export default Feedback;
