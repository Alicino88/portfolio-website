import NavBar from "./NavBar.js";
import MobileMenu from "./MobileMenu.js";
import React, { useEffect, useState } from "react";

const NavBarContainer = () => {
  // Declare a new state variable with the "useState" Hook
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = "599";

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    /* Inside of a "useEffect" hook add an event listener that updates
       the "width" state variable when the window size changes */
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    /* passing an empty array as the dependencies of the effect will cause this
       effect to only run when the component mounts, and not each time it updates.
       We only want the listener to be added once */

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  /* If the viewport is narrower than the breakpoint render the
     mobile component, else render the desktop component */
  return width < breakpoint ? <MobileMenu /> : <NavBar />;
};

export default NavBarContainer;
