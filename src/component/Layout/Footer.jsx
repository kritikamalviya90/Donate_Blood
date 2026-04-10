import React from "react";
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
              <img src={Logo} alt="Give Me Life Logo" className="footer-logo-img" />
            </div>
            <p className="mission">Connecting donors and patients in real-time to save lives faster.</p>
            <p className="emergency-tagline">🩸 Every Drop Counts.</p>
            <p className="trust-tagline">Secure • Verified • Life-Saving</p>
          </Col>
          <Col lg={2} md={6} className="mb-4">
            <h5 className="footer-title">Platform</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/find-blood">Find Blood</a></li>
              <li><a href="/become-donor">Become a Donor</a></li>
              <li><a href="/hospitals">Hospitals</a></li>
              <li><a href="/blood-banks">Blood Banks</a></li>
              <li><a href="/csr-partnerships">CSR Partnerships</a></li>
            </ul>
          </Col>
          <Col lg={2} md={6} className="mb-4">
            <h5 className="footer-title">Support</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="/help-center">Help Center</a></li>
              <li><a href="/faqs">FAQs</a></li>
              <li><a href="/contact-support">Contact Support</a></li>
              <li><a href="/report-abuse">Report Abuse</a></li>
              <li><a href="/emergency-guide">Emergency Guide</a></li>
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
            <div className="d-flex flex-row gap-2 ">
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
            <a href="/privacy">Privacy Policy</a> • <a href="/terms">Terms of Service</a> • <a href="/cookies">Cookie Policy</a> • <a href="/accessibility">Accessibility</a> • <a href="/sitemap">Sitemap</a>
            <p className="mt-1">Built for Humanity. Powered by Technology.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;