import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap, FaUniversity, FaUsers } from 'react-icons/fa';
import { SiGoogle, SiApple, SiMicrosoft, SiIbm } from 'react-icons/si';

function Work() {
  return (
    <Container fluid className="work-section" style={{ minHeight: '80vh', color: 'white', paddingTop: '100px' }}>
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12} style={{ textAlign: 'center' }}>
            <h1 className="work-section-header">
              Work Experience
            </h1>
            <div className="work-section-subtitle">
              A journey through my professional and leadership experiences.
            </div>
            <div style={{ marginTop: '50px' }}>
              <VerticalTimeline animate={true} lineColor="#be6adf">
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="Feb 2025 - Present"
                  iconStyle={{ background: '#4285F4', color: '#fff', boxShadow: '0 4px 20px rgba(66,133,244,0.3)' }}
                  contentStyle={{ background: '#e3f0ff', color: '#222', borderLeft: '7px solid #4285F4', boxShadow: '0 2px 16px rgba(66,133,244,0.08)' }}
                  contentArrowStyle={{ borderRight: '7px solid #e3f0ff' }}
                  dateClassName="timeline-date-white"
                  icon={<SiGoogle />}
                >
                  <h3 className="vertical-timeline-element-title" style={{ fontWeight: 'bold', color: '#4285F4' }}>Grow with Google</h3>
                  <h4 className="vertical-timeline-element-subtitle">Participant</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="Dec 2023 - Present"
                  iconStyle={{ background: '#000', color: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
                  contentStyle={{ background: '#f5f5f7', color: '#222', borderLeft: '7px solid #000', boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}
                  contentArrowStyle={{ borderRight: '7px solid #f5f5f7' }}
                  dateClassName="timeline-date-white"
                  icon={<SiApple />}
                >
                  <h3 className="vertical-timeline-element-title" style={{ fontWeight: 'bold', color: '#000' }}>Apple Pathways</h3>
                  <h4 className="vertical-timeline-element-subtitle">Participant</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="Feb 2023 - July 2025"
                  iconStyle={{ background: '#222', color: '#fff', boxShadow: '0 4px 20px rgba(34,34,34,0.3)' }}
                  contentStyle={{ background: '#f0f0f0', color: '#222', borderLeft: '7px solid #222', boxShadow: '0 2px 16px rgba(34,34,34,0.08)' }}
                  contentArrowStyle={{ borderRight: '7px solid #f0f0f0' }}
                  dateClassName="timeline-date-white"
                  icon={<FaBriefcase />}
                >
                  <h3 className="vertical-timeline-element-title" style={{ fontWeight: 'bold', color: '#222' }}>Management Leadership for Tomorrow</h3>
                  <h4 className="vertical-timeline-element-subtitle">Software Engineer Program</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--leadership"
                  date="May 2023 - May 2025"
                  iconStyle={{ background: '#e63946', color: '#fff', boxShadow: '0 4px 20px rgba(230,57,70,0.3)' }}
                  contentStyle={{ background: '#ffeaea', color: '#222', borderLeft: '7px solid #e63946', boxShadow: '0 2px 16px rgba(230,57,70,0.08)' }}
                  contentArrowStyle={{ borderRight: '7px solid #ffeaea' }}
                  dateClassName="timeline-date-white"
                  icon={<FaUsers />}
                >
                  <h3 className="vertical-timeline-element-title" style={{ fontWeight: 'bold', color: '#e63946' }}>ColorStack at Ohio State</h3>
                  <h4 className="vertical-timeline-element-subtitle">Treasurer & Co-founder</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="May 2024 - Aug 2024"
                  iconStyle={{ background: '#0078D4', color: '#fff', boxShadow: '0 4px 20px rgba(0,120,212,0.3)' }}
                  contentStyle={{ background: '#e6f4ff', color: '#222', borderLeft: '7px solid #0078D4', boxShadow: '0 2px 16px rgba(0,120,212,0.08)' }}
                  contentArrowStyle={{ borderRight: '7px solid #e6f4ff' }}
                  dateClassName="timeline-date-white"
                  icon={<SiMicrosoft />}
                >
                  <h3 className="vertical-timeline-element-title" style={{ fontWeight: 'bold', color: '#0078D4' }}>Software Engineer Intern</h3>
                  <h4 className="vertical-timeline-element-subtitle">Microsoft</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="May 2022 - May 2024"
                  iconStyle={{ background: '#bb001b', color: '#fff', boxShadow: '0 4px 20px rgba(187,0,27,0.3)' }}
                  contentStyle={{ background: '#fff0f0', color: '#222', borderLeft: '7px solid #bb001b', boxShadow: '0 2px 16px rgba(187,0,27,0.08)' }}
                  contentArrowStyle={{ borderRight: '7px solid #fff0f0' }}
                  dateClassName="timeline-date-white"
                  icon={<FaUniversity />}
                >
                  <h3 className="vertical-timeline-element-title" style={{ fontWeight: 'bold', color: '#bb001b' }}>The Ohio State University</h3>
                  <h4 className="vertical-timeline-element-subtitle">Student</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="Mar 2023 - Nov 2023"
                  iconStyle={{ background: '#00bfae', color: '#fff', boxShadow: '0 4px 20px rgba(0,191,174,0.3)' }}
                  contentStyle={{ background: '#e0fffa', color: '#222', borderLeft: '7px solid #00bfae', boxShadow: '0 2px 16px rgba(0,191,174,0.08)' }}
                  contentArrowStyle={{ borderRight: '7px solid #e0fffa' }}
                  dateClassName="timeline-date-white"
                  icon={<FaBriefcase />}
                >
                  <h3 className="vertical-timeline-element-title" style={{ fontWeight: 'bold', color: '#00bfae' }}>Intern Development Program</h3>
                  <h4 className="vertical-timeline-element-subtitle">Edlyft</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="June 2023 - Aug 2023"
                  iconStyle={{ background: '#ed1c24', color: '#fff', boxShadow: '0 4px 20px rgba(237,28,36,0.3)' }}
                  contentStyle={{ background: '#fff3f3', color: '#222', borderLeft: '7px solid #ed1c24', boxShadow: '0 2px 16px rgba(237,28,36,0.08)' }}
                  contentArrowStyle={{ borderRight: '7px solid #fff3f3' }}
                  dateClassName="timeline-date-white"
                  icon={<FaBriefcase />}
                >
                  <h3 className="vertical-timeline-element-title" style={{ fontWeight: 'bold', color: '#ed1c24' }}>Software Engineer Intern</h3>
                  <h4 className="vertical-timeline-element-subtitle">Publicis Sapient</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="June 2023 - July 2023"
                  iconStyle={{ background: '#052FAD', color: '#fff', boxShadow: '0 4px 20px rgba(5,47,173,0.3)' }}
                  contentStyle={{ background: '#e3eaff', color: '#222', borderLeft: '7px solid #052FAD', boxShadow: '0 2px 16px rgba(5,47,173,0.08)' }}
                  contentArrowStyle={{ borderRight: '7px solid #e3eaff' }}
                  dateClassName="timeline-date-white"
                  icon={<SiIbm />}
                >
                  <h3 className="vertical-timeline-element-title" style={{ fontWeight: 'bold', color: '#052FAD' }}>Software Developer Track</h3>
                  <h4 className="vertical-timeline-element-subtitle">IBM Accelerate</h4>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Work; 