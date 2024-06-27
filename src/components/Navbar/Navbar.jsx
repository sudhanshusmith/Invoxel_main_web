import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

import navlogo from "../../assets/logo/invoxel.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import hamburger from "../../assets/icons/hamburger.svg";
import cross from "../../assets/icons/cross.svg";
import fb from "../../assets/social/fb.png";
import insta from "../../assets/social/insta.png";
import linkedin from "../../assets/social/linkedin.png";
import twitter from "../../assets/social/twitter.png";

import "./navbar.css";

function Navbar() {
  // use state for Drawer opening & closing
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function closeDrawer() {
    setIsDrawerOpen(false);
  }

  return (
    <div className="flex bg-white h-14 items-center sticky top-0 left-0 z-20 drop-shadow-xl">
      {!isDrawerOpen && (
        <div className="grow">
          <img src={navlogo} className="h-8 ml-6"></img>
        </div>
      )}

      {/* Navigation for laptop */}
      <div className=" flex  gap-x-12 pr-6 text-[#276dff]">
        <NavLink
          to="/"
          className="hidden lg:block"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          HOME{" "}
        </NavLink>
        <NavLink
          to="/about"
          className="hidden lg:block"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          ABOUT US{" "}
        </NavLink>
        <a href="#" className="hidden lg:block">
          SERVICES{" "}
        </a>
        <a href="#" className="hidden lg:block">
          OUR PRESENCE{" "}
        </a>
        <a href="#contact" className="hidden lg:block">
          CONTACT{" "}
        </a>
        {!isDrawerOpen && (
          <div
            href="#"
            className="block lg:hidden"
            onClick={() => setIsDrawerOpen(true)}
          >
            <img src={hamburger} alt="hamburger" className="w-8"></img>
          </div>
        )}
      </div>

      {/* Drawer Navigations are here  */}

      {isDrawerOpen && (
        <div className=" w-screen absolute top-0 right-0 bg-white bg-opacity-80 z-10 drawer">
          <div
            className="flex justify-between items-center pt-2"
            onClick={() => setIsDrawerOpen(false)}
          >
            <img src={navlogo} alt="LOGO" className="h-8 ml-6"></img>
            <img
              src={cross}
              alt="Close Drawer"
              className="w-14 h-14 p-4 object-cover"
            ></img>
          </div>
          <div className="flex flex-col gap-y-5 px-6 py-8">
            <NavLink
              to="/"
              onClick={() => setIsDrawerOpen(false)}
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
              })}
              className="flex justify-end"
            >
              HOME
            </NavLink>
            <hr className="h-[0.08rem] bg-[#C8BFBF] mt-[-0.7rem]"></hr>
            <NavLink
              to="/about"
              onClick={() => setIsDrawerOpen(false)}
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
              })}
              className="flex justify-end"
            >
              ABOUT US
            </NavLink>
            <hr className="h-[0.08rem] bg-[#C8BFBF] mt-[-0.7rem]"></hr>
            <a
              href="#"
              onClick={() => setIsDrawerOpen(false)}
              className="flex justify-end"
            >
              SERVICES
            </a>
            <hr className="h-[0.08rem] bg-[#C8BFBF] mt-[-0.7rem]"></hr>
            <a
              href="#"
              onClick={() => setIsDrawerOpen(false)}
              className="flex justify-end"
            >
              OUR PRESENCE
            </a>
            <hr className="h-[0.08rem] bg-[#C8BFBF] mt-[-0.7rem]"></hr>
            <a
              href="#"
              onClick={() => setIsDrawerOpen(false)}
              className="flex justify-end"
            >
              CONTACT
            </a>
            <hr className="h-[0.08rem] bg-[#C8BFBF] mt-[-0.7rem]"></hr>
          </div>
          <div className="gap-x-4 flex justify-center mb-6">
            <a href="https://www.facebook.com/Invoxel" target="_blank">
              <img src={fb} className="w-10 object-contain" />
            </a>
            <a href="https://www.instagram.com/invoxel" target="_blank">
              <img src={insta} className="w-10 object-contain" />
            </a>
            <a href="https://www.linkedin.com/company/invoxel/" target="_blank">
              <img src={linkedin} className="w-10 object-contain" />
            </a>
            <a href="https://x.com/invoxel" target="_blank">
              <img src={twitter} className="w-10 object-contain" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
