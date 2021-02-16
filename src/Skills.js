import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Javascript from "/public/skillsIcons/javascript.png";

const useStyles = makeStyles({
  skillsContainer: {
    background: "#FFFAFF",
    height: "auto",
    display: "flex",
    justifyContent: "center",
  },
  skillsList: {
    width: "70vw",
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
          <img scr={Javascript} alt="javascript icon" />
        </li>
        <li>HTML</li>
        <li>CSS</li>
        <li>React</li>
        <li>Vue</li>
        <li>Photoshop</li>
      </ul>
    </div>
  );
};

export default Skills;
