import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UICard from "../component/UI/UICard";
import Button from "../component/UI/Button";

const About = () => {
  return (
    <div className="about-page py-5">
      <Container>
        {/* Page Title */}
        <Row className="mb-4">
          <Col>
            <h1 className="text-center  text-white hero-title pt-5">About Give Me Life</h1>
            <p className="text-center  text-white fs-5">
              Connecting donors and patients in real-time to save lives faster.
            </p>
          </Col>
        </Row>

        {/* Hero Visual */}
        <Row className="mb-5">
          <Col>
            <UICard className="p-0 overflow-hidden hospital-card--media">
              <div className="hospital-photo" style={{ height: "260px" }}>
                <img
                  src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
                  alt="Hospital care"
                />
              </div>
              <div className="p-4">
                <h4 className="text-white mb-2">Built for urgent moments</h4>
                <p className=" text-white mb-0">
                  A trusted network of donors, hospitals, and blood banks that responds fast
                  when every minute counts.
                </p>
              </div>
            </UICard>
          </Col>
        </Row>

        {/* Highlights */}
        <Row className="mb-5 g-3">
          <Col md={4}>
            <UICard className="h-100 about-highlight">
              <div className="about-card-photo">
                <img
                  src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb"
                  alt="Rapid matching"
                />
              </div>
              <h5 className=" text-white">Rapid Matching</h5>
              <p className=" text-white small">
                Intelligent routing connects patients to the nearest compatible donors.
              </p>
            </UICard>
          </Col>
          <Col md={4}>
            <UICard className="h-100 about-highlight">
              <div className="about-card-photo">
                <img
                  src="https://images.unsplash.com/photo-1576765608622-067973a79f53"
                  alt="Verified network"
                />
              </div>
              <h5 className=" text-white">Verified Network</h5>
              <p className=" text-white small">
                Hospitals and blood banks are verified for safety and compliance.
              </p>
            </UICard>
          </Col>
          <Col md={4}>
            <UICard className="h-100 about-highlight">
              <div className="about-card-photo">
                <img
                  src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
                  alt="24x7 support"
                />
              </div>
              <h5 className=" text-white">24x7 Support</h5>
              <p className=" text-white small">
                Emergency response teams stay available around the clock.
              </p>
            </UICard>
          </Col>
        </Row>

        {/* How It Works */}
        <Row className="mb-5 g-3">
          <h2 className=" text-white mb-4 text-center">How It Works</h2>
          <Col md={4}>
            <UICard className="h-100">
              <div className="about-card-photo">
                <img
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514"
                  alt="Request blood"
                />
              </div>
              <h6 className=" text-white">1. Request</h6>
              <p className=" text-white small">
                Submit a blood request with group, location, and urgency.
              </p>
            </UICard>
          </Col>
          <Col md={4}>
            <UICard className="h-100">
              <div className="about-card-photo">
                <img
                  src="https://images.unsplash.com/photo-1485846234645-a62644f84728"
                  alt="Match donors"
                />
              </div>
              <h6 className=" text-white">2. Match</h6>
              <p className=" text-white small">
                Our system notifies compatible donors and nearby hospitals.
              </p>
            </UICard>
          </Col>
          <Col md={4}>
            <UICard className="h-100">
              <div className="about-card-photo">
                <img
                  src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb"
                  alt="Donate"
                />
              </div>
              <h6 className=" text-white">3. Donate & Save</h6>
              <p className=" text-white small">
                Donor connects, hospital verifies, and lives are saved.
              </p>
            </UICard>
          </Col>
        </Row>

        {/* Mission & Vision */}
        <Row className="mb-5">
          <Col md={6} className="mb-3">
            <UICard className="h-100">
              <div className="about-card-photo">
                <img
                  src="https://images.unsplash.com/photo-1584515933487-779824d29309"
                  alt="Mission"
                />
              </div>
              <h5 className=" text-white">Our Mission</h5>
              <p className=" text-white">
                🩸 To provide an efficient, real-time platform that connects blood donors with patients in need,
                reducing response time in emergencies and saving lives.
              </p>
            </UICard>
          </Col>
          <Col md={6} className="mb-3">
            <UICard className="h-100">
              <div className="about-card-photo">
                <img
                  src="https://images.unsplash.com/photo-1580281657521-3e6c83ed2381"
                  alt="Vision"
                />
              </div>
              <h5 className=" text-white">Our Vision</h5>
              <p className=" text-white">
                🌟 A world where no patient waits for life-saving blood and every donation counts toward saving lives.
              </p>
            </UICard>
          </Col>
        </Row>

        {/* Impact Snapshot */}
        <Row className="mb-5 g-3">
          <Col md={4}>
            <UICard className="h-100">
              <div className="about-card-photo">
                <img
                  src="https://images.unsplash.com/photo-1580281658629-93e1b6a0e2a2"
                  alt="Impact snapshot"
                />
              </div>
              <h5 className=" text-white">Impact Snapshot</h5>
              <p className=" text-white small mb-2">Lives supported</p>
              <h3 className=" text-white">12,480+</h3>
            </UICard>
          </Col>
          <Col md={4}>
            <UICard className="h-100">
              <div className="about-card-photo">
                <img
                  src="https://images.unsplash.com/photo-1504813184591-01572f98c85d"
                  alt="Verified donors"
                />
              </div>
              <p className=" text-white small mb-2">Verified donors</p>
              <h3 className=" text-white">38,200+</h3>
              <p className=" text-white small mb-0">Across 90+ cities</p>
            </UICard>
          </Col>
          <Col md={4}>
            <UICard className="h-100">
              <div className="about-card-photo">
                <img
                  src="https://images.unsplash.com/photo-1538108149393-fbbd81895907"
                  alt="Partner hospitals"
                />
              </div>
              <p className=" text-white small mb-2">Partner hospitals</p>
              <h3 className=" text-white">520+</h3>
              <p className=" text-white small mb-0">24/7 response teams</p>
            </UICard>
          </Col>
        </Row>

        {/* Trust & Safety */}
        <Row className="mb-5 g-3">
          <h2 className=" text-white mb-4 text-center">Trust & Safety</h2>
          <Col md={6}>
            <UICard className="h-100">
              <div className="about-card-photo">
                <img
                  src="https://images.unsplash.com/photo-1551601651-2a8555f1a136"
                  alt="Verification"
                />
              </div>
              <h5 className=" text-white">Verification</h5>
              <p className=" text-white small">
                Hospitals and blood banks undergo verification and periodic review.
              </p>
            </UICard>
          </Col>
          <Col md={6}>
            <UICard className="h-100">
              <div className="about-card-photo">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
                  alt="Privacy"
                />
              </div>
              <h5 className=" text-white">Privacy</h5>
              <p className=" text-white small">
                Donor data is protected and shared only when a request is confirmed.
              </p>
            </UICard>
          </Col>
        </Row>

        {/* Coverage */}
        <Row className="mb-5 g-3">
          <h2 className=" text-white mb-4 text-center">Coverage</h2>
          <Col md={4}>
            <UICard className="h-100">
              <h6 className=" text-white">North</h6>
              <p className=" text-white small">Delhi NCR, Chandigarh, Jaipur</p>
            </UICard>
          </Col>
          <Col md={4}>
            <UICard className="h-100">
              <h6 className=" text-white">West</h6>
              <p className=" text-white small">Mumbai, Pune, Ahmedabad</p>
            </UICard>
          </Col>
          <Col md={4}>
            <UICard className="h-100">
              <h6 className=" text-white">South</h6>
              <p className=" text-white small">Bengaluru, Chennai, Hyderabad</p>
            </UICard>
          </Col>
        </Row>

        {/* Core Values */}
        <Row className="mb-5">
          <Col>
            <h2 className=" text-white mb-4 text-center">Core Values</h2>
            <Row className="text-center">
              <Col md={3} sm={6} className="mb-3">
                <UICard className="h-100">
                  <div className="about-card-photo">
                    <img
                      src="https://images.unsplash.com/photo-1584515933487-779824d29309"
                      alt="Trust"
                    />
                  </div>
                  <h6 className=" text-white">Trust</h6>
                  <p className=" text-white small">
                    We maintain complete transparency and security in all operations.
                  </p>
                </UICard>
              </Col>
              <Col md={3} sm={6} className="mb-3">
                <UICard className="h-100">
                  <div className="about-card-photo">
                    <img
                      src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528"
                      alt="Compassion"
                    />
                  </div>
                  <h6 className=" text-white">Compassion</h6>
                  <p className=" text-white small">
                    We care deeply about patients and donors alike.
                  </p>
                </UICard>
              </Col>
              <Col md={3} sm={6} className="mb-3">
                <UICard className="h-100">
                  <div className="about-card-photo">
                    <img
                      src="https://images.unsplash.com/photo-1512678080530-7760d81faba6"
                      alt="Innovation"
                    />
                  </div>
                  <h6 className=" text-white">Innovation</h6>
                  <p className=" text-white small">
                    We use technology to streamline emergency blood requests.
                  </p>
                </UICard>
              </Col>
              <Col md={3} sm={6} className="mb-3">
                <UICard className="h-100">
                  <div className="about-card-photo">
                    <img
                      src="https://images.unsplash.com/photo-1504813184591-01572f98c85d"
                      alt="Community"
                    />
                  </div>
                  <h6 className=" text-white">Community</h6>
                  <p className=" text-white small">
                    Building a network of donors and hospitals to save lives together.
                  </p>
                </UICard>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Leadership */}
        <Row className="mb-5 g-3">
          <h2 className=" text-white mb-4 text-center">Our Team</h2>
          <Col md={4}>
            <UICard className="h-100">
              <div className="team-photo">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
                  alt="Dr. Meera Joshi"
                />
              </div>
              <div className="doctor-row mb-3">
                <div>
                  <div className=" text-white">Dr. Meera Joshi</div>
                  <div className=" text-white small">Founder & Medical Director</div>
                </div>
              </div>
              <p className=" text-white small mb-2">MBBS, MD (Emergency Medicine)</p>
              <p className=" text-white small">
                12+ years in trauma care and emergency response systems.
              </p>
              <div className="hospital-chips mt-3">
                <span className="chip">Emergency Medicine</span>
                <span className="chip">Trauma Care</span>
                <span className="chip">Donor Safety</span>
              </div>
            </UICard>
          </Col>
          <Col md={4}>
            <UICard className="h-100">
              <div className="team-photo">
                <img
                  src="https://images.unsplash.com/photo-1537368910025-700350fe46c7"
                  alt="Arjun Singh"
                />
              </div>
              <div className="doctor-row mb-3">
                <div>
                  <div className=" text-white">Arjun Singh</div>
                  <div className=" text-white small">Head of Operations</div>
                </div>
              </div>
              <p className=" text-white small mb-2">MBA (Healthcare), Lean Six Sigma</p>
              <p className=" text-white small">
                9+ years managing hospital networks and rapid response logistics.
              </p>
              <div className="hospital-chips mt-3">
                <span className="chip">Operations</span>
                <span className="chip">Hospital Partnerships</span>
                <span className="chip">Emergency Logistics</span>
              </div>
            </UICard>
          </Col>
          <Col md={4}>
            <UICard className="h-100">
              <div className="team-photo">
                <img
                  src="https://images.unsplash.com/photo-1580281658629-93e1b6a0e2a2"
                  alt="Kavya Nair"
                />
              </div>
              <div className="doctor-row mb-3">
                <div>
                  <div className=" text-white">Kavya Nair</div>
                  <div className=" text-white small">Technology Lead</div>
                </div>
              </div>
              <p className=" text-white small mb-2">B.Tech (CSE), M.S. (Data Systems)</p>
              <p className=" text-white small">
                10+ years building real-time health-tech platforms.
              </p>
              <div className="hospital-chips mt-3">
                <span className="chip">Realtime Matching</span>
                <span className="chip">Data Systems</span>
                <span className="chip">Security</span>
              </div>
            </UICard>
          </Col>
        </Row>

        {/* Call to Action */}
        <Row className="text-center">
          <Col>
            <h3 className=" text-white mb-3">Join Our Life-Saving Mission</h3>
            <p className="fs-5  text-white mb-3">
              Become a donor today or spread awareness to help patients in need.
            </p>
            <Button className="btn-donate" route="/become-donor">
              Become a Donor
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;

