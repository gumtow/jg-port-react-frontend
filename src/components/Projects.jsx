import React from "react";
import axios from "axios";
import { FlexCenter, SectionMargin } from "../styles/layout";
import { Row, Container } from "react-bootstrap";
import Project from "./Project";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = (props) => {
  const [wpProjects, setWpProjects] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://jgapi.dreamhosters.com//wp-json/wp/v2/project")
      .then((res) => setWpProjects(res.data))
      .catch((e) => console.log(e));
  }, []);

  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 0, // offset (in px) from the original trigger point
    delay: 300, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });


  return (
    <div className="container-fluid" id="projects">
      <div className="container">
        <SectionMargin>
          <div id="project-module">
            <FlexCenter>
              <h1 className="title" data-aos="fade-down" data-aos-delay="100">Recent Projects</h1>
            </FlexCenter>
            <Container data-aos="fade-up">
              <Row>
                {wpProjects.map((project, i) => (
                  <Project project={project} i={i} key={i} />
                ))}
              </Row>
            </Container>
          </div>
        </SectionMargin>
      </div>
    </div>
  );
};

export default Projects;
