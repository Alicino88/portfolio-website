import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    backgroundColor: "#050401",
    height: "300px",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      height: "200px",
    },
  },
  textContainer: {
    width: "75vw",
    paddingLeft: "90px",
    color: "#FFFAFF",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "60px",
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "30px",
    },
  },
}));

const Header = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.headerContainer}>
      <div className={classes.textContainer}>
        <Typography variant="h3" component="h1">
          {props.title}
        </Typography>
      </div>
    </div>
  );
};

export default Header;
