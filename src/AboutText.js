import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  backgroundPicture: {
    backgroundImage:
      'url("https://cdn.pixabay.com/photo/2016/05/01/17/58/dock-1365387_960_720.jpg")',
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
      background: "#30BCED",
      opacity: "0.5",
      height: "100%",
      width: "100%",
      position: "absolute",
    },
  },

  textContainer: {
    padding: "90px 0 90px 90px",
    color: "#FFFAFF",
    zIndex: "1",
    width: "60vw",
  },
});
const AboutText = () => {
  const classes = useStyles();
  return (
    <div className={classes.backgroundPicture}>
      <div className={classes.textContainer}>
        <Typography variant="h4" color="h2" style={{ marginBottom: "30px" }}>
          The great beginnins...How I have decided i wanted to be a frontend
          developer
        </Typography>
        <Typography variant="h5" component="h2">
          For several years I have been working as a digital marketer and
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
          that that was going to be my future working life.' I love coding for
          frontend as it gives me the chance to be creative while using my
          analitical and scientific approach to things.
        </Typography>
      </div>
    </div>
  );
};

export default AboutText;
