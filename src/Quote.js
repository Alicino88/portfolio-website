import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Picture from "./images/Alice.jpg";
import Curriculum from "./images/CV_Alice_Moretti.pdf";

const useStyles = makeStyles((theme) => ({
  quoteContainer: {
    backgroundColor: "#FFFAFF",
    color: "#050401",
    height: "auto",
    display: "flex",

    position: "relative",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  textContainer: {
    padding: "120px 140px 120px 90px",
    width: "60vw",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      width: "60vw",
      padding: "80px 45px 80px 55px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "80vw",
      padding: "80px 0px 80px 30px",
    },
  },

  imageContainer: {
    height: "100%",
    width: "30vw",
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    [theme.breakpoints.down("sm")]: {
      width: "40vw",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
      position: "relative",
      height: "350px",
    },
  },

  /*
  quotes: {
    position: "relative",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    "&::before": {
      content: "open-quote",
      position: "absolute",
      color: "#30BCED",
      fontStyle: "italic",
      fontSize: "200px",
      top: "-90px",
      left: "-40",
      opacity: "0.5",
    },
  },
  /*
  author: {
    textAlign: "right",
    color: "#30BCED",
  },
  */

  textStyle: {
    borderLeft: "4px solid #30BCED",
    paddingLeft: "10px",
  },

  imageStyle: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  buttonContainer: {
    paddingTop: "30px",
  },
  buttonStyle: {
    padding: "10px 20px",
    fontWeight: "600",
    color: "#30BCED",
    border: "2px solid #30BCED",

    [theme.breakpoints.down("xs")]: {
      backgroundColor: "#30BCED",
      color: "#FFFAFF",
    },
    "&:hover": {
      backgroundColor: "#30BCED",
      color: "#FFFAFF",
    },
  },
}));

const Quote = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.quoteContainer}>
        <div className={classes.textContainer}>
          <Typography className={classes.textStyle} variant="h5" component="h3">
            I love frontend development as it allows to use both creative and
            analytical skills.
          </Typography>
          <div className={classes.buttonContainer}>
            <a
              href={Curriculum}
              style={{ textDecoration: "none" }}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button
                variant="outlined"
                className={classes.buttonStyle}
                disableElevation
                disableRipple
              >
                See full resume
              </Button>
            </a>
          </div>
        </div>
        <div className={classes.imageContainer}>
          <img
            src={Picture}
            className={classes.imageStyle}
            alt="Alice Moretti"
          />
        </div>
      </div>
    </div>
  );
};

export default Quote;
