import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiJava,
  DiHtml5,
  DiCss3
} from "react-icons/di";
import {
  SiFlask,
  SiMongodb
} from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";
import ReactTooltip from "react-tooltip";

function Techstack() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <div data-tip="Python"><DiPython /></div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div data-tip="Java"><DiJava /></div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div data-tip="C++"><CgCPlusPlus /></div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div data-tip="JavaScript"><DiJavascript1 /></div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div data-tip="React"><DiReact /></div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div data-tip="HTML5"><DiHtml5 /></div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div data-tip="CSS3"><DiCss3 /></div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div data-tip="Flask"><SiFlask /></div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div data-tip="MongoDB"><SiMongodb /></div>
        </Col>
      </Row>
      <ReactTooltip place="top" type="dark" effect="float"/>
    </>
  );
}

export default Techstack;
