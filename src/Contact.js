import { TextareaAutosize, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import classNames from "classnames";

import Header from "./Header.js";

const useStyles = makeStyles((theme) => ({
  background: {
    background: "#FFFAFF",
    color: "#050401",
    padding: "90px 90px 90px 90px",
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "60px",
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "30px",
    },
  },

  formStyle: {
    width: "45vw",
    marginTop: "50px",
    maxWidth: "800px",
    [theme.breakpoints.down("md")]: {
      width: "60vw",
    },
    [theme.breakpoints.down("sm")]: {
      width: "70vw",
    },
    [theme.breakpoints.down("xs")]: {
      width: "80vw",
    },
  },

  nameAndEmailSection: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
    },
  },

  nameAndEmailContainer: {
    width: "50%",
    float: "left",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },

  emailPaddingLeft: {
    paddingLeft: "20px",
    marginBottom: "50px",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "0px",
      paddingRight: "20px",
    },
  },

  nameAndEmailStyle: {
    width: "100%",
    height: "55px",
    background: "none",
    border: "2px solid #050401",
    textDecoration: "none",
    outline: "0",
    color: "#050401",
    padding: "20px 20px 20px 20px",
    fontFamily: "Source Sans Pro",
    fontSize: "20px",
    borderRadius: "4px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },

    "&:focus": {
      border: "2px solid #30BCED",
    },
  },

  namePadding: {
    padding: "0 5px 0 0",
  },

  emailPadding: {
    padding: "0 0 0 5px",
  },

  labelStyle: {
    display: "block",
    color: "#050401",
    fontWeight: "600",
    textTransform: "uppercase",
    marginBottom: "20px",
    fontFamily: "Montserrat",
  },

  textAreaContainer: {
    [theme.breakpoints.down("xs")]: {
      paddingRight: "20px",
    },
  },

  textAreaStyle: {
    background: "#FFFAFF",
    width: "100%",
    border: "2px solid #050401",
    textDecoration: "none",
    outline: "0",
    color: "#050401",
    padding: "20px 20px 20px 20px",
    fontFamily: "Source Sans Pro",
    fontSize: "20px",
    borderRadius: "4px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },

    "&:focus": {
      border: "2px solid #30BCED",
    },
  },
  buttonStyle: {
    padding: "10px 30px",
    fontWeight: "600",
    fontSize: "15px",
    fontFamily: "Montserrat",
    marginTop: "40px",
    color: "#30BCED",
    border: "2px solid #30BCED",
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "#30BCED",
      color: "#FFFAFF",
    },
    "&:hover": {
      backgroundColor: "#30BCED",
      color: "#FFFAFF",
    },
  },

  "&:hover": {
    backgroundColor: "#30BCED",
  },
}));

const Contact = (Name) => {
  const classes = useStyles();
  return (
    <div>
      <Header title={"Contact"} />
      <div className={classes.background}>
        <Typography
          variant="h5"
          component="h2"
          style={{ fontFamily: "montserrat", fontWeight: "600" }}
        >
          Drop me a line, I'd like to hear from you!
        </Typography>

        <form
          className={classes.formStyle}
          name="contact"
          method="POST"
          data-netlify="true"
        >
          {/*This hidden input is part of adding a static html file to index.html to make Netlify form work with react
        The value is the same as the form name*/}
          <input type="hidden" name="form-name" value="contact" />

          {/*for attribute on the label and id attribute on input must be the same to bind them together
            name attribute on the input field is necessary for the information to be sent*/}
          <div className={classes.nameAndEmailSection}>
            <div
              className={classes.nameAndEmailContainer}
              style={{ paddingRight: "20px", marginBottom: "50px" }}
            >
              <label className={classes.labelStyle} for="name">
                Name
              </label>
              <input
                className={classes.nameAndEmailStyle}
                type="text"
                id="name"
                name="name"
              ></input>
            </div>
            <div
              className={classNames(
                classes.nameAndEmailContainer,
                classes.emailPaddingLeft
              )}
            >
              <label className={classes.labelStyle} for="email">
                Email
              </label>
              <input
                className={classes.nameAndEmailStyle}
                type="email"
                id="email"
                name="email"
              ></input>
            </div>
          </div>

          <div className={classes.textAreaContainer}>
            <label className={classes.labelStyle} for="message">
              Message
            </label>

            <textarea
              className={classes.textAreaStyle}
              id="message"
              name="message"
              rows="12"
            ></textarea>
          </div>
          <div className={classes.buttonContainer}>
            <Button
              className={classes.buttonStyle}
              disableElevation
              disableRipple
              variant="outlined"
              type="submit"
            >
              Send message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
