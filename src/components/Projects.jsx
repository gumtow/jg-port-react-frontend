import React from "react";
import axios from "axios";
import { FlexCenter, SectionMargin } from "../styles/layout";
import { Row, Col, Container } from "react-bootstrap";

const Projects = (props) => {
  const [wpProjects, setWpProjects] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://134.209.114.110/wp-json/wp/v2/project")
      .then((res) => setWpProjects(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="container-fluid" id="projects">
      <div className="container">
        <SectionMargin>
          <div id="project-module">
            <FlexCenter>
              <h3>Recent Projects</h3>
            </FlexCenter>
            <Row>
              {wpProjects.map((project, i) => (
                <Col sm={6} key={i}>
                  <div id="project">
                    <Container>
                      <Row>
                        <Col lg={12}><h4>{project.title.rendered}</h4></Col>
                      </Row>
                      <Row>
                        <Col lg={12}><p>{project.acf.project_description}</p></Col>
                      </Row>
                    </Container>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </SectionMargin>
      </div>
    </div>
  );
};

export default Projects;
