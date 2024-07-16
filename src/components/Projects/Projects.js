import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Dkeeper from "../../Assets/Projects/Dkeeper.png";
import Kosem from "../../Assets/Projects/Kosem.png";
import MapMyJourney from "../../Assets/Projects/MapMyJourney.png";
import MushRoom from "../../Assets/Projects/MushRoom.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container className="z-ind">
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row
          style={{
            justifyContent: "center",
            paddingBottom: "10px",
          }}
        >
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MapMyJourney}
              isBlog={false}
              title="Map My Journey"
              description="Familiy and friends interactive map to track and publis the progress in the mission to `catch them all`. Build with react.js, Postgres and Server RESTful API."
              ghLink="https://github.com/EinavFerrera/MapMyJourney.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Kosem}
              isBlog={false}
              title="KOSEM"
              description="Web app to efficiently solve shift assignment problems encompassing over 2^1000 possible states. Implemented highly complex data structures and Network Optimization algorithm to achieve optimal shift assignments. Build with JS and MongoDB."
              ghLink="https://github.com/EinavFerrera/Kosem.git"
              demoLink="https://einavferrera.github.io/EinavFerrera/pages/Kosem.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dkeeper}
              isBlog={false}
              title="D-Keeper"
              description="Powerd with ICP Blockchain Web3, D-Kepper is decentralized application (DApp) inspired by Google Notes. Built using React.js and Motoko, it offers secure and decentralized note-keeping on the blockchain. Experience the future of note-taking with D-Keeper's innovative and secure approach."
              ghLink="https://github.com/EinavFerrera/DKeeper.git"
              demoLink="https://codesandbox.io/s/using-pre-built-react-components-completed-58bxk?fontsize=14&hidenavigation=1&theme=dark&file=/src/index.js"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MushRoom}
              isBlog={false}
              title="Mush-Room"
              description="Mushroom cultivation hub featuring advanced humidity and temperature control with an adaptive algorithm. Engineered using Arduino and powered by C programming, Mush-Room ensures optimal conditions for mushroom growth through precise environmental management."
              ghLink="https://github.com/EinavFerrera/Mushroom-environment-control.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
