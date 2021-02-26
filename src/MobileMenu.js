import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
const useStyles = makeStyles({
  backgroundStyle: {
    backgroundColor: "#050401",
    display: "flex",
    justifyContent: "end",
  },
  hamburgerStyle: {
    color: "#FFFAFF",
    margin: "20px",
  },
  mobileMenuStyle: {
    backgroundColor: "#050401",
    color: "#FFFAFF",
    position: "abslute",
    height: "100vh",
    width: "100vw",
  },
});

const MobileMenu = () => {
  const classes = useStyles();
  const [showmenu, setShowMewnu] = useState(false);

  let menu;

  if (showmenu) {
    menu = (
      <AppBar
        className={classes.mobileMenuStyle}
        position="static"
        elevation="0"
      >
        <Typography>
          <NavLink
            exact
            className={classes.links}
            activeClassName={classes.linkActive}
            to="/"
          >
            Home
          </NavLink>
        </Typography>
        <Typography>
          <NavLink
            exact
            className={classes.links}
            activeClassName={classes.linkActive}
            /*when the link is equal to the path in the app component then the component is rendered*/
            to="/About"
          >
            About
          </NavLink>
        </Typography>
        <Typography>
          <NavLink
            exact
            className={classes.links}
            activeClassName={classes.linkActive}
            to="/Work"
          >
            Work
          </NavLink>
        </Typography>
        <Typography>
          <NavLink
            exact
            className={classes.links}
            activeClassName={classes.linkActive}
            to="/Contact"
          >
            Contact
          </NavLink>
        </Typography>
      </AppBar>
    );
  }
  return (
    <div className={classes.backgroundStyle}>
      <FontAwesomeIcon
        style={{ width: "30px", height: "30px" }}
        icon={faBars}
        onClick={() => setShowMewnu(!showmenu)}
        className={classes.hamburgerStyle}
      />
      {menu}
    </div>
  );
};

export default MobileMenu;
