import React, { useState } from "react";
import { Container, Row, Col, Form, Card } from "react-bootstrap";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Button from "../component/UI/Button";

export default function ContactSupport() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Thank you, ${name}! We will contact you shortly.`);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Container className="py-5">

      {/* Page Title */}
      <h1 className="mb-2  text-white pt-5">Contact & Support</h1>

      <p className="mb-5 text-white">
        We’re here to help. Reach out for any questions, emergencies, or feedback.
        Your safety is our priority.
      </p>

      <Row className="g-4">

        {/* Contact Info */}
        <Col md={4}>
          <Card className="p-4 glass h-100 hospital-card">

            <h5 className="mb-3 text-white">Get in Touch</h5>

            <p className="text-white">
              <FaMapMarkerAlt className="me-2 ui-text-accent" />
              123 Blood Drive St, Mumbai, India
            </p>

            <p className="text-white">
              <FaPhone className="me-2 ui-text-accent" />
              +91 98765 43210
            </p>

            <p className="text-white">
              <FaEnvelope className="me-2 ui-text-accent" />
              support@blooddonate.com
            </p>

          </Card>
        </Col>

        {/* Contact Form */}
        <Col md={8}>
          <Card className="p-4 glass hospital-card">

            <h5 className="mb-3 text-white">Send a Message</h5>

            <Form onSubmit={handleSubmit}>

              <Row className="g-3">

                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="text-white">Name</Form.Label>

                    <Form.Control
                      type="text"
                      className="bb-search glass"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="text-white">Email</Form.Label>

                    <Form.Control
                      type="email"
                      className="bb-search glass"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={12}>
                  <Form.Group>
                    <Form.Label className="text-white">Message</Form.Label>

                    <Form.Control
                      as="textarea"
                      rows={5}
                      className="bb-search glass"
                      placeholder="Write your message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>

              </Row>

              <Button
                type="submit"
                className="mt-3 btn-donate d-flex align-items-center gap-2"
              >
                Send Message
              </Button>

            </Form>

          </Card>
        </Col>

      </Row>

      {/* Map Section */}
      <Row className="mt-4">
        <Col>

          <div
            className="glass p-4"
            style={{ height: "300px", borderRadius: "var(--border-radius)" }}
          >

            <h5 className="text-white">Our Location</h5>

            <div
              style={{
                width: "100%",
                height: "90%",
                backgroundColor: "rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "20px",
                borderRadius: "var(--border-radius)",
                textAlign: "center",
              }}
            >
              Map will be displayed here
            </div>

          </div>

        </Col>
      </Row>

    </Container>
  );
}
