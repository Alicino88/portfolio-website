import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header.js";
import AboutText from "./AboutText.js";
import Quote from "./Quote.js";

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
      <Header title={"About"} />
      <AboutText />
      <Quote />
    </div>
  );
};

export default About;
