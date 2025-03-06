import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Recommendations from "../Home/Recommendations";

function Testimonials() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          What Others <strong className="purple">Say About Me </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here's what my colleagues and clients have to say about working with me.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12}>
            <Recommendations />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Testimonials; 