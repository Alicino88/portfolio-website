import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  headerContainer: {
    backgroundColor: "#050401",
    height: "300px",
    display: "flex",
    alignItems: "center",
  },
  textContainer: {
    width: "75vw",
    paddingLeft: "90px",
    color: "#FFFAFF",
  },
});

const Header = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.headerContainer}>
      <div className={classes.textContainer}>
        <Typography variant="h4" component="h1">
          {props.title}
        </Typography>
      </div>
    </div>
  );
};

export default Header;
