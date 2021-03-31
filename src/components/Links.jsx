import React from "react";
import { FlexCenter, SectionMargin } from "../styles/layout";
import Button from "react-bootstrap/Button";

const Links = (props) => {
  return (
    <div className="container-fluid" id="links">
      <div className="container">
        <SectionMargin>
          <FlexCenter>
            <Button variant="success" href="#" block>
              Links
            </Button>
          </FlexCenter>
        </SectionMargin>
      </div>
    </div>
  );
};

export default Links;
