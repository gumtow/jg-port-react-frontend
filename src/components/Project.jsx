import React from "react";
import { ProjectStyle } from "../styles/layout"
import { Row, Col, Container, Button } from "react-bootstrap";

const Project = (props) => {
  const [clicked, setClicked] = React.useState(false);

  if (clicked) {
    return (
      <Col sm={6}>
        <Container onClick={() => setClicked(!clicked)}>
          <div className="project-clicked" >
            <Row>
              <Col lg={12}>
                <p>{props.project.acf.description}</p>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <Button variant="info" target="_blank" href={props.project.acf.project_link} >Project Website</Button>
              </Col>
            </Row>
            <Row className={props.project.acf.project_github ? null : 'hide'}>
              <Col lg={12}>
                <Button variant="light" target="_blank" href={props.project.acf.project_github} >GitHub Link</Button>
              </Col>
            </Row>
          </div>
        </Container>
      </Col>
    );
  } else {
    return (
      <Col lg={6}>
        <Container onClick={() => setClicked(!clicked)}>
          <ProjectStyle bg={props.project.acf.main_image} className="flex-div">
            <Row style={{ "width": "100%" }}>
              <Col lg={12}>

                <h3 style={{ "textAlign": "center" }}>{props.project.title.rendered}</h3>

              </Col>
            </Row>
          </ProjectStyle>
        </Container>
      </Col>
    );
  }
};

export default Project;
