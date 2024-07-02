import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Skill from "./Skill";

function SkillSet() {
  const [hover, setHover] = useState({ hovering: false, id: -1 });

  return (
    <Container>
      <Row>
        <Col
          onMouseEnter={() => setHover({ hovering: true, id: 0 })}
          onMouseLeave={() => setHover({ hovering: false, id: 0 })}
          className="skill-button"
        >
          <Skill type="code" titel="" hover={hover} />
          <h1 className="skill-title">Developer</h1>
          <p className>
            I'm an avid programmer, crafting elegant solutions. From algorithms
            to user-friendly apps, I love the creativity, logic and problem
            solving of coding.
          </p>
        </Col>
        <Col
          onMouseEnter={() => setHover({ hovering: true, id: 1 })}
          onMouseLeave={() => setHover({ hovering: false, id: 1 })}
          className="skill-button"
        >
          <Skill type="auto" titel="" hover={hover} />
          <h1 className="skill-title">Autonomus</h1>
          <p className>
            Fearless learner, embracing challenges with determination. Quick
            learner who lives at the time of the owl, the time for swift
            learning prowl
          </p>
        </Col>
        <Col
          onMouseEnter={() => setHover({ hovering: true, id: 2 })}
          onMouseLeave={() => setHover({ hovering: false, id: 2 })}
          className="skill-button"
        >
          <Skill type="dream" titel="" hover={hover} />
          <h1 className="skill-title">Dreamer</h1>
          <p className>
            Space, Blockchain, drones, and green-tech lover. Bridging technology
            with cosmos, DApps, and sustainability for a brighter future (in an
            era where even the NORAML future exceeds expectations)
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default SkillSet;
