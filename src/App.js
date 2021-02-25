import Navbar from "./Navbar";
import Home from "./Home.js";
import About from "./About.js";
import Work from "./Work.js";
import Contact from "./Contact.js";
import Footer from "./Footer.js";
import { Route } from "react-router-dom";

//with the below we can create a theme to override the default one
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";

let theme = createMuiTheme({
  typography: {
    fontFamily: ['"Source Sans Pro"', "Montserrat"].join(","),
    fontWeightLight: 300,
    fontWeightRegular: 400,
  },
});
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
