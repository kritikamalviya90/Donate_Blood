import React, { useMemo, useState } from "react";
import { Container, Row, Col, Nav, Badge, Table } from "react-bootstrap";
import {
    FaHeartbeat,
    FaBell,
    FaUserShield,
    FaHospital,
    FaUserPlus,
    FaClock,
    FaMapMarkerAlt,
} from "react-icons/fa";

import { Bar, Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from "chart.js";

import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    AreaChart,
    Area,
} from "recharts";

import UICard from "../component/UI/UICard";
import UISectionHeader from "../component/UI/UISectionHeader";
import UIStat from "../component/UI/UIStat";
import UIAlert from "../component/UI/UIAlert";

ChartJS.register(
    ArcElement,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);

const RoleDashboards = () => {
    const [activeRole, setActiveRole] = useState("donor");

    const impactData = useMemo(
        () => ({
            labels: ["Plasma", "Whole", "Platelets", "Rare"],
            datasets: [
                {
                    label: "Lives Impacted",
                    data: [18, 34, 12, 4],
                    backgroundColor: ["#ff4d5a", "#b3000f", "#ff9f1c", "#ff6b6b"],
                    borderRadius: 10,
                },
            ],
        }),
        []
    );

    const inventoryData = useMemo(
        () => ({
            labels: ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"],
            datasets: [
                {
                    data: [120, 24, 98, 20, 72, 18, 40, 12],
                    backgroundColor: [
                        "#d72638",
                        "#ff5d5d",
                        "#3f88c5",
                        "#7a9e9f",
                        "#f49d37",
                        "#f1c40f",
                        "#8338ec",
                        "#ff9f1c",
                    ],
                    borderWidth: 0,
                },
            ],
        }),
        []
    );

    const responseTrend = [
        { day: "Mon", responses: 12 },
        { day: "Tue", responses: 18 },
        { day: "Wed", responses: 27 },
        { day: "Thu", responses: 21 },
        { day: "Fri", responses: 30 },
        { day: "Sat", responses: 16 },
        { day: "Sun", responses: 20 },
    ];

    const systemAnalytics = [
        { month: "Jan", requests: 420, matched: 360 },
        { month: "Feb", requests: 510, matched: 445 },
        { month: "Mar", requests: 610, matched: 540 },
        { month: "Apr", requests: 540, matched: 498 },
        { month: "May", requests: 690, matched: 610 },
        { month: "Jun", requests: 770, matched: 702 },
    ];

    const renderRoleHeader = () => {
        const roleMap = {
            donor: { label: "Donor Dashboard", icon: <FaHeartbeat /> },
            needer: { label: "Blood Needer Dashboard", icon: <FaUserPlus /> },
            hospital: { label: "Hospital Dashboard", icon: <FaHospital /> },
            admin: { label: "Admin Panel", icon: <FaUserShield /> },
        };

        const current = roleMap[activeRole];

        return (
            <div className="dashboard-header">
                <div className="dashboard-title">
                    <span className="title-icon">{current.icon}</span>

                    <div>
                        <h1 className="text-white mb-1">{current.label}</h1>

                        <p className="text-white-50 mb-0">
                            Role-based operational insights for critical decision making.
                        </p>
                    </div>
                </div>

                <div className="dashboard-alert">
                    <FaBell />
                    <span>3 critical notifications pending</span>
                </div>
            </div>
        );
    };

    return (
        <Container className="py-5 dashboard-shell">
            {renderRoleHeader()}

            <Nav className="role-tabs mt-4" variant="pills" activeKey={activeRole}>
                <Nav.Item>
                    <Nav.Link eventKey="donor" onClick={() => setActiveRole("donor")}>
                        Donor
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link eventKey="needer" onClick={() => setActiveRole("needer")}>
                        Blood Needer
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link
                        eventKey="hospital"
                        onClick={() => setActiveRole("hospital")}
                    >
                        Hospital
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link eventKey="admin" onClick={() => setActiveRole("admin")}>
                        Admin
                    </Nav.Link>
                </Nav.Item>
            </Nav>

            {/* DONOR DASHBOARD */}

            {activeRole === "donor" && (
                <Row className="g-4 mt-2">
                    <Col lg={4}>
                        <UICard className="dashboard-card">
                            <UISectionHeader
                                title="Impact Counter"
                                subtitle="Lives impacted this year"
                            />

                            <Bar
                                data={impactData}
                                options={{
                                    plugins: { legend: { display: false } },
                                }}
                            />
                        </UICard>
                    </Col>

                    <Col lg={4}>
                        <UICard className="dashboard-card">
                            <UISectionHeader title="Donation History" />

                            <div className="timeline">
                                {[
                                    {
                                        date: "Jan 24",
                                        type: "Whole Blood",
                                        location: "City Hospital",
                                    },
                                    {
                                        date: "Mar 02",
                                        type: "Platelets",
                                        location: "Indira Center",
                                    },
                                    {
                                        date: "May 19",
                                        type: "Plasma",
                                        location: "Red Cross Unit",
                                    },
                                ].map((item) => (
                                    <div key={item.date} className="timeline-item">
                                        <div className="timeline-dot" />

                                        <div>
                                            <span className="text-white">{item.type}</span>

                                            <div className="text-white-50 small">
                                                {item.date} • {item.location}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </UICard>
                    </Col>

                    <Col lg={4}>
                        <UICard className="dashboard-card">
                            <UISectionHeader title="Nearby Requests" />

                            <div className="request-list">
                                {[
                                    { blood: "O-", city: "Indiranagar", time: "15 min ago" },
                                    { blood: "B+", city: "MG Road", time: "28 min ago" },
                                    { blood: "A+", city: "Koramangala", time: "40 min ago" },
                                ].map((item) => (
                                    <div key={item.city} className="request-item">
                                        <div>
                                            <Badge bg="danger">{item.blood}</Badge>

                                            <span className="ms-2 text-white">{item.city}</span>
                                        </div>

                                        <span className="text-white-50 small">
                                            <FaClock className="me-1" /> {item.time}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </UICard>
                    </Col>
                </Row>
            )}
        </Container>
    );
};

export default RoleDashboards;