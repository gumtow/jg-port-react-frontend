import React from "react";
import { SectionMargin } from "../styles/layout";
import { Row, Container, Col, Button } from "react-bootstrap";
// import { FlexCenter } from "../styles/layout";

import AOS from 'aos';
import 'aos/dist/aos.css';

const About = (props) => {

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
    offset: 200, // offset (in px) from the original trigger point
    delay: 500, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

  return (
    <div className="container-fluid" id="about">
      <div className="container" >
        <SectionMargin>
          <Container data-aos="fade-up">
            <Row>
              <Col md={6} className="align-items-center">
                <div className="flex-div">
                  <Row>

                    <h1 id="hello">Hello,</h1>
                    <h5>
                      I’m Jesse, a human-centered, front end software developer creating
                      elegant solutions to complex problems. My creative personality
                      pushes me to find opportunities to learn and develop tools that
                      improve the lives of others.
                </h5>

                  </Row>
                  <Row>
                    <Col md={6} style={{ "padding-left": 0 }}>
                      <Button variant="outline-dark" block>work</Button>
                    </Col>
                    <Col md={6}>
                      <Button variant="outline-info" href="mailto:gumtow@gmail.com" block>Let's Connect</Button>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col md={6} className="align-items-center">
                <div className="flex-div">
                  <img src="https://api.jessegumtow.com/wp-content/uploads/2021/05/JG-3D-nodes.png" alt="Jesse Gumtow" />
                </div>
              </Col>
            </Row>

          </Container>
        </SectionMargin>
      </div>
    </div>
  );
};

export default About;
