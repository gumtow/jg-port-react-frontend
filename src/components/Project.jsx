import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";

const Project = (props) => {
  const [clicked, setClicked] = React.useState(false);

  if (clicked) {
    return (
      <Col sm={6}>
        <Container onClick={() => setClicked(!clicked)}>
          <div className="project-clicked" style = {{ background: `url(${props.project.acf.project_main_image.url})`, backgroundPosition:'center' }}>
            <Row>
              <Col lg={12}>
              <Button variant="secondary" target="_blank" href={props.project.acf.project_link} >Project Website</Button>
              </Col>
            </Row>
            <Row className={props.project.acf.project_github ? null : 'hide'}>
              <Col lg={12}>
              <Button variant="secondary" target="_blank" href={props.project.acf.project_github} >GitHub Link</Button>
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
