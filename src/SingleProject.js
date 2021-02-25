import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  projectContainer: {
    display: "flex",
    height: "auto",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },

  pictureContainerBlue: {
    width: "40vw",
    height: "350px",
    position: "relative",

    "&::before": {
      content: "''",
      background: "hsla(205, 64%, 17%, 1)",
      opacity: "0.7",
      position: "absolute",
      width: "100%",
      height: "100%",
      transition: "background 1s",
    },
    "&:hover::before": {
      background: "none",
    },
  },
  pictureContainerGrey: {
    width: "40vw",
    height: "350px",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
    },
    "&::before": {
      content: "''",
      background: "hsla(196, 31%, 14%, 1)",
      opacity: "0.7",
      position: "absolute",
      width: "100%",
      height: "100%",
      transition: "background 1s",
    },
    "&:hover::before": {
      background: "none",
    },
  },
  picAlignRight: {
    flexDirection: "row-reverse",
  },
  picAlignLeft: {
    flexDirection: "row",
  },
  pictureStyle: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  textContainerWhite: {
    backgroundColor: "#FFFAFF",
  },

  textContainerGrey: {
    backgroundColor: "#303036",
  },
  whiteText: {
    color: "#FFFAFF",
  },
  greyText: {
    color: "#303036",
  },

  title: {
    borderLeft: "2px solid #30BCED",
    paddingLeft: "10px",
  },

  text: {
    marginTop: "20px",
  },
}));
const Singleproject = ({
  title,
  picture,
  picAlignRight,
  whiteBackground,
  greyText,
  pictureBlue,
  pictureLink,
  text,
}) => {
  const classes = useStyles();
  return (
    <div
      className={classNames(
        picAlignRight ? classes.picAlignRight : classes.picAlignLeft,
        classes.projectContainer
      )}
    >
      <div className={classes.pictureContainer}>
        <a href={pictureLink} rel="noopener noreferrer" target="_blank">
          <div
            className={
              pictureBlue
                ? classes.pictureContainerBlue
                : classes.pictureContainerGrey
            }
          >
            {" "}
            <img
              src={picture}
              alt="Truemed services page"
              className={classes.pictureStyle}
            />
          </div>
        </a>
      </div>

      <div
        style={{
          width: "60vw",
          height: "350px",
          padding: "90px 0 90px 90px",
          display: "flex",
          alignItems: "center",
        }}
        className={
          whiteBackground
            ? classes.textContainerWhite
            : classes.textContainerGrey
        }
      >
        <div
          style={{ width: "40vw" }}
          className={greyText ? classes.greyText : classes.whiteText}
        >
          <div className={classes.title}>
            <Typography variant="h5" component="h2">
              {title}
            </Typography>
          </div>
          <div className={classes.text}>
            <Typography variant="h6" component="h3">
              {text}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleproject;
