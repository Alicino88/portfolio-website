import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  appBarStyle: {
    backgroundColor: "#050401",
    marginleft: "100px",
  },
  toolbarStyle: {
    display: "flex",
    justifyContent: "start",
    marginLeft: "50px",
  },
  links: {
    margin: "25px",
    textDecoration: "None",
    color: "#FFFAFF",
  },
});

const Navbar = () => {
  const classes = useStyles();
  return (
    //added position static as by default React puts fixed position which takes the menu out from the normal page flow
    <AppBar className={classes.appBarStyle} position="static" elevation="0">
      <Toolbar className={classes.toolbarStyle}>
        <Typography>
          <Link className={classes.links} to="/">
            Home
          </Link>
        </Typography>
        <Typography>
          <Link className={classes.links} to="/About">
            About
          </Link>
        </Typography>
        <Typography>
          <Link className={classes.links} to="/Work">
            Work
          </Link>
        </Typography>
        <Typography>
          <Link className={classes.links} to="/Contact">
            Contact
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
