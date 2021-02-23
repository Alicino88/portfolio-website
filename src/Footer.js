import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  footerStyle: {
    backgroundColor: "#050401",
    color: "#FFFAFF",
    padding: "90px 0 0 90px",
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
  },
  dividerStyle: {
    background: "#30BCED",
    height: "3px",
    marginBottom: "20px",
    marginRight: "90px",
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footerStyle}>
      <Divider className={classes.dividerStyle} />
      <div>
        <ul className={classes.iconsStyle}>
          <li>
            <LinkedInIcon rounded style={{ fontSize: 40 }} />
          </li>
          <li style={{ paddingLeft: "30px", paddingTop: "4px" }}>
            <GitHubIcon style={{ fontSize: 30 }} />
          </li>
        </ul>
        <ul className={classes.copyrightStyle}>
          <li>© Alice Moretti</li>
          <li
            style={{
              borderLeft: "1px solid #FFFAFF",
              marginLeft: "10px",
              paddingLeft: "10px",
            }}
          >
            Built with{" "}
            <a
              href="https://reactjs.org/"
              style={{
                textDecoration: "none",
                borderBottom: "1px dotted",
                color: "inherit",
              }}
            >
              RectJs
            </a>
          </li>
          <li
            style={{
              borderLeft: "1px solid #FFFAFF",
              marginLeft: "10px",
              paddingLeft: "10px",
            }}
          >
            Icons by{" "}
            <a
              href="https://icons8.com/"
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
