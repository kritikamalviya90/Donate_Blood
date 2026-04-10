import React, { useState } from "react";
import { Container, Row, Col, Form, Badge } from "react-bootstrap";
import Button from "../component/UI/Button";

import { FaSearch, FaMapMarkerAlt, FaTint } from "react-icons/fa";
import Bloodgroup from "../component/Dropdown/Bloodgroup";
import UICard from "../component/UI/UICard";
import UISectionHeader from "../component/UI/UISectionHeader";
import UIAlert from "../component/UI/UIAlert";
import Toast from "../component/UI/Toast";

const FindBlood = () => {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [query, setQuery] = useState("");
  const [availability, setAvailability] = useState("all");
  const [radius, setRadius] = useState(10);

  const donors = [
    {
      name: "Ravi Sharma",
      blood: "A+",
      city: "Mumbai",
      state: "Maharashtra",
      contact: "+91 98765 43210",
      distanceKm: 4.2,
      lastDonation: "6 weeks ago",
      status: "available",
    },
    {
      name: "Priya Singh",
      blood: "O-",
      city: "Pune",
      state: "Maharashtra",
      contact: "+91 91234 56789",
      distanceKm: 9.5,
      lastDonation: "2 months ago",
      status: "recent",
    },
    {
      name: "Ankit Kumar",
      blood: "B+",
      city: "Mumbai",
      state: "Maharashtra",
      contact: "+91 99887 66554",
      distanceKm: 12.3,
      lastDonation: "3 days ago",
      status: "available",
    },
    {
      name: "Neha Verma",
      blood: "AB-",
      city: "Delhi",
      state: "Delhi",
      contact: "+91 90909 12121",
      distanceKm: 22.1,
      lastDonation: "Unavailable",
      status: "unavailable",
    },
  ];

  const filteredDonors = donors.filter(
    (d) =>
      (!state || d.state.toLowerCase().includes(state.toLowerCase())) &&
      (!city || d.city.toLowerCase().includes(city.toLowerCase())) &&
      (!bloodGroup || d.blood === bloodGroup) &&
      (!query ||
        d.name.toLowerCase().includes(query.toLowerCase()) ||
        d.city.toLowerCase().includes(query.toLowerCase())) &&
      (availability === "all" || d.status === availability) &&
      d.distanceKm <= radius
  );

  const handleClearFilters = () => {
    setState("");
    setCity("");
    setBloodGroup("");
    setQuery("");
    setAvailability("all");
    setRadius(10);
  };

  return (
    <Container className="py-5">

      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="text-white hero-title pt-5">Find Blood</h1>
        <p className="hero-subtitle text-white">
          Connect with donors and hospitals in real-time.
        </p>
      </div>

      {/* Search Filters */}
      <UICard className="mb-5">
        <UISectionHeader
          title="Find Donors"
          subtitle="Search nearby blood donors quickly."
        />

        <Form>
          <Row className="g-3">
            <Col md={4}>
              <Form.Label className="text-white">State</Form.Label>
              <Form.Control
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="e.g. Maharashtra"
              />
            </Col>

            <Col md={4}>
              <Form.Label className="text-white">City</Form.Label>
              <Form.Control
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="e.g. Mumbai"
              />
            </Col>

            <Col md={4}>
              <Form.Label className="text-white">Blood Group</Form.Label>
              <Bloodgroup
                value={bloodGroup}
                onChange={(bg) => setBloodGroup(bg)}
              />
            </Col>

            <Col md={4}>
              <Form.Label className="text-white">Search</Form.Label>
              <Form.Control
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search name or city"
              />
            </Col>

            <Col md={4}>
              <Form.Label className="text-white">Availability</Form.Label>
              <Form.Select
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
              >
                <option value="all">All</option>
                <option value="available">Available</option>
                <option value="recent">Recently Donated</option>
                <option value="unavailable">Not Available</option>
              </Form.Select>
            </Col>

            <Col md={4}>
              <Form.Label className="text-white">
                Radius: {radius} km
              </Form.Label>
              <Form.Range
                min={5}
                max={25}
                value={radius}
                onChange={(e) => setRadius(Number(e.target.value))}
              />
            </Col>
          </Row>

          <div className="mt-3 d-flex gap-2">
            <Button className="btn-donate">
              <FaSearch /> Apply Filters
            </Button>

            <Button variant="outline" onClick={handleClearFilters}>
              Clear
            </Button>
          </div>
        </Form>
      </UICard>

      {/* Donor List */}
      <Row className="g-4">
        {filteredDonors.length > 0 ? (
          filteredDonors.map((donor, index) => (
            <Col md={6} lg={4} key={index}>
              <UICard className="h-100">
                <div className="d-flex justify-content-between mb-2">
                  <div className="text-danger fw-semibold">
                    {donor.name} <FaTint className="ms-2" />
                  </div>

                  <Badge
                    bg={
                      donor.status === "available"
                        ? "success"
                        : donor.status === "recent"
                          ? "warning"
                          : "secondary"
                    }
                  >
                    {donor.status}
                  </Badge>
                </div>

                <div className="text-white-50 small">
                  <div><strong>Blood:</strong> {donor.blood}</div>
                  <div>
                    <FaMapMarkerAlt className="me-2" />
                    {donor.city}, {donor.state}
                  </div>
                  <div><strong>Distance:</strong> {donor.distanceKm} km</div>
                  <div><strong>Last Donation:</strong> {donor.lastDonation}</div>
                  <div><strong>Contact:</strong> {donor.contact}</div>
                </div>

                <div className="mt-3 d-flex gap-2">
                  <Button route="/contact-support" className="w-100">
                    Contact
                  </Button>
                  <a href={`tel:${donor.contact}`} className="quick-call-btn w-100 text-center">
                    Call
                  </a>
                </div>
              </UICard>
            </Col>
          ))
        ) : (
          <Col>
            <p className="text-center text-white">
              No donors found.
            </p>
          </Col>
        )}
      </Row>

    </Container>
  );
};

export default FindBlood;