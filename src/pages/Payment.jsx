import React, { useEffect, useMemo, useState } from "react";
import { Container, Card, Alert } from "react-bootstrap";
import Button from "../component/UI/Button";
import { useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [storedData, setStoredData] = useState(null);

    const paymentData = useMemo(() => {
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


    const handleProceed = () => {
        if (paymentData) {
            sessionStorage.setItem("paymentData", JSON.stringify(paymentData));
        }
        navigate("/proceed-pay", { state: paymentData });
    };

    // Handle missing data
    if (!paymentData) {
        return (
            <Container className="py-5">
                <Alert variant="danger" className="text-center">
                    Payment details not found. Please start the process again.
                </Alert>

                <div className="text-center mt-3">
                    <Button onClick={() => navigate("/")}>Go Back</Button>
                </div>
            </Container>
        );
    }

    const { name, amount } = paymentData;

    const handlePayment = () => {
        // Payment gateway integration (Razorpay / Stripe etc.)
        console.log("Processing payment...");
    };

    return (
        <Container className="py-5 d-flex justify-content-center">
            <Card
                className="p-4 shadow-lg glass hospital-card"
                style={{ maxWidth: "500px", width: "100%" }}
            >
                <Card.Body className="text-center">

                    <h2 className="mb-4">Payment Details</h2>

                    <div className="mb-3">
                        <strong>Name:</strong>
                        <p className="mb-1">{name}</p>
                    </div>

                    <div className="mb-4">
                        <strong>Amount:</strong>
                        <p className="fs-4 text-success">₹{amount}</p>
                    </div>

                    <Button
                        variant="primary"
                        size="lg"
                        className="w-100"
                        onClick={handleProceed}
                    >
                        Proceed to Payment
                    </Button>

                </Card.Body>
            </Card>
        </Container>
    );
};

export default Payment;
