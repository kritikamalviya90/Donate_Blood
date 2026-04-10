import React, { useEffect, useMemo, useState } from "react";
import { Container, Card, Form } from "react-bootstrap";
import Button from "../component/UI/Button";
import { useLocation, useNavigate } from "react-router-dom";

const ProceedToPay = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const [storedData, setStoredData] = useState(null);

    const data = useMemo(() => {
        return location.state || storedData;
    }, [location.state, storedData]);

    useEffect(() => {
        if (location.state) {
            sessionStorage.setItem("paymentData", JSON.stringify(location.state));
            setStoredData(location.state);
            return;
        }

        const cached = sessionStorage.getItem("paymentData");
        if (cached) {
            try {
                setStoredData(JSON.parse(cached));
            } catch {
                sessionStorage.removeItem("paymentData");
            }
        }
    }, [location.state]);

    if (!data) {
        return (
            <Container className="py-5 text-center">
                <h4>No payment data found</h4>
                <Button onClick={() => navigate("/")}>Go Back</Button>
            </Container>
        );
    }

    const { name, amount } = data;

    const handlePayment = () => {
        alert("Payment Successful!");
        navigate("/success");
    };

    return (
        <Container className="py-5 d-flex justify-content-center">

            <Card className="p-4 shadow hospital-card" style={{ width: "450px" }}>

                <h3 className="text-center mb-4">Complete Payment</h3>

                <div className="mb-3">
                    <strong>Name:</strong>
                    <p>{name}</p>
                </div>

                <div className="mb-3">
                    <strong>Amount:</strong>
                    <p className="text-success fs-4">₹{amount}</p>
                </div>

                <Form>

                    <Form.Group className="mb-3">
                        <Form.Label>Select Payment Method</Form.Label>
                        <Form.Select>
                            <option>UPI</option>
                            <option>Debit Card</option>
                            <option>Credit Card</option>
                            <option>Net Banking</option>
                        </Form.Select>
                    </Form.Group>

                    <Button
                        variant="success"
                        className="w-100"
                        onClick={handlePayment}
                    >
                        Pay Now
                    </Button>

                </Form>

            </Card>

        </Container>
    );
};

export default ProceedToPay;
