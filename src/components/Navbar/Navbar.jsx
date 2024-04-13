import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Stack,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import navlogo from "../../assets/logo/invoxel.png";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  // use state for Drawer opening & closing
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function closeDrawer() {
    setIsDrawerOpen(false);
  }

  const navigate = useNavigate();
  function navigateToSignup() {
    setIsDrawerOpen(false);
    navigate("/auth/signup");
  }

  return (
    <>
      <div style={{ position: "absolute", top: "0px", right: "0px" }}>
        <AppBar style={{ backgroundColor: "white", color: "black" }}>
          <Toolbar className="">
            {/* Adding Company name or logo here  */}
            <Typography component="div" sx={{ flexGrow: 1 }}>
              <img src={navlogo} className="h-8 ml-2"></img>
            </Typography>

            {/* Navigation for laptop */}
            <Stack direction="row" spacing={2.5} className="">
              <NavLink to="/" className="flex">
                <Button
                  color="inherit"
                  sx={{ display: { xs: "none", lg: "block" } }}
                >
                  HOME{" "}
                </Button>
              </NavLink>

              <Link to="/about" className="flex">
                <Button
                  color="inherit"
                  sx={{ display: { xs: "none", lg: "block" } }}
                >
                  ABOUT US{" "}
                </Button>
              </Link>

              <a href="#services" className="flex">
                <Button
                  color="inherit"
                  sx={{ display: { xs: "none", lg: "block" } }}
                >
                  SERVICES{" "}
                </Button>
              </a>

              <Link to="/" className="flex">
                <Button
                  color="inherit"
                  sx={{ display: { xs: "none", lg: "block" } }}
                >
                  OUR PRESENCE{" "}
                </Button>
              </Link>

              <Link to="/" className="flex">
                <Button
                  color="inherit"
                  sx={{ display: { xs: "none", lg: "block" } }}
                >
                  CONTACT{" "}
                </Button>
              </Link>

              {/* Hamburger Icon  */}
              <IconButton
                onClick={() => setIsDrawerOpen(true)}
                size="large"
                edge="start"
                color="inherit"
                aria-label="logo"
                sx={{ display: { xs: "block", lg: "none" } }}
              >
                <MenuIcon />
              </IconButton>
            </Stack>

            {/* Drawer Navigations are here  */}
            <Drawer
              anchor="right"
              open={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                height: "100vh",
              }}
              // style={{backgroundColor: color.background}}
            >
              <Stack
                width="250px"
                role="presentation"
                spacing={1}
                style={{
                  background: "#d9d9d9",
                  height: "100vh",
                  color: "black",
                  fontSize: "32px",
                  // border: `2px solid ${color.primary}`
                }}
                className="flex flex-col justify-center items-center"
              >
                <Link to="/">
                  <Button color="inherit" onClick={closeDrawer}>
                    HOME{" "}
                  </Button>
                </Link>

                <Link to="/about">
                  <Button color="inherit" onClick={closeDrawer}>
                    ABOUT US{" "}
                  </Button>
                </Link>

                <a href="#services">
                  <Button color="inherit" onClick={closeDrawer}>
                    SERVICES
                  </Button>
                </a>

                <a href="#presence">
                  <Button color="inherit" onClick={closeDrawer}>
                    OUR PRESENCE{" "}
                  </Button>
                </a>

                <a href="#contact">
                  <Button color="inherit" onClick={closeDrawer}>
                    CONTACT{" "}
                  </Button>
                </a>
              </Stack>
            </Drawer>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}

export default Navbar;
