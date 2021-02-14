import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  homeContainer: {
    backgroundColor: "#050401",
    color: "#FFFAFF",
    height: "100vh",
  },
  textContainer: {
    width: "75vw",
    padding: "90px 0 0 90px",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.homeContainer}>
      <div className={classes.textContainer}>
        <Typography variant="h1" component="h1">
          Ciao!I am Alice,
        </Typography>
        <Typography variant="h3" component="h1">
          A front-end developer based in Helsinki experienced with Vue and
          React. Currently I am studying to hone my Javascript skills. This
          website is about my work and how I became a developer.
        </Typography>
      </div>
    </div>
  );
};

export default Home;
