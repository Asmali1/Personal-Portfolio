import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiAmazonaws,
  SiMicrosoftazure,
  SiLinux,
  SiGit,
} from "react-icons/si";
import { AiFillGitlab } from "react-icons/ai";
import ReactTooltip from "react-tooltip";

function Toolstack() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <div data-tip="Amazon AWS"><SiAmazonaws /></div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div data-tip="Microsoft Azure"><SiMicrosoftazure /></div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div data-tip="Linux"><SiLinux /></div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div data-tip="Git"><SiGit /></div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div data-tip="Visual Studio Code"><SiVisualstudiocode /></div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div data-tip="GitLab"><AiFillGitlab /></div>
        </Col>
      </Row>
      <ReactTooltip place="top" type="dark" effect="float"/>
    </>
  );
}

export default Toolstack;
