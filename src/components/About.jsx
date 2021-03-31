import React from "react";
import { SectionMargin } from "../styles/layout";
// import { FlexCenter } from "../styles/layout";

const About = (props) => {
  return (
    <div className="container-fluid" id="about">
      <div className="container" >
        <SectionMargin>
          <h1>Hello,</h1>
          <p>
            I’m Jesse, a human-centered, front end software developer creating
            elegant solutions to complex problems. My creative personality
            pushes me to find opportunities to learn and develop tools that
            improve the lives of others.
          </p>
        </SectionMargin>
      </div>
    </div>
  );
};

export default About;
