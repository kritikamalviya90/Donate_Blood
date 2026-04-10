import { Container, Form } from "react-bootstrap";
import Button from "../component/UI/Button";
import UICard from "../component/UI/UICard";
import UISectionHeader from "../component/UI/UISectionHeader";

export default function Register() {
    return (
        <Container className="py-5 d-flex justify-content-center">
            <UICard className="p-4" style={{ maxWidth: "520px", width: "100%" }}>
                <UISectionHeader
                    title="Register"
                    subtitle="Create a profile to donate or request blood."
                />
                <Form>
                    <Form.Label className="text-white">Full Name</Form.Label>
                    <Form.Control type="text" className="ui-input" placeholder="Your name" />
                    <Form.Label className="text-white mt-3">Email</Form.Label>
                    <Form.Control type="email" className="ui-input" placeholder="you@example.com" />
                    <Form.Label className="text-white mt-3">Phone</Form.Label>
                    <Form.Control type="tel" className="ui-input" placeholder="+91" />
                    <Button className="btn-donate w-100 mt-4" route="/">
                        Create Account
                    </Button>
                </Form>
            </UICard>
        </Container>
    );
}
