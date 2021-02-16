import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  quoteContainer: {
    backgroundColor: "#050401",
    color: "#FFFAFF",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center,",
  },
  textContainer: {
    padding: "140px",
  },

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
  author: {
    textAlign: "right",
    color: "#30BCED",
  },
});

const Quote = () => {
  const classes = useStyles();
  return (
    <div className={classes.quoteContainer}>
      <div className={classes.textContainer}>
        <Typography className={classes.quotes} variant="h5" component="h3">
          Digital design is like painting, except the paint never dries.
        </Typography>
        <Typography
          className={classes.author}
          variant="subtitle1"
          component="h3"
        >
          -Neville Brody
        </Typography>
      </div>
    </div>
  );
};

export default Quote;
