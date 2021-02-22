import { TextareaAutosize, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Header from "./Header.js";

const useStyles = makeStyles({
  background: {
    background: "#303036",
    color: "#FFFAFF",
    padding: "90px 90px 0px 90px",
    height: "100vh",
  },

  formStyle: {
    width: "60vw",
    marginTop: "50px",
    maxWidth: "800px",
  },

  nameAndEmailContainer: {
    width: "50%",
    float: "left",
  },

  nameAndEmailStyle: {
    width: "100%",
    height: "55px",
    background: "#4d4d56",
    border: "none",
    textDecoration: "none",
    outline: "0",

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
    color: "#FFFAFF",
    fontWeight: "600",
    textTransform: "uppercase",
    marginBottom: "20px",
  },

  textAreaStyle: {
    background: "#3c3c44",
    width: "100%",
    border: "none",
    textDecoration: "none",
    outline: "0",

    "&:focus": {
      border: "2px solid #30BCED",
    },
  },
  buttonStyle: {
    marginTop: "50px",
  },
});

const Contact = (Name) => {
  const classes = useStyles();
  return (
    <div>
      <Header title={"Contact"} />
      <div className={classes.background}>
        <Typography variant="h5" component="h2">
          Would you like to connect?
        </Typography>

        <form className={classes.formStyle}>
          {/*for attribute on the label and id attribute on input must be the same to bind them together
            name attribute on the input field is necessary for the information to be sent*/}

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
            className={classes.nameAndEmailContainer}
            style={{ paddingLeft: "20px", marginBottom: "50px" }}
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

          <div>
            <label className={classes.labelStyle} for="message">
              Message
            </label>

            <textarea
              className={classes.textAreaStyle}
              type="text"
              id="message"
              name="message"
              rows="12"
            ></textarea>
          </div>
          <div className={classes.buttonStyle}>
            <button type="submit" form="form1" value="Submit">
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
