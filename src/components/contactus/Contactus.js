import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { AiOutlineSend } from "react-icons/ai";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!(formData.name && formData.email && formData.message)) {
      alert("Please fill in all fields!");
      return;
    }

    // 1. Define your WhatsApp number (with country code, no + or -)
    const phoneNumber = "919870886133";

    // 2. Create the message text
    const message = `*New Contact Inquiry*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;

    // 3. Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // 4. Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");

    // Optional: Clear form after sending
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <Zoom left cascade>
                <h1 className="aboutme-heading">Contact me</h1>
              </Zoom>
            </Col>
            <Col md={12} id="contact" className="mt-3">
              <Row>
                <Col md={4}>
                  <div className="contacts-form" data-aos="fade-up">
                    <form>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="username" className="label-class">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-input input-class"
                          id="username"
                          name="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="email" className="label-class">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-input input-class"
                          name="email"
                          id="email"
                          placeholder="Enter email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="userMessage" className="label-class">
                          Message
                        </label>
                        <textarea
                          className="form-message input-class"
                          id="userMessage"
                          name="message"
                          rows="3"
                          placeholder="Enter message"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="submit-btn">
                        <button
                          type="submit"
                          className="submitBtn"
                          onClick={handleSubmit}
                        >
                          Send to WhatsApp
                          <AiOutlineSend className="send-icon" />
                        </button>
                      </div>
                    </form>
                  </div>
                </Col>
                <Col md={7}>
                  <div className="contacts-details">
                    <a
                      href={`mailto:montythakur12345679@gmail.com`}
                      className="personal-details"
                    >
                      <div className="detailsIcon">
                        <FiAtSign />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>
                        montythakur12345679@gmail.com
                      </p>
                    </a>
                    <a
                      href={`tel:+919870886133`}
                      className="personal-details"
                    >
                      <div className="detailsIcon">
                        <FiPhone />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>+91-9870886133</p>
                    </a>
                    <a
                      href="https://goo.gl/maps/YOUR_MAP_LINK_HERE" 
                      target="_blank"
                      rel="noreferrer"
                      className="personal-details"
                    >
                      <div className="personal-details">
                        <div className="detailsIcon">
                          <HiOutlineLocationMarker />
                        </div>
                        <p style={{ color: "#fbd9ad" }}>
                          Gali Number 2, Shramik Kunj, Sector 66, Noida, Uttar Pradesh 201309.
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="contact-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d422.6240814288798!2d77.37523713438884!3d28.60844900293318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce53561bda2c9%3A0xbb16824b41fec2a8!2sNCR%20FLATS%20AND%20PG!5e1!3m2!1sen!2sin!4v1765362503279!5m2!1sen!2sin"
                      frameBorder="0"
                      allowFullScreen=""
                      aria-hidden="false"
                      title="Contact Me"
                      tabIndex="0"
                      loading="lazy"
                      className=""
                    ></iframe>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}