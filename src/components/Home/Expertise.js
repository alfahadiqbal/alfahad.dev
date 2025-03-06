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
  SiMongodb
} from "react-icons/si";
import { FaNodeJs, FaAngular, FaReact, FaAws } from "react-icons/fa";

function Expertise() {
  const iconComponents = {
    SiJavascript,
    SiTypescript,
    FaNodeJs,
    SiNestjs,
    SiExpress,
    FaAngular,
    FaReact,
    SiPostgresql,
    SiMysql,
    SiMongodb,
    FaAws
  };

  return (
    <Container fluid className="expertise-section" id="expertise">
      <Container>
        <Row>
          <Col md={12} className="expertise-description">
            <h1 style={{ fontSize: "2.6em" }}>
              MY <span className="purple">EXPERTISE</span>
            </h1>
          </Col>
        </Row>

        {Object.entries(expertise).map(([category, skills]) => (
          <div key={category} className="expertise-category">
            <h2 className="category-title">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h2>
            <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
              {skills.map((skill) => {
                const IconComponent = iconComponents[skill.icon];
                return (
                  <Col xs={4} md={2} className="tech-icons" key={skill.name}>
                    <div className="tech-icon-inner" style={{ color: skill.color }}>
                      <IconComponent />
                      <p className="tech-icon-name">{skill.name}</p>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        ))}
      </Container>
    </Container>
  );
}

export default Expertise; 