import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../UI/Button";
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import Logo from "../UI/Logo";
import encryptionBadge from "../../assets/encryptionBadge.png";
import verifiedBadge from "../../assets/verifiedBadge.png";
import governmentBadge from "../../assets/governmentBadge.png";

const Footer = () => {
  return (
    <footer className="footer text-white pt-5 position-relative">
      <div className="emergency-bar text-center py-2 mb-3">
        🚨 Active Emergency Requests Near You
      </div>
      <Container>
        <Row className="mb-4">
          <Col lg={3} md={6} className="mb-4">
            <div className="footer-logo mb-2">
              <Logo />
            </div>
            <p className="mission">Connecting donors and patients in real-time to save lives faster.</p>
            <p className="emergency-tagline">🩸 Every Drop Counts.</p>
            <p className="trust-tagline">Secure • Verified • Life-Saving</p>
          </Col>
          <Col lg={2} md={6} className="mb-4">
            <h5 className="footer-title">Platform</h5>
            <ul className="footer-links list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/find-blood">Find Blood</Link></li>
              <li><Link to="/become-donor">Become a Donor</Link></li>
              <li><Link to="/hospitals">Hospitals</Link></li>
              <li><Link to="/blood-banks">Blood Banks</Link></li>
              <li><Link to="/csr-partnerships">CSR Partnerships</Link></li>
            </ul>
          </Col>
          <Col lg={2} md={6} className="mb-4">
            <h5 className="footer-title">Support</h5>
            <ul className="footer-links list-unstyled">
              <li><Link to="/help-center">Help Center</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
              <li><Link to="/contact-support">Contact Support</Link></li>
              <li><Link to="/report-abuse">Report Abuse</Link></li>
              <li><Link to="/emergency-guide">Emergency Guide</Link></li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="mb-4">
            <h5 className="footer-title">Contact</h5>
            <p>Email: support@givemelife.org</p>
            <p>Emergency: +91 98765 43210</p>
            <p>Location: Mumbai, MH</p>
            <div className="social-icons d-flex gap-2 mt-2">
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaFacebook /></a>
            </div>
          </Col>
          <Col lg={2} md={6} className="mb-4 ">
            <h5 className="footer-title">Trust</h5>
            <div className="d-flex flex-row gap-2 justify-content-center ">
              <img src={encryptionBadge} alt="AES-256 Encryption" style={{
                height: "40px",
                borderRadius: "100%",
                width: "40px",
                cursor: "pointer"
              }} />
              <img src={verifiedBadge} alt="Verified Hospitals" style={{
                height: "40px",
                width: "40px",
                cursor: "pointer",
                borderRadius: "100%",
              }} />
              <img src={governmentBadge} alt="Government Compliance" style={{
                height: "40px",
                width: "40px",
                cursor: "pointer",
                borderRadius: "100%",
              }} />
            </div>
            <p className="small mt-2">All data protected with AES-256 encryption. Verified user system.</p>
          </Col>
        </Row>
        <Row className="justify-content-center mb-4">
          <Col lg={6} className="text-center">
            <div className="donation-card p-3 glass d-inline-block">
              <p>🩸 “Support the Mission”</p>
              <p className="small">Optional ₹50 donation helps maintain emergency infrastructure.</p>
              <Button className="btn-donate" route="/donate">Donate ₹</Button>
            </div>
          </Col>
        </Row>
        <Row className="pt-3 border-top border-secondary">
          <Col md={6}>
            <p>© 2026 Give Me Life. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <Link to="/privacy" className="text-white text-decoration-none">Privacy Policy</Link> •{" "}
            <Link to="/terms" className="text-white text-decoration-none">Terms of Service</Link> •{" "}
            <Link to="/cookies" className="text-white text-decoration-none">Cookie Policy</Link> •{" "}
            <Link to="/accessibility" className="text-white text-decoration-none">Accessibility</Link> •{" "}
            <Link to="/sitemap" className="text-white text-decoration-none">Sitemap</Link>
            <p className="mt-1">Built for Humanity. Powered by Technology.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;