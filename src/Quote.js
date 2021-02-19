import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Picture from "./images/Alice.jpg";
import Curriculum from "./images/CV_Alice_Moretti.pdf";

const useStyles = makeStyles({
  quoteContainer: {
    backgroundColor: "#050401",
    color: "#FFFAFF",
    height: "auto",
    display: "flex",
    alignItems: "center,",
  },
  textContainer: {
    padding: "160px 140px 140px 90px",
    width: "70vw",
    display: "flex",
    flexDirection: "column",
  },

  imageContainer: {
    width: "30vw",
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
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  buttonContainer: {
    paddingTop: "30px",
  },
  buttonStyle: {
    padding: "10px",
    color: "#30BCED",
    border: "2px solid #30BCED",
    "&:hover": {
      backgroundColor: "hsla(0, 0%, 13%, 1)",
    },
  },
});

const Quote = () => {
  const classes = useStyles();
  return (
    <div className={classes.quoteContainer}>
      <div className={classes.textContainer}>
        <Typography className={classes.textStyle} variant="h5" component="h3">
          I love frontend development as it allows me to use both analytical and
          creative skills.
        </Typography>
        <div className={classes.buttonContainer}>
          <a href={Curriculum} rel="noopener noreferrer" target="_blank">
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
        <img src={Picture} className={classes.imageStyle} alt="Alice Moretti" />
      </div>
    </div>
  );
};

export default Quote;
