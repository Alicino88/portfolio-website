import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBarStyle: {
    backgroundColor: "#050401",
    marginleft: "100px",
  },
  toolbarStyle: {
    justifyContent: "start",
    marginLeft: "50px",
    marginTop: "30px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "10px",
    },
  },
  links: {
    margin: "25px",
    textDecoration: "None",
    color: "#FFFAFF",
    fontFamily: "Montserrat",
    "&:hover": {
      borderBottom: "4px solid #30BCED",
      paddingBottom: "8px",
    },
  },
  linkActive: {
    borderBottom: "4px solid #30BCED",
    paddingBottom: "8px",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const linkList = [
    { id: 1, title: "Home", to: "/" },
    { id: 2, title: "About", to: "/About" },
    { id: 3, title: "Work", to: "/Work" },
    { id: 4, title: "Contact", to: "/Contact" },
  ];

  return (
    //added position static as by default React puts fixed position which takes the menu out from the normal page flow
    <AppBar className={classes.appBarStyle} position="static">
      <Toolbar className={classes.toolbarStyle}>
        {linkList.map((link) => (
          <Typography key={link.id}>
            <NavLink
              exact
              className={classes.links}
              activeClassName={classes.linkActive}
              to={link.to}
            >
              {link.title}
            </NavLink>
          </Typography>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
