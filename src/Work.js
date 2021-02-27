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
        text="A small React application fetching users data from an external API via Axios and using useState, useEffect, useParams hooks."
      />
      <SingleProject
        title={"TrueMed Services Page"}
        picture={Truemed}
        whiteBackground
        greyText
        PictureLeftTop
        pictureLink={"https://truemedinc.com/services"}
        text="A page developed with Vue and Vuetify UI library. This project was part of my last traineeship as a front-end developer."
      />
      <SingleProject
        title={"Crostata Cake Website"}
        Crostata
        Cake
        PictureLeftTop
        Website
        picture={Crostata}
        picAlignRight
        pictureLink={"https://codepen.io/Alicinetto/full/mdJqdEq"}
        text="One of my first websites developed with pure HTML and CSS. I wanted to include it in my portfolio as I really like the graphics."
      />
      <SingleProject
        title={"Product Landing Page"}
        picture={Lando}
        whiteBackground
        PictureLeftTop
        greyText
        pictureLink={"https://codepen.io/Alicinetto/full/VweyBgv"}
        text="I love coding landing pages, it's fun and allows you to think also from a marketing perspective: how to convert more leads?"
      />
    </div>
  );
};

export default Work;
