import React from "react";
import fb from "../../assets/social/fb.png";
import insta from "../../assets/social/insta.png";
import linkedin from "../../assets/social/linkedin.png";
import twitter from "../../assets/social/twitter.png";

function Footer() {
  return (
    <div className="bg-[#276dff] text-white py-12 px-3">
      <div className="flex justify-center items-center mb-5">
        <img src={fb} className="px-1 w-12 object-contain" />
        <img src={insta} className="px-1 w-12 object-contain" />
        <img src={linkedin} className="px-1 w-12 object-contain" />
        <img src={twitter} className="px-1 w-12 object-contain" />
      </div>
      <p className="text-center">
        Copyright 2024 ©INVOXEL TECHNOLOGIES PVT. LTD. - ALL RIGHT RESERVED.
      </p>
      <p className="text-center">Terms and conditions - privacy policy</p>
    </div>
  );
}

export default Footer;
