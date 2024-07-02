import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import CVpdf from "../../Assets/Einav_Ferrera_CV.pdf";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section z-ind">
        <Particle />

        <Row>
          <div className="resume-div">
            <iframe
              className="resume-obj"
              loading="lazy"
              src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGEv4wiax0&#x2F;pZLaBHu0XrN6YNkWqXgHVg&#x2F;view?embed"
              allowfullscreen="allowfullscreen"
              allow="fullscreen"
              title="Resume"
            ></iframe>
          </div>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <a
            href={CVpdf}
            download="Einav Ferrera CV"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              variant="primary"
              style={{ marginTop: "0.5rem", maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              Download CV
            </Button>
          </a>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
