import React from "react";
import Particle from "../../Particle";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import { FaCode } from "react-icons/fa";

// IMPORT YOUR IMAGES HERE
import khiladiindia from "../../images/khiladi-india.png";
import kmiitt from "../../images/kmiitt.png";
import bruchiclub from "../../images/bruchi-club.png";
import ebox from "../../images/ebox-cinema.png"; 
import indiavictory from "../../images/iv.png";
import interior from "../../images/vt-interior.png";
import crockery from "../../images/crockery.png";
import ncrlocal from "../../images/ncr-local.png";
import ramanuuj from "../../images/ramanuuj.png";
import ayurdham from "../../images/ayurdham.png";
import baisoya from "../../images/baisoya.png";
import italianchaska from "../../images/italianchaska.png";
import montychatbot from "../../images/montychatbot.png";
import km from "../../images/km.png";
import mypp from "../../images/myportfolio.png";

export default function ProjectPage() {
  // DATA LIST FOR ALL PROJECTS
  const projectList = [
    // --- MERN STACK PROJECTS ---
    {
      id: 1,
      name: "Khiladi India",
      desc: "A sports-focused multi-vendor web application. Features include vendor management, job postings, and interactive infographic sections for data visualization.",
      lang: "MERN Stack (MongoDB, Express, React, Node)",
      link: "#",
      image: khiladiindia, 
    },
    {
      id: 2,
      name: "Indian Victory (News Portal)",
      desc: "A dynamic newspaper website similar to Dainik Jagran. Features real-time news updates, categorical news distribution, and a CMS for reporters to publish articles.",
      lang: "MERN Stack",
      link: "#",
      image: indiavictory,
    },
    {
      id: 3,
      name: "Ebox Cinema",
      desc: "Full-stack movie ticket booking application. Features browsing movies, selecting showtimes/seats, and secure user authentication.",
      lang: "MERN Stack, Tailwind CSS",
      link: "https://www.eboxcinema.com/",
      image: ebox,
    },
    {
      id: 4,
      name: "KMIITT (Live Industrial)",
      desc: "Educational platform built with TypeScript. Managed Frontend, Backend, and Server. Integrated Rich Text Editors and complex CRUD operations.",
      lang: "MERN Stack, TypeScript",
      link: "#",
      image: kmiitt,
    },
    {
      id: 5,
      name: "Bruchi Video Stream",
      desc: "A dynamic video streaming platform similar to YouTube. Includes a powerful Admin Dashboard for managing video content and users.",
      lang: "MERN Stack, Redux",
      link: "#",
      image: bruchiclub,
    },
    {
      id: 6,
      name: "Monty_AI Assistant",
      desc: "An AI-powered chat assistant. Integrated with AI APIs to provide real-time responses and intelligent interaction.",
      lang: "MERN Stack, OpenAI API",
      link: "#",
      image: montychatbot,
    },
    {
      id: 7,
      name: "NCR Local",
      desc: "A local directory platform. Engineered to handle search functionality and listing management for services in the NCR region.",
      lang: "MERN Stack",
      link: "#",
      image: ncrlocal,
    },
    {
      id: 8,
      name: "Krystal Movies",
      desc: "Core digital platform development. Optimized code performance, managed database integrations, and handled UI functionalities.",
      lang: "React.js, Node.js",
      link: "#",
      image: km,
    },
    
    // --- HTML / CSS PROJECTS ---
    {
      id: 9,
      name: "Ayurdham",
      desc: "A holistic Ayurvedic healthcare website featuring treatment details, wellness plans, and appointment scheduling.",
      lang: "HTML, CSS, JavaScript",
      link: "#",
      image: ayurdham,
    },
    {
      id: 10,
      name: "Ramanuuj Hospital",
      desc: "A dedicated hospital website for Dr. Ramanuuj. Features include doctor profiles, hospital service details, and appointment booking inquiry forms.",
      lang: "HTML, CSS, JavaScript",
      link: "#",
      image: ramanuuj,
    },
    {
      id: 11,
      name: "Kitchen Crockery",
      desc: "An e-commerce style product showcase for kitchenware. Features dynamic product sliders and a premium gold-themed UI.",
      lang: "HTML, CSS, JavaScript",
      link: "#",
      image: crockery,
    },
    {
      id: 12,
      name: "Italian Chaska",
      desc: "A visually appealing restaurant and food service website designed to showcase menus and services dynamically.",
      lang: "HTML, CSS, JavaScript",
      link: "#",
      image: italianchaska,
    },
    {
      id: 13,
      name: "Iconic Interior",
      desc: "A portfolio website for an interior design business, featuring image galleries and service listings.",
      lang: "HTML, CSS, JavaScript",
      link: "#",
      image: interior,
    },
    {
      id: 14,
      name: "Dr. Baisoya",
      desc: "Professional medical website focusing on responsive design, appointment forms, and user-friendly interfaces.",
      lang: "HTML, CSS, JavaScript",
      link: "#",
      image: baisoya,
    },
    {
      id: 15,
      name: "Personal Portfolio",
      desc: "Welcome to my personal portfolio. Explore my work, skills, and achievements in a concise and visually appealing format.",
      lang: "React, HTML, CSS, SCSS",
      link: "#",
      image: mypp,
    },
  ];

  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <div
            className="d-flex justify-content-center"
            width="100%"
            style={{ backgroundColor: "#fbd9ad" }}
          >
            <Zoom left cascade>
              <h1 style={{ color: "rgb(134 61 176" }}>PROJECTS</h1>
            </Zoom>
          </div>

          <Container fluid className="certificate-section" id="about">
            <Container>
              <Row>
                <Col md={12} className="mt-5">
                  <Row className="g-5">
                    {/* MAPPING THROUGH PROJECT LIST */}
                    {projectList.map((project) => (
                      <Col key={project.id} md={3} className="col-sm-12 col-md-4">
                        <Fade bottom>
                          <div
                            className="singleProject"
                            style={{
                              backgroundColor: "rgb(142 70 186 / 31%)",
                              border: "1px solid",
                              height: "100%", 
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-between"
                            }}
                          >
                            <div className="projectContent">
                              <h5 style={{ color: "#fbd9ad" }}>{project.name}</h5>
                              <img src={project.image} alt={project.name} />
                              <div className="project--showcaseBtn">
                                <a
                                  href={project.link}
                                  target="_blank"
                                  rel="noreferrer"
                                  className={"iconBtn"}
                                  aria-labelledby={`code`}
                                >
                                  <FaCode
                                    id={`code`}
                                    className={"icon"}
                                    aria-label="Code"
                                  />
                                </a>
                              </div>
                            </div>
                            <h6>
                              <p
                                className="project--desc"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                  fontSize: "14px",
                                }}
                              >
                                {project.desc}
                              </p>
                            </h6>
                            <div
                              className="project--lang"
                              style={{
                                background: "#fbd9ad",
                                color: "#b061df",
                                fontWeight: 600,
                              }}
                            >
                              {project.lang}
                            </div>
                          </div>
                        </Fade>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </Container>
          </Container>
        </Container>
      </Container>
    </section>
  );
}