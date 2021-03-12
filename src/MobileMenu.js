import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";

const useStyles = makeStyles({
  backgroundStyle: {
    backgroundColor: "#050401",
    display: "flex",
    justifyContent: "start",
  },
  hamburgerStyle: {
    color: "#FFFAFF",
    margin: "20px",
  },
  mobileMenuStyle: {
    backgroundColor: "#050401",
    color: "#FFFAFF",
    position: "fixed",
    top: "0px",
    bottom: "0",
    left: "0",
    rigth: "0",
  },
  links: {
    textDecoration: "none",
    color: "#FFFAFF",
    lineHeight: "4",
    textTransform: "uppercase",
    fontFamily: "montserrat",
    fontSize: "20px",
    borderBottom: "2px solid #30BCED",
    paddingBottom: "8px",
  },
});

const MobileMenu = () => {
  const classes = useStyles();
  const [showmenu, setShowMewnu] = useState(false);

  const closeMenu = () => {
    setShowMewnu(false);
  };

  let menu;

  if (showmenu) {
    menu = (
      <AppBar className={classes.mobileMenuStyle}>
        <div style={{ display: "flex", justifyContent: "start" }}>
          <FontAwesomeIcon
            style={{ width: "40px", height: "40px" }}
            icon={faTimes}
            onClick={() => setShowMewnu(!showmenu)}
            className={classes.hamburgerStyle}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "30px",
          }}
        >
          <Typography>
            <NavLink
              exact
              className={classes.links}
              to="/"
              onClick={() => closeMenu()}
            >
              Home
            </NavLink>
          </Typography>

          <Typography>
            <NavLink
              exact
              className={classes.links}
              /*when the link is equal to the path in the app component then the component is rendered*/
              to="/About"
              onClick={() => closeMenu()}
            >
              About
            </NavLink>
          </Typography>

          <Typography>
            <NavLink
              exact
              className={classes.links}
              to="/Work"
              onClick={() => closeMenu()}
            >
              Work
            </NavLink>
          </Typography>

          <Typography>
            <NavLink
              exact
              className={classes.links}
              to="/Contact"
              onClick={() => closeMenu()}
            >
              Contact
            </NavLink>
          </Typography>
        </div>
      </AppBar>
    );
  }
  return (
    <div>
      <div className={classes.backgroundStyle}>
        <FontAwesomeIcon
          style={{ width: "30px", height: "30px" }}
          icon={faBars}
          onClick={() => setShowMewnu(!showmenu)}
          className={classes.hamburgerStyle}
        />
      </div>
      {menu}
    </div>
  );
};

export default MobileMenu;
