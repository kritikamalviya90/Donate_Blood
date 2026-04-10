import { Container, Row, Col } from "react-bootstrap";
import UICard from "../component/UI/UICard";
import Button from "../component/UI/Button";

export default function CSRPartnerships() {
  return (
    <Container className="py-5">

      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="text-white hero-title pt-5">CSR Partnerships</h1>

        <p className="text-white-50">
          Partner with Give Me Life to amplify impact and save more lives.
        </p>
      </div>

      {/* CSR Cards */}
      <Row className="g-4">

        <Col md={6}>
          <UICard className="h-100">

            <div className="about-card-photo">
              <img
                src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb"
                alt="Donation drives"
                className="img-fluid"
              />
            </div>

            <h5 className="text-white mt-3">
              Employee Donation Drives
            </h5>

            <p className="text-white-50 small">
              Organize on-site or regional donation camps with verified medical staff.
            </p>

          </UICard>
        </Col>

        <Col md={6}>
          <UICard className="h-100">

            <div className="about-card-photo">
              <img
                src="https://images.unsplash.com/photo-1538108149393-fbbd81895907"
                alt="Emergency sponsorship"
                className="img-fluid"
              />
            </div>

            <h5 className="text-white mt-3">
              Emergency Sponsorship
            </h5>

            <p className="text-white-50 small">
              Support critical requests and hospital infrastructure improvements.
            </p>

          </UICard>
        </Col>

      </Row>

      {/* CTA Button */}
      <div className="text-center mt-4">
        <Button className="btn-donate" route="/contact-support">
          Start a Partnership
        </Button>
      </div>

    </Container>
  );
}