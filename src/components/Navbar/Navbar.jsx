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
        <AppBar color="transparent">
          <Toolbar
            className=""
            style={{
              background:
                "linear-gradient(90deg, rgba(39,109,255,0.9) 0%, rgba(42,0,213,0.9) 100%)",
              color: "white",
            }}
          >
            {/* Adding Company name or logo here  */}
            <Typography component="div" sx={{ flexGrow: 1 }}>
              <img src={navlogo} className="h-10 pl-4"></img>
            </Typography>

            {/* Navigation for laptop */}
            <Stack direction="row" spacing={2.5} className="">
              <NavLink to="/" className="flex">
                <Button
                  color="inherit"
                  sx={{ display: { xs: "none", lg: "block" } }}
                >
                  _HOME{" "}
                </Button>
              </NavLink>

              <Link to="/" className="flex">
                <Button
                  color="inherit"
                  sx={{ display: { xs: "none", lg: "block" } }}
                >
                  _ABOUT US{" "}
                </Button>
              </Link>

              <Link to="/" className="flex">
                <Button
                  color="inherit"
                  sx={{ display: { xs: "none", lg: "block" } }}
                >
                  _SERVICES{" "}
                </Button>
              </Link>

              <Link to="/" className="flex">
                <Button
                  color="inherit"
                  sx={{ display: { xs: "none", lg: "block" } }}
                >
                  _CARRER{" "}
                </Button>
              </Link>

              <Link to="/" className="flex">
                <Button
                  color="inherit"
                  sx={{ display: { xs: "none", lg: "block" } }}
                >
                  _CONTACT{" "}
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
                  background:
                    "linear-gradient(0deg, rgba(39,109,255,0.8) 0%, rgba(42,0,213,0.9) 100%)",
                  height: "100vh",
                  color: "white",
                  fontSize: "32px",
                  // border: `2px solid ${color.primary}`
                }}
                className="flex flex-col justify-center items-center"
              >
                <Link to="/">
                  <Button color="inherit" onClick={closeDrawer}>
                    _HOME{" "}
                  </Button>
                </Link>

                <Link to="/">
                  <Button color="inherit" onClick={closeDrawer}>
                    _ABOUT US{" "}
                  </Button>
                </Link>

                <Link to="/">
                  <Button color="inherit" onClick={closeDrawer}>
                    _SERVICES
                  </Button>
                </Link>

                <Link to="/">
                  <Button color="inherit" onClick={closeDrawer}>
                    _CARRER{" "}
                  </Button>
                </Link>

                <Link to="/">
                  <Button color="inherit" onClick={closeDrawer}>
                    _CONTACT{" "}
                  </Button>
                </Link>
              </Stack>
            </Drawer>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}

export default Navbar;
