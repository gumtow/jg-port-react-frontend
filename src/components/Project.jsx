import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Project = (props) => {
  const [clicked, setClicked] = React.useState(false);

  if (clicked) {
    return (
      <Col sm={6}>
        <Container onClick={() => setClicked(!clicked)}>
          <div className="project-clicked">
            <Row>
              <Col lg={12}>
                <a href={props.project.acf.project_link}>Go to site</a>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <p>{props.project.acf.project_description}</p>
              </Col>
            </Row>
          </div>
        </Container>
      </Col>
    );
  } else {
    return (
      <Col sm={6}>
        <Container onClick={() => setClicked(!clicked)}>
          <div className="project">
            <Row>
              <Col lg={12}>
                <h4>{props.project.title.rendered}</h4>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <p>{props.project.acf.project_description}</p>
              </Col>
            </Row>
          </div>
        </Container>
      </Col>
    );
  }
};

export default Project;
