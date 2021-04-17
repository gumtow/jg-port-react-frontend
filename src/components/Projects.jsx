import React from "react";
import axios from "axios";
import { FlexCenter, SectionMargin } from "../styles/layout";
import { Row, Container } from "react-bootstrap";
import Project from "./Project";

const Projects = (props) => {
  const [wpProjects, setWpProjects] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://api.jessegumtow.com/wp-json/wp/v2/project")
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
            <FlexCenter>
              <p>Recent Projects</p>
            </FlexCenter>
            <Container>
              <Row>
                {wpProjects.map((project, i) => (
                  <Project project={project} i={i} key={i} />
                ))}
              </Row>
            </Container>
          </div>
        </SectionMargin>
      </div>
    </div>
  );
};

export default Projects;
