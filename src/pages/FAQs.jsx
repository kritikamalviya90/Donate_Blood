import { Container, Row, Col } from "react-bootstrap";
import UICard from "../component/UI/UICard";

export default function FAQs() {
  return (
    <Container className="py-5">

      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="text-white hero-title pt-5">FAQs</h1>
        <p className="text-white-50">
          Common questions about donating blood and using the platform.
        </p>
      </div>

      <Row className="g-4">

        {/* Question 1 */}
        <Col md={6}>
          <UICard className="h-100">
            <div className="about-card-photo">
              <img
                src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb"
                alt="Eligibility"
              />
            </div>

            <h5 className="text-white mt-3">Who can donate?</h5>

            <p className="text-white-50 small">
              Age, weight, and health requirements vary by region. Check eligibility.
            </p>
          </UICard>
        </Col>

        {/* Question 2 */}
        <Col md={6}>
          <UICard className="h-100">
            <div className="about-card-photo">
              <img
                src="https://images.unsplash.com/photo-1580281658629-93e1b6a0e2a2"
                alt="Frequency"
              />
            </div>

            <h5 className="text-white mt-3">How often can I donate?</h5>

            <p className="text-white-50 small">
              Typically every 3 months for whole blood. Follow local guidelines.
            </p>
          </UICard>
        </Col>

        {/* Question 3 */}
        <Col md={6}>
          <UICard className="h-100">
            <div className="about-card-photo">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
                alt="Security"
              />
            </div>

            <h5 className="text-white mt-3">Is my data secure?</h5>

            <p className="text-white-50 small">
              We share donor data only after confirmation with hospitals.
            </p>
          </UICard>
        </Col>

        {/* Question 4 */}
        <Col md={6}>
          <UICard className="h-100">
            <div className="about-card-photo">
              <img
                src="https://images.unsplash.com/photo-1538108149393-fbbd81895907"
                alt="Emergency"
              />
            </div>

            <h5 className="text-white mt-3">How do emergency requests work?</h5>

            <p className="text-white-50 small">
              Urgent requests trigger fast alerts to nearby compatible donors.
            </p>
          </UICard>
        </Col>

      </Row>

    </Container>
  );
}