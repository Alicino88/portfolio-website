import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  footerStyle: {
    backgroundColor: "#050401",
    color: "#FFFAFF",
    padding: "30px 0 0 90px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "60px",
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "30px",
    },
  },
  iconsStyle: {
    display: "flex",
    listStyle: "none",
    paddingLeft: "0",
  },

  copyrightStyle: {
    display: "flex",
    listStyle: "none",
    padding: "10px 0 40px 0",
    [theme.breakpoints.down("xs")]: {
      disply: "flex",
      flexDirection: "column",
    },
  },

  listStyle: {
    borderLeft: "1px solid #FFFAFF",
    marginLeft: "10px",
    paddingLeft: "10px",
    [theme.breakpoints.down("xs")]: {
      borderLeft: "none",
      marginLeft: "0px",
      paddingLeft: "0px",
      paddingTop: "5px",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footerStyle}>
      <div>
        <ul className={classes.iconsStyle}>
          <li>
            <LinkedInIcon
              rounded
              style={{ fontSize: 40, cursor: "pointer" }}
              onClick={() =>
                window.open("https://www.linkedin.com/in/alicemoretti")
              }
            />
          </li>
          <li style={{ paddingLeft: "30px", paddingTop: "4px" }}>
            <GitHubIcon
              style={{ fontSize: 30, cursor: "pointer" }}
              onClick={() => window.open("https://github.com/Alicino88")}
            />
          </li>
        </ul>
        <ul className={classes.copyrightStyle}>
          <li>© Alice Moretti</li>
          <li className={classes.listStyle}>
            Built with{" "}
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                borderBottom: "1px dotted",
                color: "inherit",
              }}
            >
              ReactJs
            </a>
          </li>
          <li className={classes.listStyle}>
            Icons by{" "}
            <a
              href="https://icons8.com/"
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                borderBottom: "1px dotted",
                color: "inherit",
              }}
            >
              icons8
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
