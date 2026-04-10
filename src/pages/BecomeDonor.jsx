import React, { useState } from "react";
import { Container, Row, Col, Form, Card } from "react-bootstrap";
import Button from "../component/UI/Button";
import Bloodgroup from "../component/Dropdown/Bloodgroup";
import {
    FaUser,
    FaPhone,
    FaMapMarkerAlt,
    FaTint,
    FaUserCheck,
    FaHeartbeat,
    FaHandHoldingHeart,
} from "react-icons/fa";

const BecomeDonor = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        age: "",
        gender: "",
        city: "",
        state: "",
        weight: "",
        lastDonation: "",
        bloodGroup: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleBloodGroup = (bg) => {
        setFormData({ ...formData, bloodGroup: bg });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("New Donor:", formData);
        alert("Thank you for registering as a donor ❤️");

        setFormData({
            name: "",
            phone: "",
            email: "",
            age: "",
            gender: "",
            city: "",
            state: "",
            weight: "",
            lastDonation: "",
            bloodGroup: "",
        });
    };

    return (
        <Container className="py-5">

            {/* Header */}
            <div className="text-center mb-5">
                <h1 className="text-white hero-title animate__animated animate__fadeInDown pt-5">
                    Become a Donor
                </h1>
                <p className="hero-subtitle text-white animate__animated animate__fadeInUp">
                    Your blood can save lives. Register today and help patients in need.
                </p>
            </div>

            <Row className="justify-content-center">
                <Col lg={10}>
                    <Card className="p-4 glass shadow-sm animate__animated animate__fadeInUp hospital-card">

                        <Form onSubmit={handleSubmit}>
                            <Row className="g-3">

                                <Col md={6}>
                                    <Form.Label>
                                        <FaUser className="me-2" />
                                        Full Name
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="bb-search glass"
                                    />
                                </Col>

                                <Col md={6}>
                                    <Form.Label>
                                        <FaPhone className="me-2" />
                                        Phone Number
                                    </Form.Label>
                                    <Form.Control
                                        type="tel"
                                        placeholder="Phone number"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="bb-search glass"
                                    />
                                </Col>

                                <Col md={6}>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Email address"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="bb-search glass"
                                    />
                                </Col>

                                <Col md={6}>
                                    <Form.Label>Age</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Age"
                                        name="age"
                                        value={formData.age}
                                        onChange={handleChange}
                                        className="bb-search glass"
                                    />
                                </Col>

                                <Col md={6}>
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Select
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        className="bb-search glass"
                                    >
                                        <option value="">Select Gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </Form.Select>
                                </Col>

                                <Col md={6}>
                                    <Form.Label>
                                        <FaTint className="me-2" />
                                        Blood Group
                                    </Form.Label>
                                    <Bloodgroup
                                        value={formData.bloodGroup}
                                        onChange={handleBloodGroup}
                                    />
                                </Col>

                                <Col md={6}>
                                    <Form.Label>
                                        <FaMapMarkerAlt className="me-2" />
                                        City
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="City"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        className="bb-search glass"
                                    />
                                </Col>

                                <Col md={6}>
                                    <Form.Label>State</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="State"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        className="bb-search glass"
                                    />
                                </Col>

                                <Col md={6}>
                                    <Form.Label>Weight (kg)</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Weight"
                                        name="weight"
                                        value={formData.weight}
                                        onChange={handleChange}
                                        className="bb-search glass"
                                    />
                                </Col>

                                <Col md={6}>
                                    <Form.Label>Last Donation Date</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="lastDonation"
                                        value={formData.lastDonation}
                                        onChange={handleChange}
                                        className="bb-search glass"
                                    />
                                </Col>

                            </Row>

                            <div className="mt-4">
                                <Button
                                    type="submit"
                                    className="btn-donate w-100 d-flex align-items-center justify-content-center gap-2"
                                >
                                    Register as Donor
                                </Button>
                            </div>

                        </Form>

                    </Card>
                </Col>
            </Row>

            {/* 3 Step Process */}
            <div className="mt-5">
                <div className="text-center text-white mb-4">
                    <h3 className="mb-2">Easy 3 Step Donor Process</h3>
                    <p className="text-white-50">Simple, safe, and guided at every step.</p>
                </div>

                <Row className="g-4">

                    <Col md={4}>
                        <div className="process-card glass text-center p-3">
                            <FaUserCheck size={40} className="text-danger mb-3" />
                            <h5 className="text-white">Step 1 – Register</h5>
                            <p className="text-white-50 small">
                                Create your donor profile in minutes with basic details.
                            </p>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className="process-card glass text-center p-3">
                            <FaHeartbeat size={40} className="text-danger mb-3" />
                            <h5 className="text-white">Step 2 – Health Verification</h5>
                            <p className="text-white-50 small">
                                Quick health check ensures safe and eligible donation.
                            </p>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className="process-card glass text-center p-3">
                            <FaHandHoldingHeart size={40} className="text-danger mb-3" />
                            <h5 className="text-white">Step 3 – Donate & Save Lives</h5>
                            <p className="text-white-50 small">
                                Donate blood and help patients in critical need.
                            </p>
                        </div>
                    </Col>

                </Row>
            </div>

            {/* Info */}
            <div className="emergency-bar mt-5 text-center text-white p-5">
                <h4>Why Become a Donor?</h4>
                <p className="small mt-3 ">
                    ❤️ One donation can save up to <strong>3 lives</strong> <br />
                    ⏱ Blood is needed every <strong>2 seconds</strong> <br />
                    🩸 Safe, simple and life-saving
                </p>
            </div>

        </Container>
    );
};

export default BecomeDonor;