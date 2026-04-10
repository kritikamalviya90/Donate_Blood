import { Container } from "react-bootstrap";
import Button from "../component/UI/Button";
import UICard from "../component/UI/UICard";

export default function Success() {
    return (
        <Container className="py-5 d-flex justify-content-center">
            <UICard className="p-4 text-center" style={{ maxWidth: "520px", width: "100%" }}>
                <h2 className="text-white mb-2">Payment Successful</h2>
                <p className="text-white-50">
                    Your contribution helps save lives. Thank you!
                </p>
                <Button className="btn-donate w-100" route="/">
                    Back to Home
                </Button>
            </UICard>
        </Container>
    );
}
