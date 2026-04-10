import React, { useMemo, useState } from "react";
import { Container, Row, Col, Form, Badge } from "react-bootstrap";
import Button from "../component/UI/Button";
import { FaHospital, FaMapMarkerAlt, FaPhone, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import UICard from "../component/UI/UICard";
import UISectionHeader from "../component/UI/UISectionHeader";

const Hospitals = () => {
    const navigate = useNavigate();
    const [city, setCity] = useState("");
    const [query, setQuery] = useState("");
    const [includeBloodBanks, setIncludeBloodBanks] = useState(true);

    const hospitals = useMemo(
        () => [
            {
                name: "City Care Hospital",
                type: "Hospital",
                city: "Mumbai",
                address: "Andheri East, Mumbai",
                phone: "+91 9876543210",
                rating: 4.8,
                hours: "24x7",
                services: ["Emergency", "Blood Storage", "ICU"],
                hospitalPhoto:
                    "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
            },
            {
                name: "LifeLine Blood Bank",
                type: "Blood Bank",
                city: "Pune",
                address: "Shivaji Nagar, Pune",
                phone: "+91 9123456789",
                rating: 4.5,
                hours: "8am - 10pm",
                services: ["Platelets", "Component Separation"],
                hospitalPhoto:
                    "https://images.unsplash.com/photo-1512678080530-7760d81faba6",
            },
            {
                name: "Apollo Hospital",
                type: "Hospital",
                city: "Chennai",
                address: "Greams Road, Chennai",
                phone: "+91 9871234567",
                rating: 4.9,
                hours: "24x7",
                services: ["Trauma Care", "Blood Bank", "Surgery"],
                hospitalPhoto:
                    "https://images.unsplash.com/photo-1576765608622-067973a79f53",
            },
            {
                name: "Harmony Health Center",
                type: "Hospital",
                city: "Bengaluru",
                address: "Koramangala, Bengaluru",
                phone: "+91 9090909090",
                rating: 4.6,
                hours: "24x7",
                services: ["Hematology", "Blood Storage"],
                hospitalPhoto:
                    "https://images.unsplash.com/photo-1504813184591-01572f98c85d",
            },
            {
                name: "Nova Blood Bank",
                type: "Blood Bank",
                city: "Hyderabad",
                address: "Banjara Hills, Hyderabad",
                phone: "+91 9012345678",
                rating: 4.4,
                hours: "9am - 9pm",
                services: ["Plasma", "Platelets"],
                hospitalPhoto:
                    "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb",
            },
        ],
        []
    );

    const filteredHospitals = hospitals.filter((hospital) => {
        const matchesCity = hospital.city
            .toLowerCase()
            .includes(city.toLowerCase());

        const matchesQuery =
            hospital.name.toLowerCase().includes(query.toLowerCase()) ||
            hospital.address.toLowerCase().includes(query.toLowerCase());

        const matchesType = includeBloodBanks
            ? true
            : hospital.type === "Hospital";

        return matchesCity && matchesQuery && matchesType;
    });

    return (
        <Container className="py-5 ">

            {/* Header */}
            <div className="page-hero mb-3 mt-5">
                <Badge bg="danger" className="hero-pill ">Verified Network</Badge>

                <h1 className="text-white hero-title ">
                    Hospitals & Blood Banks
                </h1>

                <p className="text-white-50">
                    Discover trusted facilities, view key services, and connect instantly.
                </p>

                <div className="hero-stats d-flex gap-4 mt-3">
                    <div className="stat-tile">
                        <span>Facilities</span>
                        <strong>{filteredHospitals.length}</strong>
                    </div>

                    <div className="stat-tile">
                        <span>24x7 Centers</span>
                        <strong>12+</strong>
                    </div>

                    <div className="stat-tile">
                        <span>Avg Rating</span>
                        <strong>4.7</strong>
                    </div>
                </div>
            </div>

            {/* Search */}
            <UICard className="mb-3">
                <UISectionHeader
                    title="Hospital Discovery"
                    subtitle="Search hospitals and verified blood banks by city or name."
                />

                <Form>
                    <Row className="g-3 align-items-end">

                        <Col md={5}>
                            <Form.Label className="text-white">City</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </Col>

                        <Col md={5}>
                            <Form.Label className="text-white">Search Query</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Hospital name or address"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        </Col>

                        <Col md={2}>
                            <Button className="w-100 d-flex align-items-center justify-content-center gap-2">
                                <FaSearch /> Search
                            </Button>

                            <Form.Check
                                type="switch"
                                label="Include blood banks"
                                checked={includeBloodBanks}
                                onChange={(e) => setIncludeBloodBanks(e.target.checked)}
                                className="text-white small mt-2"
                            />
                        </Col>

                    </Row>
                </Form>
            </UICard>

            {/* Hospitals */}
            <Row className="g-4">
                {filteredHospitals.length > 0 ? (
                    filteredHospitals.map((hospital, index) => (
                        <Col md={6} lg={4} key={index}>
                            <UICard className="h-100">

                                <div className="hospital-photo">
                                    <img src={hospital.hospitalPhoto} alt={hospital.name} />
                                    <Badge bg={hospital.type === "Hospital" ? "primary" : "warning"}>
                                        {hospital.type}
                                    </Badge>
                                </div>

                                <div className="hospital-body">

                                    <div className="text-danger fw-semibold mb-2 d-flex align-items-center gap-2">
                                        <FaHospital /> {hospital.name}
                                    </div>

                                    <div className="text-white-50 small mb-2">
                                        ⭐ {hospital.rating} • {hospital.hours}
                                    </div>

                                    <div className="mb-2 text-white-50 small">
                                        <FaMapMarkerAlt className="me-2" />
                                        {hospital.city}
                                    </div>

                                    <div className="mb-2 text-white-50 small">
                                        {hospital.address}
                                    </div>

                                    <div className="mb-3 text-white-50 small">
                                        <FaPhone className="me-2" />
                                        {hospital.phone}
                                    </div>

                                    <div className="d-flex gap-2 mt-auto">
                                        <Button
                                            className="w-100"
                                            onClick={() =>
                                                navigate("/contact-hospital", {
                                                    state: {
                                                        hospitalName: hospital.name,
                                                        hospitalCity: hospital.city,
                                                    },
                                                })
                                            }
                                        >
                                            Contact

                                        </Button>

                                        <a
                                            className="quick-call-btn w-100 text-center"
                                            href={`tel:${hospital.phone}`}
                                        >
                                            Call
                                        </a>
                                    </div>

                                </div>

                            </UICard>
                        </Col>
                    ))
                ) : (
                    <Col>
                        <p className="text-center text-white fs-5">
                            No hospitals found in this city.
                        </p>
                    </Col>
                )}
            </Row>

            <div className="mt-5 text-center text-white">
                <p className="small">
                    All listed hospitals and blood banks are verified partners to ensure
                    safe and secure blood donation services.
                </p>
            </div>

        </Container>
    );
};

export default Hospitals;