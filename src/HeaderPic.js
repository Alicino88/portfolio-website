import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  backgroundPicture: {
    backgroundImage:
      'url("https://cdn.pixabay.com/photo/2016/05/01/17/58/dock-1365387_960_720.jpg")',
    height: "400px",
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    position: "relative",
    "&::before": {
      content: "''",
      background: "hsl(202, 19%, 45%)",
      opacity: "0.5",
      top: "0",
      bottom: "0",
      height: "100%",
      width: "100%",
      display: "flex",
      position: "absolute",
    },
  },

  textContainer: {
    paddingLeft: "90px",
    color: "#FFFAFF",
    zIndex: "1",
  },
});
const HeaderPicture = () => {
  const classes = useStyles();
  return (
    <div className={classes.backgroundPicture}>
      <div className={classes.textContainer}>
        <Typography variant="h4" component="h1">
          One winter day, in Finland, I decided I wanted to be a front-end
          developer...
        </Typography>
      </div>
    </div>
  );
};

export default HeaderPicture;
