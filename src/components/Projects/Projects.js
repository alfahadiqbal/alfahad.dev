  import React from "react";
  import { Container, Row, Col } from "react-bootstrap";
  import ProjectCard from "./ProjectCards";
  import Particle from "../Particle";
  import qs from "../../Assets/Projects/qs-outreach.png";
  import whoz from "../../Assets/Projects/whoz.png";
  import hera from "../../Assets/Projects/hera.png";
  import intelparcel from "../../Assets/Projects/intelparcel.png";
  import cryptosook from "../../Assets/Projects/cryptosook.jpg";
  import quaestor from "../../Assets/Projects/quaestor.jpg";
  import farminone from "../../Assets/Projects/farminone.png";

  function Projects() {
    return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={intelparcel}
                isBlog={false}
                title="IntelParcel"
                description="IntelParcel is revolutionizing logistics by connecting distributors, operators, merchants, property hosts, couriers, and delivery agents through an innovative platform. IntelParcel provide scalable, cost-effective solutions for e-commerce businesses, enhancing customer experiences with smart lockers, vending machines, and optimized warehouses."
                // ghLink="https://github.com/soumyajit4419/Chatify"
                demoLink="https://intelparcel.com/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={farminone}
                isBlog={false}
                title="Farm In One"
                description="Farm in ONE provides a solution that directly contributes to maximising a primary producer’s yields and profitability and minimizes the producer's labor input, environmental demands and potential damage by automating, managing and recording all farm tasks."
                // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
                demoLink="https://farminone.com.au/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={hera}
                isBlog={false}
                title="Hera Solutions (Associate App)"
                description="Hera is an all-in-one software platform designed to optimize delivery company operations. It streamlines staff scheduling, performance tracking, fleet management, and compliance with features like automated coaching, vehicle photo logs with AI evaluation, and powerful dashboards. Hera ensures efficiency by automating daily tasks, consolidating staff communication, and providing real-time insights into company performance. With upcoming features like inventory management and customizable checklists, Hera is an essential tool for improving productivity, safety, and overall business performance."
                // ghLink="https://github.com/soumyajit4419/Editor.io"
                demoLink="https://www.hera.app/"              
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={qs}
                isBlog={false}
                title="QS Outreach"
                description="QS Outreach is a global initiative by Quacquarelli Symonds (QS) aimed at connecting students with educational opportunities and resources to help them succeed in higher education. The program offers guidance on university selection, scholarship opportunities, and career paths, while also organizing events, workshops, and networking opportunities. QS Outreach helps students gain access to valuable information about studying abroad and making informed decisions about their academic and professional futures, all while fostering connections between students, universities, and industry professionals worldwide."
                // ghLink="https://github.com/soumyajit4419/Plant_AI"
                demoLink="https://outreach.qs.com/v3new"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={whoz}
                isBlog={false}
                title="WHOZ"
                description="Whoz is a social platform that helps people connect in real life, not just online. Users can organize events, meet like-minded people, and grow their network effortlessly. It’s great for organizations, conferences, and communities, offering easy event coordination and interest-based networking. A key feature, Whozcal, lets users share their availability for social or professional meetups, making spontaneous connections simple. With a user-friendly design and mobile access, Whoz makes meeting and engaging with others easier than ever"
                // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
                demoLink="https://whozin.com/"      
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={quaestor}
                isBlog={false}
                title="Quaestor Coin"
                description="Quaestor Solutions was a cross-platform cryptocurrency wallet built with the Electron framework, designed to help users securely manage their digital assets across multiple devices. The app prioritized a user-friendly experience and robust security features, ensuring efficient and accessible cryptocurrency transactions for all."
                // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
                demoLink="https://quaestor.io/"      
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={cryptosook}
                isBlog={false}
                title="CryptoSook - Crypto Currency Exchange"
                description="CryptoSook is a cryptocurrency exchange that allows users to buy and sell crypto quickly. The platform provides deposit options via wire transfer and credit card. The service offers the best crypto-to-crypto rates and supports over 140 cryptocurrencies for exchange."
                // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
                // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
              />
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }

  export default Projects;
