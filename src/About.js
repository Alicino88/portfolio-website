import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HeaderPicture from "./HeaderPic.js";

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
      <HeaderPicture />
      <div className={classes.aboutContainer}>
        <div className={classes.textContainer}>
          <Typography variant="h5" component="h2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo non
            itaque quas labore dolorem suscipit, eveniet ipsam dicta eos
            incidunt facilis id tempora mollitia dignissimos quis molestiae
            exercitationem. Facilis, ut. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Illo non itaque quas labore dolorem suscipit,
            eveniet ipsam dicta eos incidunt facilis id tempora mollitia
            dignissimos quis molestiae exercitationem. Facilis, ut.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
