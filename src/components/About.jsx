import React from "react";
import { SectionMargin } from "../styles/layout";
import { Row, Container, Col, Button } from "react-bootstrap";
// import { FlexCenter } from "../styles/layout";

const About = (props) => {
  return (
    <div className="container-fluid" id="about">
      <div className="container" >
        <SectionMargin>
          <Container>
            <Row>
              <Col md={6} className="align-items-center">
                <div className="flex-div">
                  <h1 id="hello">Hello,</h1>
                  <h5>
                    I’m Jesse, a human-centered, front end software developer creating
                    elegant solutions to complex problems. My creative personality
                    pushes me to find opportunities to learn and develop tools that
                    improve the lives of others.
                </h5>
                </div>
              </Col>
              <Col>
                {/* <img id="profile-img" src="https://api.jessegumtow.com/wp-content/uploads/2021/04/Circle_jg-profile.png" alt="Jesse Gumtow" /> */}
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <Button variant="outline-dark" block>work</Button>
              </Col>
              <Col md={3}>
                <Button variant="outline-info" block>Let's Connect</Button>
              </Col>
            </Row>
          </Container>
        </SectionMargin>
      </div>
    </div>
  );
};

export default About;
