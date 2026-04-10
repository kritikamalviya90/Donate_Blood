import React, { useState } from "react";
import { Container, Row, Col, Form, Card } from "react-bootstrap";
import Button from "../component/UI/Button";
import { FaHandHoldingHeart, FaUser, FaPhone, FaMoneyBillWave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Donate = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        amount: "",
        paymentMethod: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleAmount = (value) => {
        setFormData({
            ...formData,
            amount: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Donation Data:", formData);

        navigate("/payment", {
            state: formData
        });
    };

    return (
        <Container className="py-5">

            {/* Header */}
            <div className="text-center mb-5">
                <h1 className="text-white hero-title animate__animated animate__fadeInDown pt-5">
                    Support Our Mission
                </h1>

                <p className="hero-subtitle animate__animated animate__fadeInUp">
                    Your contribution helps organize blood donation camps and save lives.
                </p>
            </div>

            <Row className="justify-content-center">
                <Col lg={8}>

                    <Card className="p-4 glass shadow-sm animate__animated animate__fadeInUp hospital-card">

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

                                {/* Donation Amount */}
                                <Col md={12}>
                                    <Form.Label>
                                        <FaMoneyBillWave className="me-2" />
                                        Select Donation Amount
                                    </Form.Label>

                                    <div className="d-flex gap-3 flex-wrap mb-2">

                                        <Button
                                            type="button"
                                            className="btn-outline-light"
                                            onClick={() => handleAmount(100)}
                                        >
                                            ₹100
                                        </Button>

                                        <Button
                                            type="button"
                                            className="btn-outline-light"
                                            onClick={() => handleAmount(500)}
                                        >
                                            ₹500
                                        </Button>

                                        <Button
                                            type="button"
                                            className="btn-outline-light"
                                            onClick={() => handleAmount(1000)}
                                        >
                                            ₹1000
                                        </Button>

                                        <Button
                                            type="button"
                                            className="btn-outline-light"
                                            onClick={() => handleAmount(5000)}
                                        >
                                            ₹5000
                                        </Button>

                                    </div>

                                    <Form.Control
                                        type="number"
                                        name="amount"
                                        placeholder="Enter custom amount"
                                        value={formData.amount}
                                        onChange={handleChange}
                                        required
                                        className="bb-search glass"
                                    />
                                </Col>

                                {/* Payment Method */}
                                <Col md={12}>
                                    <Form.Label>Select Payment Method</Form.Label>

                                    <Form.Select
                                        name="paymentMethod"
                                        value={formData.paymentMethod}
                                        onChange={handleChange}
                                        className="bb-search glass"
                                        required
                                    >
                                        <option value="">Choose payment method</option>
                                        <option value="upi">UPI</option>
                                        <option value="card">Debit / Credit Card</option>
                                        <option value="netbanking">Net Banking</option>
                                    </Form.Select>
                                </Col>

                            </Row>

                            {/* Button */}
                            <div className="mt-4">
                                <Button
                                    type="submit"
                                    className="btn-donate w-100 d-flex align-items-center justify-content-center gap-2"
                                >
                                    <FaHandHoldingHeart />
                                    Donate ₹ Now
                                </Button>
                            </div>

                        </Form>

                    </Card>

                </Col>
            </Row>

            {/* Info Section */}
            <div className="mt-5 text-center text-white">
                <h4>Your Contribution Matters</h4>

                <p className="small mt-3">
                    Donations help us organize blood donation camps, maintain blood banks,
                    and provide emergency support to patients in need.
                </p>
            </div>

        </Container>
    );
};

export default Donate;