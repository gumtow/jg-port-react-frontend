import React from "react";
import { SectionMargin, FlexCenter } from "../styles/layout";
import { Row, Container, Col, Image } from "react-bootstrap";

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
        offset: 0, // offset (in px) from the original trigger point
        delay: 500, // values from 0 to 3000, with step 50ms
        duration: 1000, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: true, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });

    return (
        <div className="container-fluid" id="about">
            <Container>
                <SectionMargin>
                    <Container>
                        <FlexCenter>
                            <h1 className="title" data-aos="fade-down" data-aos-delay="100">About Me</h1>
                        </FlexCenter>

                        <Row>

                            <Col md={4} className="align-items-center">
                                <div className="flex-div">
                                    <Image alt="Jesse Gumtow" src="https://api.jessegumtow.com/wp-content/uploads/2021/04/Circle_jg-profile.png" fluid />
                                </div>
                            </Col>
                            <Col md={8} className="align-items-center">
                                <div className="flex-div">
                                    <p>
                                        I have always had a love for making digital things that have a positive effect on the physical world. Whether it was designing brand standards, customizing landing pages in HTML, CSS and Javascript or developing a web app to help foster parents, I have a passion for creating new things and learning in the process.

                                </p>
                                    <p>
                                        Today, I have had the privilege of working for a nonprofit, a university, a start-up and as a freelancer. I am always looking for a position where I can be a part of a team that is developing new and exciting things to make this world a better place.
                                </p>
                                </div>


                            </Col>

                        </Row>
                    </Container>
                </SectionMargin>
            </Container>
        </div>
    )
}

export default About;