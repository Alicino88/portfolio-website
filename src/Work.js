import Header from "./Header.js";
import SingleProject from "./SingleProject.js";
import Crostata from "./images/crostata.png";
import Truemed from "./images/truemed3.png";
import ReactUsers from "./images/react_users1.png";
import LandingPage from "./images/lando.png";

const Work = () => {
  let projectsContent = [
    {
      title: "React Users Page",
      picture: ReactUsers,
      alt: "React Users Page",
      link: "https://react-users-page2.netlify.app/",
      text:
        "A small React application fetching users data from an external API via Axios and using useState, useEffect, useParams hooks.",
    },
    {
      title: "TrueMed Services Page",
      picture: Truemed,
      alt: "TrueMed Services Page",
      link: "https://truemedinc.com/services",
      text:
        "A page developed with Vue and Vuetify UI library. This project was part of my last traineeship as a front-end developer.",
    },
    {
      title: "Crostata Cake Website",
      picture: Crostata,
      alt: "Crostata Cake Website",
      link: "https://codepen.io/Alicinetto/full/mdJqdEq",
      text:
        "One of my first websites developed with pure HTML and CSS. I wanted to include it in my portfolio as I really like the graphics.",
    },
    {
      title: "Product Landing Page",
      picture: LandingPage,
      alt: "Product Landing Page",
      link: "https://codepen.io/Alicinetto/full/VweyBgv",
      text:
        "I love coding landing pages, it's fun and allows you to think also from a marketing perspective: how to convert more leads?",
    },
  ];

  return (
    <div>
      <Header title={"Work"} />

      {projectsContent.map((content) => (
        <SingleProject
          title={content.title}
          text={content.text}
          picture={content.picture}
          pictureLink={content.link}
          alt={content.alt}
        />
      ))}
    </div>
  );
};

export default Work;
