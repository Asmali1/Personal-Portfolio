import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import rss_news_aggregator from "../../Assets/Projects/rss-news-aggregator.png";
import connect4 from "../../Assets/Projects/connect4.png";
import sudan from "../../Assets/Projects/sudanese-tournament-2023.png";
import pinball from "../../Assets/Projects/pinball.png";
import codepath from "../../Assets/Projects/codepath-finalist-personal-website.png";

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
        imgPath={sudan}
        isBlog={false}
        title="Sudanese Tournament & Prayer Scheduler"
        description="Designed a dynamic website via AWS S3, showcasing tournament schedules for 1,800+ users with event and dining details. The site offers dual-language support with translations in Arabic and English across the platform. An integrated Athan API auto-detects user locations, providing real-time prayer times, which users can navigate through with next and previous buttons. Additionally, a dynamic countdown adjusts based on the user's current time, automatically updating to reflect the closest upcoming prayer time."
        ghLink="https://github.com/Asmali1/SudanTournament2023"
        demoLink="http://sstohio.com"
    />
</Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pinball}
              isBlog={false}
              title="PinBall Machine Machine"
              description="Developed a pinball machine simulation with added features such as dynamic memory failures, linked list code, file I/O, command line arguments, and playable bonus mode. Utilized structs and linked lists to implement these features, while also incorporating I/O and different memories. Built and maintained the code using makefile targets, with strict adherence to function declarations and visibility rules."
              ghLink="https://github.com/Asmali1/Projects/tree/main/PingPong%20Machine%20with%20IO%2C%20Structs%2C%20LinkedList%2C%20Static%20and%20Dynamic%20Memory"
              demoLink="https://www.youtube.com/watch?v=RM_PRISgrNo&t=1s"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rss_news_aggregator }
              isBlog={false}
              title="RSS News Aggregator"
              description="Created an RSS News Aggregator, handling 500+ XML RSS feeds, and effectively filtering out ad links. Enhanced user navigation by generating concise HTML index pages with categorized links to thousands of news items"
              ghLink="https://github.com/Asmali1/Projects/tree/main/RSSAggregator"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={connect4}
              isBlog={false}
              title="Connect 4"
              description="Connect 4 game that is played through a user interface created in MATLAB. The interface allows the player to select a column to drop their game piece into by pressing a key on the keyboard, ranging from 1 to 7. The game continues until one player gets four of their game pieces in a row horizontally, vertically, or diagonally, or until the board is full and the game ends in a draw. The interface updates in real-time to reflect the current state of the game and displays messages to the player indicating whose turn it is, whether the move was successful, and if the game has been won or ended in a draw."
              ghLink="https://github.com/Asmali1/Projects/blob/main/Connect4"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codepath}
              isBlog={false}
              title="CodePath Finalist Website"
              description="Developed and deployed using AWS, this website offers a switchable dark and light mode, optimized responsiveness for devices up to 820px wide, and a top-positioned navigation bar. Integrated features include quick social media links, a 'Contact Me' section connected to Google Excel for real-time updates, 360° image cubes, detailed profile tabs, and a project showcase with hover descriptions. The site is accentuated with a unique CSS text typing animation"
              ghLink="https://github.com/Asmali1/CodePath-Finalist-Website"
              demoLink="https://asmali1.github.io/CodePath-Finalist-Website/"              
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
