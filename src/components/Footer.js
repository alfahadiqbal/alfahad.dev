import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>
            <a href="mailto:contact@alfahad.dev" className="footer-email">
              <MdEmail style={{ marginRight: "5px" }} />
              contact@alfahad.dev
            </a>
          </h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Al Fahad</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {/* <li className="social-icons">
              <a
                href="https://github.com/alfahadiqbal"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li> */}
            <li className="social-icons">
              <a
                href="https://twitter.com/AlFahadPAK"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/al-fahad/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/alfahadpak"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
