import Header from "./Header.js";
import SingleProject from "./SingleProject.js";
import Crostata from "./images/crostata.png";
import Truemed from "./images/truemed3.png";
import ReactUsers from "./images/react_users1.png";
import LandingPage from "./images/lando.png";
import GatsbyBlog from "./images/gatsby_blog.PNG";
import Wedding from "./images/wedding.PNG";

const Work = () => {
  let projectsContent = [
    {
      id: 1,
      title: "Wedding Website",
      picture: Wedding,
      alt: "wedding website",
      link: "https://festive-shirley-2994b6.netlify.app/",
      text: "A wedding website I have designed with Figma and implemented with Gatsby.js. The project includes Lottie animated icons and a countdown built with vanilla javascript.",
    },
    {
      id: 2,
      title: "Gatbsy.js Blog",
      picture: GatsbyBlog,
      alt: "Gatsby blog",
      link: "https://www.aliceiscoding.com/",
      text: "My personal blog where I have fun writing about frontend developement. The website is made with Gatsby.js using Contentful as CMS.",
    },
    {
      id: 3,
      title: "React Users Page",
      picture: ReactUsers,
      alt: "React Users Page",
      link: "https://react-userspage.netlify.app/",
      text: "A small React application fetching users data from an external API via Axios and using useState, useEffect, useParams hooks.",
    },
    {
      id: 4,
      title: "TrueMed Services Page",
      picture: Truemed,
      alt: "TrueMed Services Page",
      link: "https://truemedinc.com/services",
      text: "A page developed with Vue and Vuetify UI library. This project was part of my last traineeship as a front-end developer.",
    },
    {
      id: 5,
      title: "Crostata Cake Website",
      picture: Crostata,
      alt: "Crostata Cake Website",
      link: "https://codepen.io/Alicinetto/full/mdJqdEq",
      text: "One of my first websites developed with pure HTML and CSS. I wanted to include it in my portfolio as I really like the graphics.",
    },
    {
      id: 6,
      title: "Product Landing Page",
      picture: LandingPage,
      alt: "Product Landing Page",
      link: "https://codepen.io/Alicinetto/full/VweyBgv",
      text: "I love coding landing pages, it's fun and allows you to think also from a marketing perspective: how to convert more leads?",
    },
  ];

  return (
    <div>
      <Header title={"Work"} />

      {projectsContent.map((content) => (
        <SingleProject
          key={content.id}
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
