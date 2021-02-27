import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backgroundPicture: {
    backgroundImage:
      'url("https://cdn.pixabay.com/photo/2015/10/12/14/59/milky-way-984050_1280.jpg")',
    height: "auto",
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    position: "relative",
    backgroundAttachment: "fixed",
    "&::before": {
      content: "''",
      background: "#02151c",
      opacity: "0.7",
      height: "100%",
      width: "100%",
      position: "absolute",
    },
    [theme.breakpoints.down("xs")]: {
      backgroundAttachment: "scroll",
    },
  },

  textContainer: {
    padding: "90px 0 90px 90px",
    color: "#FFFAFF",
    zIndex: "1",
    width: "60vw",
    [theme.breakpoints.down("sm")]: {
      width: "85vw",
      paddingLeft: "60px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90vw",
      paddingLeft: "30px",
    },
  },
}));
const AboutText = () => {
  const classes = useStyles();
  return (
    <div className={classes.backgroundPicture}>
      <div className={classes.textContainer}>
        <Typography
          variant="h4"
          color="h2"
          style={{
            marginBottom: "30px",
            fontWeight: "600",
            fontFamily: "montserrat",
          }}
        >
          How I become a frontend developer
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          style={{ letterSpacing: "1px", lineHeight: "1.5" }}
        >
          Two years ago, in the darkness of the Finnish winter, I found my
          light. My son was born on February 27th. As crazy as it sounds, it was
          during my maternity leave that I decided to give a try to coding and,
          eventually, I fell in love with it.{" "}
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          style={{ letterSpacing: "1px", lineHeight: "1.5", marginTop: "20px" }}
        >
          In a few months I completed two online certifications in web
          development and programming and, after my time at home with my little
          bundle of joy, I landed a 5-month traineeship as a front-end
          developer.
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          style={{ letterSpacing: "1px", lineHeight: "1.5", marginTop: "20px" }}
        >
          In the past couple of years, I gained hands-on experience with the
          following technologies:{" "}
          <span
            style={{ borderBottom: "2px solid #30BCED", fontWeight: "600" }}
          >
            Javascript, Html, Css, React, and Vue
          </span>
          . The website you are looking at is my latest project.
        </Typography>
      </div>
    </div>
  );
};

export default AboutText;
