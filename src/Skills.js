import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
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
    display: "flex",
    justifyContent: "center",
  },
  skillsList: {
    width: "65vw",
    display: "flex",
    justifyContent: "space-around",
    listStyle: "none",
    padding: "90px",
  },
});

const Skills = () => {
  const classes = useStyles();
  return (
    <div className={classes.skillsContainer}>
      <ul className={classes.skillsList}>
        <li>
          <img src={Javascript} alt="javascript icon" width="50px" />
        </li>
        <li>
          <img src={Html} alt="HTML icon" width="50px" />
        </li>
        <li>
          <img src={css} alt="css icon" width="50px" />
        </li>
        <li>
          <img src={react} alt="react icon" width="50px" />
        </li>
        <li>
          <img src={vue} alt="vue icon" width="50px" />
        </li>
        <li>
          <img src={photoshop} alt="photoshop icon" width="50px" />
        </li>
      </ul>
    </div>
  );
};

export default Skills;
