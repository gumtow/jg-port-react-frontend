import React from "react";
import axios from "axios";

import { SectionMargin, FlexCenter } from "../styles/layout";
import { Row, Container, Col, Image } from "react-bootstrap";

import AOS from 'aos';
import 'aos/dist/aos.css';

const About = (props) => {

    const [wpPage, setWpPage] = React.useState({});

    React.useEffect(() => {
        axios
            .get("https://jgapi.dreamhosters.com/wp-json/wp/v2/pages/11")
            .then((res) => setWpPage(res.data))
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
        delay: 500, // values from 0 to 3000, with step 50ms
        duration: 1000, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: true, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });

    if (wpPage) {
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
                                        <Image alt="Jesse Gumtow" src="https://jgapi.dreamhosters.com/wp-content/uploads/2021/09/Circle_jg-profile.png" fluid />
                                    </div>
                                </Col>
                                <Col md={8} className="align-items-center">
                                    <div className="flex-div">
                                        <div dangerouslySetInnerHTML={{ __html: wpPage.content ?  wpPage.content.rendered : "loading..."}}/>
                                    </div>


                                </Col>

                            </Row>
                        </Container>
                    </SectionMargin>
                </Container>
            </div>
        )
    } else {
        return(
            <p>loading...</p>
        )
    }

}

export default About;