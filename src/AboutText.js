import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles((theme) => ({
  backgroundPicture: {
    backgroundImage:
      'url("https://cdn.pixabay.com/photo/2014/09/19/00/14/milky-way-451599_1280.jpg")',
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
        <Fade bottom>
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
            For years I have been working in digital marketing and copywriting,
            first in Italy and then in Finland. Then, one day, I got really
            intrigued at the idea that I could build something beautiful with
            code. It was a month before my first son was born when my journey
            into frontend development began.{" "}
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            style={{
              letterSpacing: "1px",
              lineHeight: "1.5",
              marginTop: "20px",
            }}
          >
            While having fun dealing with a baby, I have completed two online
            certifications in web development and programming and, after my time
            at home with my little bundle of joy, I landed a 5-month traineeship
            as a front-end developer.
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            style={{
              letterSpacing: "1px",
              lineHeight: "1.5",
              marginTop: "20px",
            }}
          >
            Over the past couple of years, I have gained hands-on experience
            with the following technologies:{" "}
            <span
              style={{ borderBottom: "2px solid #30BCED", fontWeight: "600" }}
            >
              Javascript, React, Gatsby, Vue, Html, Css, and Figma as a design
              tool.
            </span>{" "}
            Whenever I have time, I enjoy writing about coding on my{" "}
            <a
              href="https://www.aliceiscoding.com/"
              rel="noopener noreferrer"
              target="_blank"
              style={{
                textDecoration: "none",
                color: "#30BCED",
                fontWeight: "600",
              }}
            >
              personal blog
            </a>
            .
          </Typography>
        </Fade>
      </div>
    </div>
  );
};

export default AboutText;
