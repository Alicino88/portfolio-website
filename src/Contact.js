import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header.js";
import React, { useState } from "react";

const useStyles = makeStyles({
  background: {
    background: "#303036",
    color: "#FFFAFF",
    padding: "90px 0px 0px 90px",
  },
});

const Contact = () => {
  const classes = useStyles();
  const [submitting, setSubmitting] = useState(false);

  //To prevent the page from being completely reloaded after pressing the submit button I use preventDefault method
  //user clicks on submit button, setSubmitting runs and sets submitting to true, the message is then displayed.
  //To achieve this behaviour I use useState hook which creates reactive variable.
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  };
  return (
    <div>
      <Header title={"Contact"} />
      <div className={classes.background}>
        <Typography variant="h5" component="h2">
          Would you like to connect?
        </Typography>
        {/*when submitting is true the message is displayed*/}
        {submitting && <div>Submtting Form...</div>}
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>
              <p>Name</p>
              <input name="name" />
            </label>
            <label>
              <p>Email</p>
              <input type="email" />
            </label>
            <label>
              <p>Message</p>
              <input type="type=" text />
            </label>
            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Contact;
