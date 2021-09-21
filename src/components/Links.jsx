import React from "react";
import axios from "axios";
import { FlexCenter, SectionMargin } from "../styles/layout";
import { Button, Row, Col, Container } from "react-bootstrap";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Links = (props) => {
  // const [test, setTest] = useState("");
  // const [checkbox, setCheckbox] = useState(true);

  // const handleSubmit = (e) => {
  //   console.log(test);
  //   e.preventDefault();
  // };


  const [wpLinks, setWpLinks] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://jgapi.dreamhosters.com/wp-json/wp/v2/link")
      .then((res) => setWpLinks(res.data.reverse()))
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
    delay: 250, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });



  return (
    <div className="container-fluid" id="links">
      <div className="container">
        <SectionMargin>
        <FlexCenter>
              <h1 className="title" data-aos="fade-down" data-aos-delay="100">Links</h1>
            </FlexCenter>
          <FlexCenter>
            <Container  data-aos="fade-up">
              {wpLinks.map((link, i) => (
                <Row key={i}>
                  <Col lg={12}>
                    <Button
                      variant="success"
                      target="_blank"
                      href={link.acf.link_url}
                      block
                    >
                      {link.acf.link_text}
                    </Button>
                  </Col>
                </Row>
              ))}
            </Container>
          </FlexCenter>
          {/* <Form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <Form.Group controlId="testFrom">
              <Form.Label>Test Input</Form.Label>
              <Form.Control
                name="test"
                type="text"
                placeholder="This is a test input."
                onChange={(e) => setTest(e.target.value)}
                value={test}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Test Checkbox</Form.Label>
              <Form.Control
                name="checkbox"
                type="checkbox"
                checked={checkbox}
                onChange={(e) => setCheckbox(!checkbox)}
                value={checkbox}
              />
            </Form.Group>
            <input className="submit" type="submit" value="log test" />
          </Form> */}
        </SectionMargin>
      </div>
    </div>
  );
};

export default Links;
