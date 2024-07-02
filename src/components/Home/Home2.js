import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile-picture-zoom.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import SkillSet from "./SkillSet";

function Home2() {
  return (
    <section>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                I am a software and web developer who, after years of project
                management, has <b className="purple"> accidentally</b> fallen
                in love with the worlds of code, brackets, and mid-day beer
                breaks
                <br />
                <br />I am fluent in classics like
                <b className="purple"> C, JavaScript and Java. </b>
                <br />
                <br />
                My fields of interest are building new
                <b className="purple"> Web Technologies and Products</b>,
                especially everything related to{" "}
                <b className="purple">Blockchain.</b>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing
                products with <b className="purple">Node.js</b> and
                <b className="purple">
                  {" "}
                  Modern JavaScript Libraries and Frameworks
                </b>
                &nbsp; like
                <b className="purple"> React.js and Next.js</b>
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid myImg" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <SkillSet />
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/EinavFerrera"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/einav-ferrera/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="mailto:Einavf4@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <IoMailOutline />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
export default Home2;
