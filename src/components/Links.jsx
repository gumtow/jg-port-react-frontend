import React, { useState } from "react";
import { FlexCenter, SectionMargin } from "../styles/layout";
import { Button, Form } from "react-bootstrap";

const Links = (props) => {
  const [test, setTest] = useState("");
  const [checkbox, setCheckbox] = useState(true);

  const handleSubmit = (e) => {
    console.log(test);
    e.preventDefault();
  };

  return (
    <div className="container-fluid" id="links">
      <div className="container">
        <SectionMargin>
          <FlexCenter>
            <Button variant="success" href="#" block>
              Links
            </Button>
          </FlexCenter>
          <Form
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
          </Form>
        </SectionMargin>
      </div>
    </div>
  );
};

export default Links;
