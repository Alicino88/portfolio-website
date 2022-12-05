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
            My journey as a frontend developer
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            style={{ letterSpacing: "1px", lineHeight: "1.5" }}
          >
            I have hands-on experience with the following frontend languages and
            frameworks:{" "}
            <span
              style={{ borderBottom: "2px solid #30BCED", fontWeight: "600" }}
            >
              Javascript, React, TypeScript, Gatsby, Vue, Html, Css, Contentful,
              GraphQL, and Figma as a design tool.
            </span>{" "}
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
            I love learning and solving coding challenges. Currently, I am
            focusing on deepening my React knowledge by following the course
            "React the Complete Guide" on Udemy. Also, whenever I have time, I
            write on my{" "}
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
              blog
            </a>{" "}
            about front-end development topics.
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
            Before diving into code, I have worked for several years in digital
            marketing and gathered experience with HubSpot, email marketing, CRM
            workflows, and copywriting.
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
            So far I have completed the following code-related certifications:
            <ul>
              <li>Responsive Web Design - FreeCodeCamp</li>
              <li>
                Introduction to Web Development and Programming - FITech Network
                University
              </li>
              <li>Gatsby v3 Tutorial and Project Course - Udemy</li>
              <li>Complete Intro to React - Frontend Masters</li>
            </ul>{" "}
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
            My journey into frontend development started three years ago while
            being on maternity leave with my first child. When the time at home
            with my son was over, I landed an internship as a front-end
            developer and got accepted into a full-stack developer program.
            Despite some challenges and the arrival of a second child, I kept
            coding to expand my skills and portfolio.
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
            I am now looking forward to joining a team of motivated tech
            professionals to make the most of my digital marketing and coding
            skills.
          </Typography>
        </Fade>
      </div>
    </div>
  );
};

export default AboutText;
