/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Logo from "../../assets/images/logo_transparent.png";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setState] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  return (
    <div style={{ height: "height: 6vh" }}>
      <div
        className={
          location.pathname === "/"
            ? props.scroll
              ? "container1 sticky bg-black"
              : "container1 sticky bg-black-tr"
            : "container1 sticky bg-black"
        }
      >
        <div className="container2">
          <div className="Header">
            <img
              src={Logo}
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                location.pathname === "/"
                  ? window.scrollTo(0, 0)
                  : navigate("/");
                document.title = "Construction";
              }}
            />
            <div className="Header-Menu">
              {location.pathname === "/" && (
                <div className="Header-Menu-Desktop">
                  <p onClick={props.executeScrollOurWork} className="Menu-Item">
                    Our Work
                  </p>
                  <p onClick={props.executeScrollAboutUs} className="Menu-Item">
                    About Us
                  </p>
                  <p
                    onClick={props.executeScrollContactUs}
                    className="Menu-Item"
                  >
                    Contact Us
                  </p>
                  <p onClick={() => navigate("/temp1")} className="Menu-Item">
                    Template 1
                  </p>
                </div>
              )}
              {/* dummy containers  */}
              <div className="Header-Menu-Desktop"></div>
              <div className="Header-Menu-Mobile"></div>
              <div className="Header-Menu-Mobile">
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  onClick={toggleDrawer(true)}
                  sx={{
                    mr: 2,
                  }}
                >
                  <MenuIcon style={{ color: "#EEEEEE" }} />
                </IconButton>
              </div>
            </div>

            <Drawer
              anchor="right"
              open={open}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
            >
              <Box
                sx={{
                  p: 2,
                  height: 1,
                  backgroundColor: "#eeeeee",
                }}
              >
                <IconButton sx={{ mb: 2 }}>
                  <CloseIcon onClick={toggleDrawer(false)} />
                </IconButton>
                <Divider sx={{ mb: 2 }} />
                <Box sx={{ mb: 2 }}>
                  <ListItemButton onClick={props.executeScrollOurWork}>
                    <ListItemText primary="Our Work" />
                  </ListItemButton>
                  <ListItemButton onClick={props.executeScrollAboutUs}>
                    <ListItemText primary="About Us" />
                  </ListItemButton>
                  <ListItemButton onClick={props.executeScrollContactUs}>
                    <ListItemText primary="Contact Us" />
                  </ListItemButton>
                </Box>
                {/* <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                position: "absolute",
                bottom: "0",
                left: "50%",
                transform: "translate(-50%, 0)",
              }}
            >
              <Button variant="contained" sx={{ m: 1, width: 0.5 }}>
                Register
              </Button>
              <Button variant="outlined" sx={{ m: 1, width: 0.5 }}>
                Login
              </Button>
            </Box> */}
              </Box>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
}
