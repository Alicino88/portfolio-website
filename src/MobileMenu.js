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

  const linkList = [
    { title: "Home", to: "/" },
    { title: "About", to: "/About" },
    { title: "Work", to: "/Work" },
    { title: "Contact", to: "/Contact" },
  ];

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
          {linkList.map((link) => (
            <Typography>
              <NavLink
                exact
                className={classes.links}
                to={link.to}
                onClick={() => closeMenu()}
              >
                {link.title}
              </NavLink>
            </Typography>
          ))}
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
