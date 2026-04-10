import { Container } from "react-bootstrap";
import UICard from "../component/UI/UICard";

export default function Accessibility() {
  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1 className="text-white hero-title pt-5">Accessibility</h1>
        <p className="text-white-50">Our commitment to inclusive access.</p>
      </div>

      <UICard className="p-4">
        <div className="about-card-photo">
          <img
            src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb"
            alt="Accessibility"
          />
        </div>

        <h5 className="text-white mt-3">Inclusive Design</h5>
        <p className="text-white-50 small">
          We follow accessibility best practices for contrast, navigation,
          and readability.
        </p>

        <h5 className="text-white mt-3">Support</h5>
        <p className="text-white-50 small">
          Contact support if you face any accessibility challenges.
        </p>
      </UICard>
    </Container>
  );
}