import React from "react";
import unesco from "../../assets/client/unesco.png";
import artBasel from "../../assets/client/artBasel.png";
import louvre from "../../assets/client/louvre.png";
import artwide from "../../assets/client/artwide.png";
import estee from "../../assets/client/estee.png";
import continental from "../../assets/client/continental.png";
import loewe from "../../assets/client/loewe.png";
import dhl from "../../assets/client/dhl.png";

const clients = [
  unesco,
  artBasel,
  louvre,
  artwide,
  estee,
  continental,
  loewe,
  dhl,
];

function Client() {
  return (
    <div className="bg-[#04002C] text-white py-16">
      <p className="text-center mb-8 px-4">
        We want to thank our clients for their trust and support
      </p>
      <div className="flex flex-wrap lg:px-48 justify-center items-center">
        {clients.map((client, index) => (
          <img
            key={index}
            src={client}
            className="object-contain w-20 p-2 lg:w-48 lg:p-4"
          />
        ))}
      </div>
    </div>
  );
}

export default Client;
