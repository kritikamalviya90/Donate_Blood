import { Container, Row, Col } from "react-bootstrap";
import UICard from "../component/UI/UICard";

export default function EmergencyGuide() {
  return (
    <Container className="py-5">

      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="text-white hero-title pt-5">Emergency Guide</h1>
        <p className="text-white-50">
          Quick steps to handle critical blood needs effectively.
        </p>
      </div>

      {/* Steps */}
      <Row className="g-4">

        {/* Step 1 */}
        <Col md={4}>
          <UICard className="h-100">
            <div className="about-card-photo">
              <img
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514"
                alt="Create request"
              />
            </div>

            <h5 className="text-white mt-3">Step 1</h5>

            <p className="text-white-50 small">
              Create a request with blood group and location.
            </p>
          </UICard>
        </Col>

        {/* Step 2 */}
        <Col md={4}>
          <UICard className="h-100">
            <div className="about-card-photo">
              <img
                src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb"
                alt="Call support"
              />
            </div>

            <h5 className="text-white mt-3">Step 2</h5>

            <p className="text-white-50 small">
              Call the emergency helpline for immediate support.
            </p>
          </UICard>
        </Col>

        {/* Step 3 */}
        <Col md={4}>
          <UICard className="h-100">
            <div className="about-card-photo">
              <img
                src="https://images.unsplash.com/photo-1485846234645-a62644f84728"
                alt="Confirm donor"
              />
            </div>

            <h5 className="text-white mt-3">Step 3</h5>

            <p className="text-white-50 small">
              Confirm donor arrival and update status.
            </p>
          </UICard>
        </Col>

      </Row>

    </Container>
  );
}