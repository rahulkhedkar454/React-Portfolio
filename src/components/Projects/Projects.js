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
import studyforge from "../../Assets/Projects/studyforge.png";
import savingsxpert from "../../Assets/Projects/savingsxpert.png"

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
              title="SavingsXpert"
              description="A personal finance tracker built with Next.js and PostgreSQL. It helps users manage daily expenses, categorize transactions, and visualize financial trends using charts and graphs. Authentication is handled with Clerk."
              ghLink="https://github.com/rahulkhedkar454/savingsxpert_web"
              demoLink="https://savingsxpert-web.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="AI Course Generator"
              description="An intelligent web app that generates personalized learning paths using AI. Users can input their goals or topics, and the app builds a full course curriculum with modules, descriptions, and resources. Built with OpenAI API integration and React."
              ghLink="https://github.com/rahulkhedkar454/AI-Study-Material-Generator"
              demoLink="https://studyforge-dun.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Job Portal"
              description="A full-featured MERN job portal that supports role-based login for users and recruiters. It includes advanced filters, job search, and resume upload functionality. Admins can manage users, and recruiters can post and track job listings."
              ghLink="https://github.com/rahulkhedkar454/jobportal_web_app"
              demoLink="https://jobportal-web-app.onrender.com/"              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
