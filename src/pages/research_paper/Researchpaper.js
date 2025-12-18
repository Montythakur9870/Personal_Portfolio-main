import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import Particle from "../../Particle";

export default function ResearchPage() {
  return (
    <section className="home-section">
      <Container fluid id="research">
        <Particle />
        <Container className="home-content">
          
          {/* --- Title Section --- */}
          <div
            className="d-flex justify-content-center"
            width="100%"
            style={{ backgroundColor: "#fbd9ad", marginBottom: "50px" }}
          >
            <Zoom left cascade>
              <h1 style={{ color: "rgb(134 61 176)", fontWeight: "bold" }}>
                Research & Publications
              </h1>
            </Zoom>
          </div>

          {/* --- Research Papers List --- */}
          <Container fluid className="certificate-section" id="about">
            <Container>
              <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                
                {/* =================================================================
                   PAPER 1: Waste Water Recycle
                   ================================================================= */}
                <Col md={12} className="mt-4">
                  <Fade bottom duration={2000} distance="20px">
                    <div 
                        className="cert-card" 
                        style={{ 
                            display: "flex",
                            flexWrap: "wrap", 
                            alignItems: "center",
                            padding: "30px",
                            height: "auto",
                            borderLeft: "5px solid #eb90ff" // Accent border since no image
                        }}
                    >
                      {/* Icon Side (Replaces Image) */}
                      <div className="col-md-3 col-12 mb-4 mb-md-0 text-center">
                        {/* SVG Icon for Document */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#eb90ff"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ width: "120px", height: "120px", opacity: "0.8" }}
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                      </div>

                      {/* Content Side */}
                      <div className="col-md-9 col-12 px-md-4 text-start">
                        <h2 style={{ fontWeight: 700, color: "#fbd9ad", fontSize: "1.8rem" }}>
                          A Review Study On Waste Water Recycle
                        </h2>
                        
                        <h5 style={{ color: "#eb90ff", marginTop: "10px", marginBottom: "15px" }}>
                          MCA 2nd-Sem (2022-24)
                        </h5>

                        <p style={{ color: "white", fontSize: "1rem", lineHeight: "1.6" }}>
                          The research paper highlights the potential of automated wastewater treatment plants to overcome limitations associated with human processing. It explores how modern automation can enhance efficiency, safety, and consistency in water management systems.
                        </p>

                        <p style={{ color: "#dedede", fontSize: "0.95rem" }}>
                          <strong>Key Focus:</strong> Automation in filtration, reducing health hazards for workers, and contributing to long-term environmental sustainability.
                        </p>

                        
                      </div>
                    </div>
                  </Fade>
                </Col>

                {/* =================================================================
                   PAPER 2: Tourism Management
                   ================================================================= */}
                <Col md={12} className="mt-5">
                  <Fade bottom duration={2000} distance="20px">
                    <div 
                        className="cert-card" 
                        style={{ 
                            display: "flex",
                            flexWrap: "wrap", 
                            alignItems: "center",
                            padding: "30px",
                            height: "auto",
                            borderLeft: "5px solid #eb90ff"
                        }}
                    >
                      {/* Icon Side (Replaces Image) */}
                      <div className="col-md-3 col-12 mb-4 mb-md-0 text-center">
                        {/* SVG Icon for App/Code */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#eb90ff"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ width: "120px", height: "120px", opacity: "0.8" }}
                        >
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                          <line x1="8" y1="21" x2="16" y2="21"></line>
                          <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                      </div>

                      {/* Content Side */}
                      <div className="col-md-9 col-12 px-md-4 text-start">
                        <h2 style={{ fontWeight: 700, color: "#fbd9ad", fontSize: "1.8rem" }}>
                          Regional Based Tourism Management Application
                        </h2>
                        
                        <h5 style={{ color: "#eb90ff", marginTop: "10px", marginBottom: "15px" }}>
                          MCA 3rd-Sem (2022-24)
                        </h5>

                        <p style={{ color: "white", fontSize: "1rem", lineHeight: "1.6" }}>
                          This project focuses on ecosystem bootstrapping and leveraging the learning curve of lean startups to create a disruptive tourism solution. It integrates agile development partnerships to serve niche regional markets effectively.
                        </p>

                        <p style={{ color: "#dedede", fontSize: "0.95rem" }}>
                           <strong>Key Focus:</strong> Marketing long tail strategies, disruptive innovation in local tourism, and agile application development.
                        </p>

                        
                      </div>
                    </div>
                  </Fade>
                </Col>

              </Row>
            </Container>
          </Container>

        </Container>
      </Container>
    </section>
  );
}