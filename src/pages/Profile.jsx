import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    FaHome,
    FaUser,
    FaSignOutAlt,
    FaTint,
    FaCalendar,
    FaHeart,
    FaAward,
    FaEdit,
    FaTrash,
} from "react-icons/fa";

import Button from "../component/UI/Button";
import { Form, Row, Col } from "react-bootstrap";
import UICard from "../component/UI/UICard";
import UISectionHeader from "../component/UI/UISectionHeader";

export default function Profile() {
    const [user, setUser] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
            navigate("/login");
        } else {
            setUser(JSON.parse(storedUser));
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/");
    };

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleUpdate = () => {
        localStorage.setItem("user", JSON.stringify(user));
        setEditMode(false);
        alert("Profile updated!");
    };

    const handleDelete = () => {
        if (window.confirm("Delete account?")) {
            localStorage.removeItem("user");
            navigate("/");
        }
    };

    if (!user) return null;

    return (
        <div className="profile-page d-flex mt-5 pt-5">

            {/* SIDEBAR */}
            <div className="glass  profile-sidebar d-none d-md-block p-3">
                <h4 className="logo fw-bold text-white">Blood Donate</h4>

                <ul className="list-unstyled mt-4">
                    <li className="mb-3 text-white">
                        <FaHome /> Home
                    </li>

                    <li className="mb-3 active text-white fw-bold">
                        <FaUser /> Profile
                    </li>

                    <li className="mb-3 text-white" onClick={handleLogout}>
                        <FaSignOutAlt /> Logout
                    </li>
                </ul>
            </div>

            {/* MAIN CONTENT */}
            <div className="profile-content container-fluid">

                {/* HEADER */}
                <div className="profile-header-card p-4 text-white rounded position-relative">

                    <button
                        className="btn btn-light btn-sm position-absolute top-0 end-0 m-3"
                        onClick={() => setEditMode(!editMode)}
                    >
                        <FaEdit /> Edit Profile
                    </button>

                    <div className="row align-items-center">

                        {/* AVATAR */}
                        <div
                            className="rounded-circle border d-flex align-items-center justify-content-center"
                            style={{ width: "80px", height: "80px", fontSize: "30px" }}
                        >
                            {user.name?.charAt(0).toUpperCase()}
                        </div>

                        {/* USER INFO */}
                        <div className="col-md-10">

                            {editMode ? (
                                <Form>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label className="text-white">Full Name</Form.Label>
                                                <Form.Control
                                                    name="name"
                                                    value={user.name}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                        </Col>

                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label className="text-white">Blood Group</Form.Label>
                                                <Form.Control
                                                    name="bloodGroup"
                                                    value={user.bloodGroup}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                        </Col>

                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label className="text-white">Email</Form.Label>
                                                <Form.Control
                                                    name="email"
                                                    value={user.email}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                        </Col>

                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label className="text-white">City</Form.Label>
                                                <Form.Control
                                                    name="location"
                                                    value={user.location}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Button variant="success" onClick={handleUpdate}>
                                        Save Changes
                                    </Button>
                                </Form>
                            ) : (
                                <>
                                    <h3 className="text-white">{user.name}</h3>
                                    <span className="badge bg-light text-danger mb-2">
                                        Verified Donor
                                    </span>
                                    <p className="text-white">🩸 Blood Group: {user.bloodGroup || "O+"}</p>
                                    <p className="text-white">📧 {user.email}</p>
                                    <p className="text-white">📍 {user.location || "India"}</p>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* STATS */}
                <div className="row mt-3 g-3 text-white">

                    <div className="col-6 col-md-3">
                        <UICard className="text-center text-white">
                            <FaTint />
                            <h5>5</h5>
                            <small>Total Donations</small>
                        </UICard>
                    </div>

                    <div className="col-6 col-md-3">
                        <UICard className="text-center text-white">
                            <FaCalendar />
                            <h5>3</h5>
                            <small>Years</small>
                        </UICard>
                    </div>

                    <div className="col-6 col-md-3">
                        <UICard className="text-center text-white">
                            <FaHeart />
                            <h5>15</h5>
                            <small>Lives Impacted</small>
                        </UICard>
                    </div>

                    <div className="col-6 col-md-3">
                        <UICard className="text-center text-white">
                            <FaAward />
                            <h5>Regular</h5>
                            <small>Badge</small>
                        </UICard>
                    </div>
                </div>

                {/* ABOUT + ACHIEVEMENTS */}
                <div className="row mt-4 g-3">

                    <div className="col-md-6">
                        <UICard className="text-white">
                            <UISectionHeader title="About Me" />

                            <p>
                                I believe in helping others and making a difference.
                            </p>

                            <ul className="list-unstyled">
                                <li>Gender: Male</li>
                                <li>Weight: 72kg</li>
                                <li>Last Donation: 12 March 2024</li>
                                <li>Next Eligible: 07 June 2024</li>
                            </ul>

                            <Button className="w-100 btn-donate">
                                ❤️ Pledge to Donate
                            </Button>
                        </UICard>
                    </div>

                    <div className="col-md-6">
                        <UICard className="text-white">
                            <UISectionHeader title="My Achievements" />

                            <div className="d-flex justify-content-between">
                                <span>First Donation</span><span>✔</span>
                            </div>

                            <div className="d-flex justify-content-between mt-2">
                                <span>Donation Streak</span><span>✔</span>
                            </div>

                            <div className="d-flex justify-content-between mt-2">
                                <span>Life Saver</span><span>✔</span>
                            </div>
                        </UICard>
                    </div>

                    {/* RECENT DONATIONS */}
                    <div className="col-12 mt-4 ">
                        <UICard className="text-white">
                            <UISectionHeader title="Recent Donations" />

                            <table className=" text-white  " >
                                <thead >
                                    <tr>
                                        <th>Date</th>
                                        <th>Blood Bank</th>
                                        <th>Location</th>
                                        <th>Units</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>12 March 2024</td>
                                        <td>Red Cross</td>
                                        <td>Delhi</td>
                                        <td>1</td>
                                    </tr>

                                    <tr>
                                        <td>20 Aug 2023</td>
                                        <td>Max Hospital</td>
                                        <td>Delhi</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                            </table>
                        </UICard>
                    </div>

                    {/* DELETE */}
                    <div className="col-12 text-center mt-4 mb-5">
                        <Button variant="danger" onClick={handleDelete}>
                            <FaTrash /> Delete Account
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    );
}