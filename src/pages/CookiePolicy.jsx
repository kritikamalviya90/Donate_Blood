import { Container } from "react-bootstrap";
import UICard from "../component/UI/UICard";

export default function CookiePolicy() {
  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1 className="text-white hero-title pt-5">Cookie Policy</h1>
        <p className="text-white-50">
          How cookies help improve your experience.
        </p>
      </div>

      <UICard className="p-4">
        <div className="about-card-photo">
          <img
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514"
            alt="Cookies"
          />
        </div>

        <h5 className="text-white">Essential Cookies</h5>
        <p className="text-white-50 small">
          Used for security, session management, and performance.
        </p>

        <h5 className="text-white mt-3">Analytics</h5>
        <p className="text-white-50 small">
          Helps us understand usage patterns to improve features.
        </p>
      </UICard>
    </Container>
  );
}