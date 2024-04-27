import React from "react";
import fb from "../../assets/social/fb.png";
import insta from "../../assets/social/insta.png";
import linkedin from "../../assets/social/linkedin.png";
import twitter from "../../assets/social/twitter.png";

function Footer() {
  return (
    <div id="contact" className="bg-[#276dff] text-white py-12 px-3">
      <div className="flex justify-center items-center mb-5 gap-6">
        <img src={fb} className="w-8 object-contain" />
        <img src={insta} className="w-8 object-contain" />
        <img src={linkedin} className="w-8 object-contain" />
        <img src={twitter} className="w-8 object-contain" />
      </div>
      <p className="text-center text-xs lg:text-sm font-extralight">
        {"Copyright 2024 ©INVOXEL TECHNOLOGIES PVT. LTD. - ALL RIGHT RESERVED.".toUpperCase()}
      </p>
      <p className="text-center text-xs lg:text-sm font-extralight">
        {"Terms and conditions - privacy policy".toUpperCase()}
      </p>
    </div>
  );
}

export default Footer;
