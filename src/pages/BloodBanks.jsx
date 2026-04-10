import { Container, Row, Col } from "react-bootstrap";
import UICard from "../component/UI/UICard";
import Button from "../component/UI/Button";

export default function BloodBanks() {
  const bloodBanks = [
    "City Blood Bank",
    "Red Cross Center",
    "LifeLine Bank",
  ];

  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1 className="text-white hero-title pt-5">Blood Banks</h1>
        <p className="text-white-50">
          Locate verified blood banks and connect quickly.
        </p>
      </div>

      <Row className="g-4">
        {bloodBanks.map((name) => (
          <Col md={4} key={name}>
            <UICard className="h-100 hospital-card--media">
              <div className="hospital-photo">
                <img
                  src="https://images.unsplash.com/photo-1512678080530-7760d81faba6"
                  alt={name}
                  className="img-fluid"
                />
              </div>

              <div className="hospital-body">
                <h5 className="text-white">{name}</h5>

                <p className="text-white-50 small mb-3">
                  Verified storage • 24x7 emergency dispatch • Component
                  separation available.
                </p>

                <Button className="btn-donate w-100" route="/contact-hospital">
                  Contact
                </Button>
              </div>
            </UICard>
          </Col>
        ))}
      </Row>
    </Container>
  );
}