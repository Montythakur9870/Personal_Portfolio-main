import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col md={5}>
            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                My name is <b className="purple">Narendra Singh </b>
                and I am a professional <b className="purple">MERN Stack Developer </b>
                currently working at <b className="purple">Krystal Movies Pvt. Ltd. </b>
                in Noida, India.
                <br />
                <br />
                I hold an <b className="purple">MCA</b> from Galgotias University and have over
                <b className="purple"> 1.3 years of experience</b> in building full-stack web applications.
                <br />
                <br />
                I am proficient in core languages such as &nbsp;
                <b className="purple">
                  JavaScript (ES6+), HTML, CSS, and C/C++, as well as the MERN Stack (React.js, Node.js, Express.js).
                </b>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing products like
                <b className="purple"> Video Streaming Platforms </b> and <b className="purple"> Dashboard Systems </b>
                using <b className="purple">Modern Javascript Libraries</b> like
                <b className="purple"> React.js, Redux, and Tailwind CSS.</b>
              </p>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;