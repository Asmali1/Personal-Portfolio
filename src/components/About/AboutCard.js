import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohamed Asmali </span>
            <br /> I am a graduate with a Bachelor of Science in Computer Science & Engineering
            at The Ohio State University
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Soccer
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Volunteering
            </li>
            <li className="about-activity">
              <ImPointRight /> Mentoring
            </li>
          </ul>
          

          <p style={{ color: "rgb(155 126 172)" }}>
            "Success is not final, failure is not fatal: It is the courage to continue that counts."{" "}
          </p>
          <footer className="blockquote-footer">Winston S. Churchill</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
