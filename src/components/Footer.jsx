import React from "react";
import { SectionMargin, FlexCenter } from "../styles/layout";

const Footer = (props) => {
  return (
    <div className="container-fluid" id="footer">
      <div className="container">
        <SectionMargin>
          <FlexCenter>
            <p>
            Designed &amp; Developed by Jesse Gumtow
            </p>
          </FlexCenter>
        </SectionMargin>
      </div>
    </div>
  );
};

export default Footer;
