import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backgroundPicture: {
    backgroundImage:
      'url("https://cdn.pixabay.com/photo/2015/10/12/14/59/milky-way-984050_1280.jpg")',
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
      width: "80vw",
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
        <Typography variant="h4" color="h2" style={{ marginBottom: "30px" }}>
          How I become a frontend developer
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          style={{ letterSpacing: "1px", lineHeight: "1.5" }}
        >
          For several years, I have been working as a digital marketer and
          copywriter, first in Italy (where I am originally from) and then in
          Finland, where now I have been living for five years. For some reason,
          I always felt that my career was missing something and that I wanted
          to have a job I would really feel accomplished and happy about. I had
          previously been working for a web development company as a project
          manager where my role was mostly to coordinate the designers and
          developers to make sure the client would be happy with the final
          result. I had never coded before. Then, one day while working as a
          digital marketing specialist in Finland, I saw a frontend developer
          coding while showing beautiful UIs on his computer screen. That was
          it, from that moment I knew what I wanted to do. At that time I was
          about to go on maternity leave and it sounded a bit crazy to start
          studying with a newborn with no relatives to help. Throughout my time
          at home with my son Tomas I found balance between changing diapers,
          surviving the Finnish winter, and keep my mental health. I completed
          two online certifications and the more I was coding the more I knew
          that that was going to be my future working life.
        </Typography>
      </div>
    </div>
  );
};

export default AboutText;
