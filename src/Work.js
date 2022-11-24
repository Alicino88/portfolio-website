import Header from "./Header.js";
import SingleProject from "./SingleProject.js";
import Crostata from "./images/crostata.png";
import Truemed from "./images/truemed3.png";
import ReactUsers from "./images/react_users1.png";
import LandingPage from "./images/lando.png";
import GatsbyBlog from "./images/gatsby_blog.PNG";
import Wedding from "./images/wedding.PNG";
import ToDo from "./images/react-todo.png";
import FoodApp from "./images/react-food-app.png";
import ExpenseTracker from "./images/react-expense-tracker.png";
import Quiz from "./images/quiz.png";
const Work = () => {
  let projectsContent = [
    {
      id: 1,
      title: "React & TypeScript Quiz Game",
      picture: Quiz,
      alt: "React & TypeScript Quiz Game",
      link: "https://tourmaline-dolphin-129e5b.netlify.app/",
      text: "A fun project I have built using React, TypeScript, and styled-components. Trivia API is used to fetch the questions and error handling is implemented. Try it!",
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
      title: "React ToDo App",
      picture: ToDo,
      alt: "React ToDo App",
      link: "https://quiet-malasada-097a4e.netlify.app/",
      text: "A todo app I have made with React and Bootstrap. The user can add, filter and delete todos. The todos are sorted by closest due date and the forms have validation logic implemented.",
    },
    {
      id: 4,
      title: "React Food Order App",
      picture: FoodApp,
      alt: "React Food Order App",
      link: "https://jazzy-tulumba-bd8279.netlify.app/",
      text: "A food app I have coded while following an advanced React course. The user can add food items to the cart, visualize the cart and remove/add items from there. useReducer is used to implement the cart logic.",
    },

    {
      id: 5,
      title: "Gatsby.js Wedding Website",
      picture: Wedding,
      alt: "wedding website",
      link: "https://festive-shirley-2994b6.netlify.app/",
      text: "A wedding website I have designed with Figma and implemented with Gatsby.js. The project includes Lottie animated icons and a countdown built with vanilla javascript.",
    },
    {
      id: 6,
      title: "React Expense Tracker",
      picture: ExpenseTracker,
      alt: "React Expense Tracker",
      link: "https://singular-tarsier-0c0c98.netlify.app/",
      text: "A small app built with React that allows you to enter your expenses and filter them by year. The form inside the app has validation implemented and useContext is being used to toggle between dark and light theme.",
    },

    {
      id: 7,
      title: "React Users Page",
      picture: ReactUsers,
      alt: "React Users Page",
      link: "https://react-userspage.netlify.app/",
      text: "A small React application fetching users data from an external API via Axios and using useState, useEffect, useParams hooks.",
    },
    {
      id: 8,
      title: "TrueMed Services Page",
      picture: Truemed,
      alt: "TrueMed Services Page",
      link: "https://truemedinc.com/services",
      text: "A page developed with Vue and Vuetify UI library. This project was part of my last traineeship as a front-end developer.",
    },
    {
      id: 9,
      title: "Crostata Cake Website",
      picture: Crostata,
      alt: "Crostata Cake Website",
      link: "https://codepen.io/Alicinetto/full/mdJqdEq",
      text: "One of my first websites developed with pure HTML and CSS. I wanted to include it in my portfolio as I really like the graphics.",
    },
    {
      id: 10,
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
