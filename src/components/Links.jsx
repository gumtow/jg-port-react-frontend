import React from "react";
import axios from "axios";
import { FlexCenter, SectionMargin } from "../styles/layout";
import { Button, Row, Col, Container } from "react-bootstrap";

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
      .get("https://api.jessegumtow.com/wp-json/wp/v2/links")
      .then((res) => setWpLinks(res.data.reverse()))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="container-fluid" id="links">
      <div className="container">
        <SectionMargin>
          <FlexCenter>
            <Container>
              {wpLinks.map((link, i) => (
                <Row>
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
