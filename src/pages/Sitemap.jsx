import { Container, Row, Col } from "react-bootstrap";
import UICard from "../component/UI/UICard";

export default function Sitemap() {
  return (
    <Container className="py-5 mt-5">
      <div className="text-center mb-5">
        <h1 className="text-white hero-title">Sitemap</h1>
        <p className="text-white-50">
          Quick navigation to all key pages.
        </p>
      </div>

      <Row className="g-4">

        <Col md={6}>
          <UICard className="h-100">
            <div className="about-card-photo">
              <img
                src="https://images.unsplash.com/photo-1538108149393-fbbd81895907"
                alt="Platform map"
              />
            </div>

            <h5 className="text-white">Platform</h5>
            <p className="text-white-50 small">
              Home, Find Blood, Become a Donor, Hospitals, Blood Banks
            </p>
          </UICard>
        </Col>

        <Col md={6}>
          <UICard className="h-100">
            <div className="about-card-photo">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
                alt="Legal map"
              />
            </div>

            <h5 className="text-white">Support & Legal</h5>
            <p className="text-white-50 small">
              Help Center, FAQs, Privacy, Terms, Cookies
            </p>
          </UICard>
        </Col>

      </Row>
    </Container>
  );
}