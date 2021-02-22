import { TextareaAutosize, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Header from "./Header.js";

const useStyles = makeStyles({
  background: {
    background: "#303036",
    color: "#FFFAFF",
    padding: "90px 0px 0px 90px",
    height: "100vh",
  },

  formStyle: {
    width: "60vw",
  },

  nameAndEmailContainer: {
    width: "50%",
    float: "left",
  },

  nameAndEmailWidth: {
    width: "100%",
  },

  labelStyle: {
    display: "block",
  },

  textAreaWidth: {
    width: "100%",
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

          <div className={classes.nameAndEmailContainer}>
            <label className={classes.labelStyle} for="name">
              Name
            </label>
            <input
              className={classes.nameAndEmailWidth}
              type="text"
              id="name"
              name="name"
            ></input>
          </div>
          <div className={classes.nameAndEmailContainer}>
            <label className={classes.labelStyle} for="email">
              Email
            </label>
            <input
              className={classes.nameAndEmailWidth}
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
              className={classes.textAreaWidth}
              type="text"
              id="message"
              name="message"
            ></textarea>
          </div>
          <div>
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
