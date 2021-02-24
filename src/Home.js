import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    backgroundColor: "#050401",
    color: "#FFFAFF",
    height: "auto",
    /*
    "&::after": {
      content: "''",
      position: "absolute",
      borderBottom: "4px solid #30BCED",
      width: "80vw",
      bottom: "0",
      marginLeft: "90px",
      marginRight: "90px",
    },
    */
  },
  textContainer: {
    width: "65vw",
    padding: "10% 0 10% 90px",
    [theme.breakpoints.down("sm")]: {
      padding: "25% 0 10% 60px",
      width: "90vw",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "25% 0 10% 30px",
      width: "90vw",
    },
  },

  titleStyle: {
    fontWeight: "600",
  },

  textStyle: {
    marginTop: "30px",
    fontWeight: "500",
  },

  dividerStyle: {
    background: "#30BCED",
    height: "3px",
    marginLeft: "90px",
    marginRight: "90px",
    marginTop: "80px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "60px",
      marginRight: "60px",
      marginTop: "400px",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "30px",
      marginRight: "30px",
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <section style={{ backgroundColor: "#050401" }}>
      <div className={classes.homeContainer}>
        <div className={classes.textContainer}>
          <Typography
            variant="h1"
            component="h1"
            className={classes.titleStyle}
          >
            Ciao! I am Alice,
          </Typography>

          <Typography
            variant="h3"
            component="h1"
            fontWeight="fontWeightLight"
            className={classes.textStyle}
          >
            A front-end developer based in Helsinki experienced with{" "}
            <span style={{ color: "#30BCED", fontWeight: "700" }}>React</span>{" "}
            and <span style={{ color: "#30BCED", fontWeight: "700" }}>Vue</span>
            . This website is about my work and the journey which led me to
            become a developer.
          </Typography>
        </div>
      </div>
      <Divider className={classes.dividerStyle} />
    </section>
  );
};

export default Home;
