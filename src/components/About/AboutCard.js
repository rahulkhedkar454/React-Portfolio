import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Rahul khedkar </span>
            from <span className="purple"> Indore, India.</span>
            <br />
            a passionate Computer Science student and self-taught Full Stack Web Developer. I specialize in building modern, scalable web applications using the MERN stack — MongoDB, Express.js, React.js, and Node.js.

Over the past year, I've worked on real-world projects including a job portal, a portfolio site, and financial apps. I enjoy writing clean code, solving problems, and continuously learning new technologies.



Let’s build something amazing together!
            <br />
            I completed my B.Tech in Computer Science and Engineering from BUIT, Bhopal.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rahul khedkar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
