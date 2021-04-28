import React from "react";
import { SectionMargin } from "../styles/layout";
import { Row, Container, Col } from "react-bootstrap";
// import { FlexCenter } from "../styles/layout";

const About = (props) => {
  return (
    <div className="container-fluid" id="about">
      <div className="container" >
        <SectionMargin>
          <Container>
            <Row>
              <Col>
                <img id="profile-img" src="https://api.jessegumtow.com/wp-content/uploads/2021/04/Circle_jg-profile.png" alt="Jesse Gumtow" />
              </Col>
              <Col className="align-items-center">
                <div className="flex-div">
                  <h1>Hello,</h1>
                  <p>
                    I’m Jesse, a human-centered, front end software developer creating
                    elegant solutions to complex problems. My creative personality
                    pushes me to find opportunities to learn and develop tools that
                    improve the lives of others.
                </p>
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
