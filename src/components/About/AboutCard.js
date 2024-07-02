import React from "react";
import Card from "react-bootstrap/Card";
import { BsStars } from "react-icons/bs";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Einav Ferrera </span>
            from <span className="purple"> Tel-Aviv, Israel.</span>
            <br />
            I am currently employed as a Aero-Aviation Product Manager,
            Implementing my wide knowladge as a UAV pilot.
            <br />
            I have completed BS.c at Computer Sience at The Open University of
            Israel after falling in love with algorithem.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <BsStars /> Wood craft
            </li>
            <li className="about-activity">
              <BsStars /> Bread making
            </li>
            <li className="about-activity">
              <BsStars /> Travelling
            </li>
          </ul>

          <p style={{ color: "#ECB176" }}>
            "Curiosity finds worth in all things."{" "}
          </p>
          <footer className="blockquote-footer">Einav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
