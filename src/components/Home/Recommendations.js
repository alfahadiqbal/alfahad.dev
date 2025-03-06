import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { recommendations } from "./RecommendationData";
import { FaLinkedin } from "react-icons/fa";

function Recommendations() {
  return (
    <Container className="recommendation-carousel-container">
      <Carousel
        className="recommendation-carousel"
        interval={5000}
        indicators={true}
        controls={false}
      >
        {recommendations.map((recommendation, index) => (
          <Carousel.Item key={index}>
            <div className="recommendation-card">
              <div className="recommendation-content">
                <p className="recommendation-text">{recommendation.text}</p>
                <div className="recommendation-author">
                  <h3>{recommendation.name}</h3>
                  <p className="position-text">{recommendation.position}</p>
                  <a
                    href={recommendation.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-link"
                  >
                    <FaLinkedin /> View on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  )
}

export default Recommendations; 