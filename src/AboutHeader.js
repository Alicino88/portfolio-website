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

const AboutHeader = () => {
  const classes = useStyles();
  return (
    <div className={classes.headerContainer}>
      <div className={classes.textContainer}>
        <Typography variant="h4" component="h1">
          About me
        </Typography>
      </div>
    </div>
  );
};

export default AboutHeader;
