import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,

} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
    Hello. I'm <i><b className="purple">Mohamed Asmali</b></i>, a Junior at The Ohio State University.
    <br />
    <br />My studies have steered me towards languages like 
    <i>
      <b className="purple"> Java, Python, and JavaScript. </b>
    </i>
    Recently, I've also started exploring 
    <i>
      <b className="purple"> React.js </b>
    </i>
    to expand my web development toolkit.
    <br />
    <br />What drives me is the desire to develop impactful technologies and products in the 
    <i>
      <b className="purple"> software domain. </b>
    </i>
    <br />
    <br />Beyond the classroom, I enjoy working with 
    <i>
      <b className="purple"> Python, Java, C, JavaScript, React, HTML, and CSS. </b>
    </i>
    I'm also familiar with tools and platforms such as 
    <i>
      <b className="purple"> AWS, Microsoft Azure, Linux, Unix, Flask, Rest API, and MongoDB. </b>
    </i>
    I'm currently exploring Software Engineer and Product Manager Internship roles for 2024 and would love to connect on LinkedIn.
</p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Asmali1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mohamed-asmali"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
