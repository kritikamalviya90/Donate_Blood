import React, { useState } from "react";
import { Container, Row, Col, Form, Card } from "react-bootstrap";
import Button from "../component/UI/Button";
import Bloodgroup from "../component/Dropdown/Bloodgroup";
import { FaUser, FaPhone, FaEnvelope, FaHospital, FaTint } from "react-icons/fa";

const ContactHospital = () => {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    hospital: "",
    bloodGroup: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBloodGroup = (bg) => {
    setFormData({
      ...formData,
      bloodGroup: bg
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Hospital Request:", formData);

    alert("Your request has been sent to the hospital 🏥");

    setFormData({
      name: "",
      phone: "",
      email: "",
      hospital: "",
      bloodGroup: "",
      message: ""
    });
  };

  return (
    <Container className="py-5">

      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="ui-text-white hero-title animate__animated animate__fadeInDown pt-5">
          Contact Hospital
        </h1>

        <p className="hero-subtitle animate__animated animate__fadeInUp">
          Send a blood request or contact a hospital for emergency support.
        </p>
      </div>

      <Row className="justify-content-center">
        <Col lg={8}>

          <Card className="p-4 glass shadow-sm hospital-card animate__animated animate__fadeInUp">

            <Form onSubmit={handleSubmit}>

              <Row className="g-3">

                {/* Name */}
                <Col md={6}>
                  <Form.Label>
                    <FaUser className="me-2" />
                    Full Name
                  </Form.Label>

                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bb-search glass"
                  />
                </Col>

                {/* Phone */}
                <Col md={6}>
                  <Form.Label>
                    <FaPhone className="me-2" />
                    Phone Number
                  </Form.Label>

                  <Form.Control
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bb-search glass"
                  />
                </Col>

                {/* Email */}
                <Col md={6}>
                  <Form.Label>
                    <FaEnvelope className="me-2" />
                    Email
                  </Form.Label>

                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bb-search glass"
                  />
                </Col>

                {/* Hospital */}
                <Col md={6}>
                  <Form.Label>
                    <FaHospital className="me-2" />
                    Select Hospital
                  </Form.Label>

                  <Form.Control
                    type="text"
                    name="hospital"
                    placeholder="Enter hospital name"
                    value={formData.hospital}
                    onChange={handleChange}
                    className="bb-search glass"
                  />
                </Col>

                {/* Blood Group */}
                <Col md={6}>
                  <Form.Label>
                    <FaTint className="me-2" />
                    Blood Group Needed
                  </Form.Label>

                  <Bloodgroup
                    value={formData.bloodGroup}
                    onChange={handleBloodGroup}
                  />
                </Col>

                {/* Message */}
                <Col md={12}>
                  <Form.Label>Message / Request Details</Form.Label>

                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    placeholder="Describe the emergency or blood requirement..."
                    value={formData.message}
                    onChange={handleChange}
                    className="bb-search glass"
                  />
                </Col>

              </Row>

              {/* Submit Button */}
              <div className="mt-4">
                <Button
                  type="submit"
                  className="btn-donate w-100 d-flex align-items-center justify-content-center gap-2"
                >
                  Send Request
                </Button>
              </div>

            </Form>

          </Card>

        </Col>
      </Row>

      {/* Info Section */}
      <div className="mt-5 text-center ui-text-white">
        <h4>Emergency Support</h4>

        <p className="small mt-3">
          Hospitals respond quickly to urgent blood requests.
          Please provide accurate information for faster assistance.
        </p>
      </div>

    </Container>
  );
};

export default ContactHospital;
