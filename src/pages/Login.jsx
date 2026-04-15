import { Container, Form } from "react-bootstrap";
import Button from "../component/UI/Button";
import UICard from "../component/UI/UICard";
import UISectionHeader from "../component/UI/UISectionHeader";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const userData = {
            name: email.split("@")[0],
            email: email
        };

        localStorage.setItem("user", JSON.stringify(userData));
        navigate("/profile");
    };

    return (
        <Container className="py-5 mt-5">

            {/* 🔥 Page Heading */}
            <div className="text-center mb-4">
                <h1 className="text-white fw-bold">Welcome Back</h1>
                <p className="text-light">Login to continue your blood donation journey</p>
            </div>

            <div className="d-flex justify-content-center">
                <UICard className="p-4" style={{ maxWidth: "520px", width: "100%" }}>

                    <UISectionHeader
                        title="Login"
                        subtitle="Access your donor and request history."
                    />

                    <Form onSubmit={handleLogin}>

                        <Form.Label className="text-white">Email</Form.Label>
                        <Form.Control
                            type="email"
                            className="ui-input"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <Form.Label className="text-white mt-3">Password</Form.Label>
                        <Form.Control
                            type="password"
                            className="ui-input"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        {/* ✅ Fixed Button */}
                        <button className="btn ui-btn-primary w-100 mt-4" type="submit">
                            Continue
                        </button>

                    </Form>

                </UICard>
            </div>
        </Container>
    );
}