import Navbar from "./Navbar";
import Home from "./Home.js";
import About from "./About.js";
import Work from "./Work.js";
import Contact from "./Contact.js";
import Footer from "./Footer.js";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Content">
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/Work">
          <Work />
        </Route>
        <Route exact path="/Contact">
          <Contact />
        </Route>
      </div>
      <Footer />
    </div>
  );
}

export default App;
