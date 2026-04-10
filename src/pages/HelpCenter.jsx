import { Container, Row, Col } from "react-bootstrap";
import UICard from "../component/UI/UICard";

export default function HelpCenter() {
  return (
    <Container className="py-5">

      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="text-white hero-title pt-5">Help Center</h1>
        <p className="text-white-50">
          Find quick answers about donor eligibility, requests, and emergency support.
        </p>
      </div>

      {/* Help Cards */}
      <Row className="g-4">

        <Col md={4}>
          <UICard className="h-100">
            <div className="about-card-photo">
              <img
                src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb"
                alt="Getting started"
              />
            </div>
            <h5 className="text-white mt-3">Getting Started</h5>
            <p className="text-white-50 small">
              Learn how to register, verify, and start donating safely.
            </p>
          </UICard>
        </Col>

        <Col md={4}>
          <UICard className="h-100">
            <div className="about-card-photo">
              <img
                src="https://images.unsplash.com/photo-1580281658629-93e1b6a0e2a2"
                alt="Emergency support"
              />
            </div>
            <h5 className="text-white mt-3">Emergency Support</h5>
            <p className="text-white-50 small">
              Steps to raise an urgent request and contact nearby centers.
            </p>
          </UICard>
        </Col>

        <Col md={4}>
          <UICard className="h-100">
            <div className="about-card-photo">
              <img
                src="https://images.unsplash.com/photo-1538108149393-fbbd81895907"
                alt="Account help"
              />
            </div>
            <h5 className="text-white mt-3">Account Help</h5>
            <p className="text-white-50 small">
              Update your profile, donation history, and notification settings.
            </p>
          </UICard>
        </Col>

      </Row>

    </Container>
  );
}