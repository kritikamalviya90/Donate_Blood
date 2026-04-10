import { Container } from "react-bootstrap";
import UICard from "../component/UI/UICard";

export default function TermsOfService() {
  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1 className="text-white hero-title">Terms of Service</h1>
        <p className="text-white-50">
          Guidelines for using Give Me Life.
        </p>
      </div>

      <UICard className="p-4">
        <div className="about-card-photo">
          <img
            src="https://images.unsplash.com/photo-1551601651-2a8555f1a136"
            alt="Terms"
          />
        </div>

        <h5 className="text-white">User Responsibilities</h5>
        <p className="text-white-50 small">
          Provide accurate information and respect emergency protocols.
        </p>

        <h5 className="text-white mt-3">Service Availability</h5>
        <p className="text-white-50 small">
          We strive for 24/7 availability but cannot guarantee uninterrupted service.
        </p>
      </UICard>
    </Container>
  );
}