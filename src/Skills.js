import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Javascript from "./images/javascript.png";
import Html from "./images/html5.png";
import css from "./images/css.png";
import react from "./images/react.png";
import vue from "./images/vue.png";
import photoshop from "./images/photoshop.png";

const useStyles = makeStyles({
  skillsContainer: {
    background: "#FFFAFF",
    height: "auto",
    padding: "90px",
  },
});

const Skills = () => {
  const classes = useStyles();
  return (
    <div className={classes.skillsContainer}>
      <Grid container justify="center" spacing={4}>
        <Grid item xs={12} md={1} justify="center">
          <img src={Javascript} alt="javascript icon" width="50px" />
        </Grid>
        <Grid item xs={12} md={1}>
          <img src={Html} alt="HTML icon" width="50px" />
        </Grid>
        <Grid item xs={12} md={1}>
          <img src={css} alt="css icon" width="50px" />
        </Grid>
        <Grid item xs={12} md={1}>
          <img src={react} alt="react icon" width="50px" />
        </Grid>
        <Grid item xs={12} md={1}>
          <img src={vue} alt="vue icon" width="50px" />
        </Grid>
        <Grid item xs={12} md={1}>
          <img src={photoshop} alt="photoshop icon" width="50px" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Skills;
