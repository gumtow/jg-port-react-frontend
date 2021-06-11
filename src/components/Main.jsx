import React from "react";

import Navigation from "./Nav";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Links from "./Links";
import Footer from "./Footer";


const Main = (props) => {


 

  return (
    <div>
      <div className="content-wrap">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Links />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
