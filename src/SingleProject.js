import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  projectContainer: {
    display: "flex",
    height: "auto",
  },

  picAlign: {
    flexDirection: "row",
    //with the rule below the picture and the text alternate on each line
    "&:nth-child(even)": {
      flexDirection: "row-reverse",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse!important",
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
      [theme.breakpoints.down("xs")]: {
        background: "none",
      },
    },
    "&:hover::before": {
      background: "none",
    },
  },

  pictureStyle: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      objectPosition: "left top",
    },
  },

  textSection: {
    width: "60vw",
    height: "350px",
    padding: "90px 0 90px 90px",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      padding: "90px 0 90px 60px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
      padding: "30px 30px 30px 30px",
    },
  },

  textContainer: {
    width: "40vw",
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
    },
  },

  textContainerGrey: {
    backgroundColor: "#303036",
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
    },
    "&:nth-child(odd)": {
      backgroundColor: "#FFFAFF",
    },
  },

  whiteText: {
    color: "#FFFAFF",
    "&:nth-child(odd)": {
      color: "#303036",
    },
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
  alt,
  //*the below prop is to reposition some of the pics for mobile screens
  pictureLink,
  text,
}) => {
  const classes = useStyles();
  return (
    <div
      className={classNames(
        classes.textContainerGrey,
        classes.picAlign,
        classes.projectContainer,
        classes.whiteText
      )}
    >
      <a href={pictureLink} rel="noopener noreferrer" target="_blank">
        <div className={classes.pictureContainerGrey}>
          {" "}
          <img src={picture} alt={alt} className={classes.pictureStyle} />
        </div>
      </a>

      <div className={classes.textSection}>
        <div className={classNames(classes.textContainer)}>
          <div className={classes.title}>
            <Typography
              variant="h5"
              component="h2"
              style={{ fontFamily: "montserrat", fontWeight: "600" }}
            >
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
