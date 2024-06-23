import React from "react";
import fb from "../../assets/social/fb-f.png";
import insta from "../../assets/social/insta-f.png";
import linkedin from "../../assets/social/linkedin-f.png";
import twitter from "../../assets/social/twitter-f.png";

function Footer() {
  return (
    <div id="contact" className="bg-[#276dff] text-white py-12 px-3">
      <div className="flex justify-center items-center mb-5 gap-6">
        <a href="https://www.facebook.com/Invoxel" target="_blank">
          <img src={fb} className="w-8 object-contain" />
        </a>
        <a href="https://www.instagram.com/invoxel" target="_blank">
          <img src={insta} className="w-8 object-contain" />
        </a>
        <a href="https://www.linkedin.com/company/invoxel/" target="_blank">
          <img src={linkedin} className="w-8 object-contain" />
        </a>
        <a href="https://x.com/invoxel" target="_blank">
          <img src={twitter} className="w-8 object-contain" />
        </a>
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
