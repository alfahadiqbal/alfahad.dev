import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { expertise } from "./ExpertiseData";
import {
  SiJavascript,
  SiTypescript,
  SiNestjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiElasticsearch,
  SiElectron,
  SiSequelize,
  SiVuedotjs,
  SiVite,
  SiKoa
} from "react-icons/si";
import { FaNodeJs, FaAngular, FaReact, FaAws } from "react-icons/fa";
import {
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function About() {
  const iconComponents = {
    SiJavascript,
    SiTypescript,
    FaNodeJs,
    SiNestjs,
    SiExpress,
    SiKoa,
    FaAngular,
    FaReact,
    SiVuedotjs,
    SiVite,
    SiElectron,
    SiPostgresql,
    SiMysql,
    SiMongodb,
    SiRedis,
    SiElasticsearch,
    SiSequelize,
    FaAws
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />
              I am proficient in modern web technologies like{" "}
              <i>
                <b className="purple">JavaScript, TypeScript, and Node.js</b>
              </i>
              <br />
              <br />
              My expertise includes building applications with{" "}
              <i>
                <b className="purple">
                  React, Angular, Vue.js, and Electron
                </b>
              </i>{" "}
              using modern tools like{" "}
              <b className="purple">Vite</b>
              <br />
              <br />
              I specialize in backend development with{" "}
              <b className="purple">NestJS, Express, and Koa</b>, and work with databases like{" "}
              <i>
                <b className="purple">
                  PostgreSQL, MySQL, MongoDB, Redis, and Elasticsearch
                </b>
              </i>
              <br />
              <br />
              For data management, I use ORMs like{" "}
              <b className="purple">TypeORM and Sequelize</b>, and deploy on{" "}
              <b className="purple">AWS</b>
            </p>
          </Col>
        </Row>

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <div className="expertise-scroll-container">
          <div className="expertise-scroll-track">
            {expertise.map((skill) => {
              const IconComponent = iconComponents[skill.icon];
              return (
                <div className="tech-icons" key={skill.name}>
                  <div className="tech-icon-inner" style={{ color: skill.color }}>
                    <IconComponent />
                    <p className="tech-icon-name">{skill.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://twitter.com/AlFahadPAK"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/al-fahad/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/alfahadpak"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About; 