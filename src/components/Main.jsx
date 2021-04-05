import React from "react";

import About from "./About";
import Projects from "./Projects";
import Links from "./Links";
import Footer from "./Footer";

const Main = (props) => {
  return (
    <div>
      <About />
      <Projects />
      <Links />
      <Footer />
    </div>
  );
};

export default Main;
