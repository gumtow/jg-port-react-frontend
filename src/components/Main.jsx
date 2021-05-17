import React from "react";

import Navigation from "./Nav";
import About from "./About";
import Projects from "./Projects";
import Links from "./Links";
import Footer from "./Footer";


const Main = (props) => {



  return (
    <div>
      <div className="content-wrap">
        <Navigation />
        <About />
        <Projects />
        <Links />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
