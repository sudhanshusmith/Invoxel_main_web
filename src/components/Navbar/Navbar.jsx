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

function Navbar() {
  // use state for Drawer opening & closing
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function closeDrawer() {
    setIsDrawerOpen(false);
  }

  return (
    <div className="flex z-10 bg-white h-14 items-center">
      {/* Adding Company name or logo here  */}
      <div className="grow">
        <img src={navlogo} className="h-8 ml-6"></img>
      </div>

      {/* Navigation for laptop */}
      <div className=" flex  gap-x-12 pr-6">
        <NavLink
          to="/"
          className="hidden lg:block"
          style={({ isActive }) => ({
            color: isActive ? "#276dff" : "#000000",
            fontWeight: isActive ? "bolder" : "normal",
          })}
        >
          HOME{" "}
        </NavLink>
        <NavLink
          to="/about"
          className="hidden lg:block"
          style={({ isActive }) => ({
            color: isActive ? "#276dff" : "#000000",
            fontWeight: isActive ? "bolder" : "normal",
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
        <a href="#" className="hidden lg:block">
          CONTACT{" "}
        </a>
        <div
          href="#"
          className="block lg:hidden"
          onClick={() => setIsDrawerOpen(true)}
        >
          <img src={hamburger} alt="hamburger" className="w-8"></img>
        </div>
      </div>

      {/* Drawer Navigations are here  */}
      {isDrawerOpen && (
        <div className=" w-[200px] absolute top-0 right-0 bg-[#d9d9d9] bg-opacity-80 rounded-bl-2xl">
          <div
            className="flex justify-end"
            onClick={() => setIsDrawerOpen(false)}
          >
            <img src={cross} alt="Close Drawer" className="w-14 p-4"></img>
          </div>
          <div className="flex flex-col gap-y-5 px-6 py-8">
            <NavLink
              to="/"
              onClick={() => setIsDrawerOpen(false)}
              style={({ isActive }) => ({
                color: isActive ? "#276dff" : "#000000",
                fontWeight: isActive ? "bolder" : "normal",
              })}
            >
              HOME
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsDrawerOpen(false)}
              style={({ isActive }) => ({
                color: isActive ? "#276dff" : "#000000",
                fontWeight: isActive ? "bolder" : "normal",
              })}
            >
              ABOUT US
            </NavLink>
            <a href="#" onClick={() => setIsDrawerOpen(false)}>
              SERVICES
            </a>
            <a href="#" onClick={() => setIsDrawerOpen(false)}>
              OUR PRESENCE
            </a>
            <a href="#" onClick={() => setIsDrawerOpen(false)}>
              CONTACT
            </a>
          </div>
          <div className="gap-x-4 flex justify-center mb-6">
            <img src={fb} className="w-6 object-contain" />
            <img src={insta} className="w-6 object-contain" />
            <img src={linkedin} className="w-6 object-contain" />
            <img src={twitter} className="w-6 object-contain" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
