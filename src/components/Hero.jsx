import React from "react";
import { SectionMargin } from "../styles/layout";
import { Row, Container, Col, Button } from "react-bootstrap";
// import { FlexCenter } from "../styles/layout";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = (props) => {

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
    delay: 500, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

  });

  return (
    <div className="container-fluid" id="hero">
      <div className="container" >
        <SectionMargin>
          <Container>
            <Row>
              <Col md={6} className="align-items-center d-none d-sm-none d-md-none d-lg-block">
                <div className="flex-div">
                  <img src="https://jgapi.dreamhosters.com/wp-content/uploads/2021/09/JG-3D-nodes.png" alt="Jesse Gumtow" data-aos="fade-down" />
                </div>
              </Col>
              <Col lg={6} className="align-items-center">
                <div className="flex-div">
                  <Row>

                    <Col>
                      <h3 id="hello" data-aos="fade-up" data-aos-delay="100">Hey there, my name is</h3>
                      <h1 id="name" data-aos="fade-up" data-aos-delay="200">Jesse Gumtow.</h1>
                      <h1 id="tagline" data-aos="fade-up" data-aos-delay="300">Developer, Designer &amp; Dad.</h1>
                      <h5 id="intro" data-aos="fade-up" data-aos-delay="400">
                      I am an Austin-based frontend developer, graphic designer, and dad of two wonderful boys. I love to make beautiful things for the web. 
                </h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6}>
                      <Button id="connect" variant="outline-info" href="mailto:gumtow@gmail.com" data-aos="fade-up" data-aos-delay="800" block>Let's Connect</Button>
                    </Col>
                  </Row>
                </div>
              </Col>

            </Row>

          </Container>
        </SectionMargin>
      </div>
    </div>
  );
};

export default Hero;
