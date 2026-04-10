import { Container, Form } from "react-bootstrap";
import Button from "../component/UI/Button";
import UICard from "../component/UI/UICard";
import UISectionHeader from "../component/UI/UISectionHeader";

export default function Login() {
    return (
        <Container className="py-5 d-flex justify-content-center  mt-5">
            <UICard className="p-4" style={{ maxWidth: "520px", width: "100%" }}>
                <UISectionHeader
                    title="Login"
                    subtitle="Access your donor and request history."
                />
                <Form>
                    <Form.Label className="text-white">Email</Form.Label>
                    <Form.Control type="email" className="ui-input" placeholder="you@example.com" />
                    <Form.Label className="text-white mt-3">Password</Form.Label>
                    <Form.Control type="password" className="ui-input" placeholder="Enter password" />
                    <Button className="btn-donate w-100 mt-4" route="/">
                        Continue
                    </Button>
                </Form>
            </UICard>
        </Container>
    );
}
