import React, { useState } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { recommendations } from "./RecommendationData";
import { FaLinkedin, FaUserCircle } from "react-icons/fa";

function Recommendations() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <Container fluid className="home-about-section" id="recommendations">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              WHAT <span className="purple">OTHERS SAY</span> ABOUT ME
            </h1>
            <div className="recommendation-carousel-container">
              <Carousel 
                interval={5000} 
                indicators={false}
                controls={false}
                activeIndex={activeIndex}
                onSelect={handleSelect}
                className="recommendation-carousel"
              >
                {recommendations.map((rec) => (
                  <Carousel.Item key={rec.id}>
                    <div className="recommendation-card">
                      <div className="recommendation-content">
                        <i className="recommendation-text">"{rec.text}"</i>
                        <div className="recommendation-author">
                          <b className="purple">{rec.name}</b>
                          <p className="position-text">{rec.position}</p>
                          <a 
                            href={rec.linkedin} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="linkedin-link"
                          >
                            <FaLinkedin /> Connect on LinkedIn
                          </a>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>

              <div className="recommendation-nav">
                {recommendations.map((rec, idx) => (
                  <div 
                    key={rec.id}
                    className={`recommendation-nav-item ${idx === activeIndex ? 'active' : ''}`}
                    onClick={() => handleSelect(idx)}
                    title={`${rec.name} - ${rec.date} - ${rec.relationship}`}
                  >
                    <div className="nav-dot"></div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Recommendations; 