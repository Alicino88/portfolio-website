import Navbar from "./Navbar";
import Home from "./Home.js";
import About from "./About.js";
import Work from "./Work.js";
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
      </div>
    </div>
  );
}

export default App;
