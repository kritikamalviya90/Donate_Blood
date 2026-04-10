import { Container } from "react-bootstrap";
import UICard from "../component/UI/UICard";

export default function PrivacyPolicy() {
  return (
    <Container className="py-5 mt-5">
      <div className="text-center mb-5">
        <h1 className="text-white hero-title">Privacy Policy</h1>
        <p className="text-white-50">
          How we collect, use, and protect your data.
        </p>
      </div>

      <UICard className="p-4">
        <div className="about-card-photo">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
            alt="Privacy"
          />
        </div>

        <h5 className="text-white">Data Collection</h5>
        <p className="text-white-50 small">
          We collect only what is necessary to connect donors and recipients.
        </p>

        <h5 className="text-white mt-3">Data Usage</h5>
        <p className="text-white-50 small">
          Information is shared only after request confirmation.
        </p>
      </UICard>
    </Container>
  );
}