import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
// Order should be: Sudanese Website with prayer, PingPong simulator, Rss News Aggregator, NaturalNumber calculator
// Connect 4 game that is played through a user interface created in MATLAB. The interface allows the player to select a column to drop their game piece into by pressing a key on the keyboard, ranging from 1 to 7. The game continues until one player gets four of their game pieces in a row horizontally, vertically, or diagonally, or until the board is full and the game ends in a draw. The interface updates in real-time to reflect the current state of the game and displays messages to the player indicating whose turn it is, whether the move was successful, and if the game has been won or ended in a draw.


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Sudanese Tournament & Prayer Scheduler"
              description="Designed a dynamic website via AWS S3, showcasing tournament schedules, serving 1,800+ users with event and dining details. Leveraged an Athan API integration to auto-detect user locations, providing real-time prayer times and countdowns"
              ghLink="https://github.com/Asmali1/SudanTournament2023"
              demoLink="http://sudanese.s3-website-us-east-1.amazonaws.com/#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="PinBall Machine Machine"
              description="Developed a pinball machine simulation with added features such as dynamic memory failures, linked list code, file I/O, command line arguments, and playable bonus mode. Utilized structs and linked lists to implement these features, while also incorporating I/O and different memories. Built and maintained the code using makefile targets, with strict adherence to function declarations and visibility rules."
              ghLink="https://github.com/Asmali1/Projects/tree/main/PingPong%20Machine%20with%20IO%2C%20Structs%2C%20LinkedList%2C%20Static%20and%20Dynamic%20Memory"
              demoLink="https://www.youtube.com/watch?v=RM_PRISgrNo&t=1s"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="RSS News Aggregator"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/Asmali1/Projects/tree/main/RSSAggregator"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
{/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
