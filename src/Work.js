import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header.js";
import SingleProject from "./SingleProject.js";
import Truemed from "./images/truemed3.png";
import Users from "./images/react_users1.png";
import Lando from "./images/lando.png";
import Crostata from "./images/crostata.png";

const Work = () => {
  return (
    <div>
      <Header title={"Work"} />
      <SingleProject
        picAlignRight
        title={"React Users Page"}
        picture={Users}
        pictureLink={"https://react-users-page2.netlify.app/"}
        text="I had fun creating a small React application. The app fetches some users data from an API via Axios and uses useState, useEffect, useParams hooks."
      />
      <SingleProject
        title={"TrueMed Services Page"}
        picture={Truemed}
        whiteBackground
        greyText
        pictureBlue
        pictureLink={"https://truemedinc.com/services"}
        text="This page was developed with Vue and Vuetify and it has been one of the several projects I carried out during my last traineeship as a frontend developer."
      />
      <SingleProject
        title={"Crostata Cake Website"}
        Crostata
        Cake
        Website
        picture={Crostata}
        picAlignRight
        pictureLink={"https://codepen.io/Alicinetto/full/mdJqdEq"}
        text="I must admit, this website is nothing fancy as it doesn't use any Javascript framework. Nevertheless I wanted to include it in my portfolio as I really like the graphics"
      />
      <SingleProject
        title={"Product Landing Page"}
        picture={Lando}
        whiteBackground
        greyText
        pictureLink={"https://codepen.io/Alicinetto/full/VweyBgv"}
        text="I love coding landing pages, it's fun and allows you to think also
      from a digital marketing perspective: how to grasp the attention of the reader? How to
      drive conversions?"
      />
    </div>
  );
};

export default Work;
