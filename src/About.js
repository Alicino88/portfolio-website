import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AboutHeader from "./AboutHeader.js";
import AboutText from "./AboutText.js";
import Quote from "./Quote.js";
import Skills from "./Skills.js";

const useStyles = makeStyles({
  aboutContainer: {
    backgroundColor: "#FFFAFF",
    color: "#303036",
    height: "100vh",
  },
  textContainer: {
    width: "60vw",
    margin: "auto",
    paddingTop: "90px",
  },
});

const About = () => {
  const classes = useStyles();
  return (
    <div>
      <AboutHeader />
      <AboutText />
      <Quote />
      <Skills />
    </div>
  );
};

export default About;
