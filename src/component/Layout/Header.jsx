import { Link, useNavigate } from "react-router-dom";
import Logo from "../UI/Logo";
import StateDropdown from "../Dropdown/StateDropdown";
import Button from "../UI/Button";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Header() {
    const [search, setSearch] = useState("");
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const handleSearch = () => {
        console.log("Search:", search);
    };

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <nav className="bb-navbar main-navbar">
            <div className="container-fluid">
                <div className="row align-items-center gy-2">

                    {/* Logo */}
                    <div className="col-6 col-md-3 col-lg-2">
                        <Link to="/" className="bb-logo fs-4 fs-md-3">
                            <Logo />
                        </Link>
                    </div>

                    {/* Login */}
                    <div className="col-6 col-md-3 col-lg-2 text-end order-2 order-md-3">
                        <div className="bb-right d-flex justify-content-end">

                            {!user ? (
                                <Button route="/login" variant="primary" size="md">
                                    Login
                                </Button>
                            ) : (
                                <div
                                    className="user-profile d-flex align-items-center gap-2  glass p-2"
                                    onClick={() => navigate("/profile")}
                                    style={{ cursor: "pointer" }}
                                >
                                    <div className="user-avatar">
                                        {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                                    </div>

                                    <span className="d-none d-md-inline">
                                        {user.name || "User"}
                                    </span>
                                </div>
                            )}

                        </div>
                    </div>

                    {/* Desktop (UNCHANGED) */}
                    <div className="col-12 col-md-6 col-lg-8 order-3 order-md-2 d-none d-md-block">
                        <div className="bb-search-section d-flex flex-column flex-md-row align-items-stretch align-items-md-center w-100 gap-2">

                            <div className="bb-location d-flex align-items-center">
                                {/* Keep for desktop */}
                                <StateDropdown />
                            </div>

                            <div className="bb-search d-flex flex-grow-1">
                                <input
                                    type="text"
                                    placeholder="Search Blood Donor, Blood Bank..."
                                    className="form-control"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <button className="btn" onClick={handleSearch}>
                                    <FaSearch />
                                </button>
                            </div>

                        </div>
                    </div>

                    {/* ✅ MOBILE SEARCH (NEW DESIGN) */}
                    {/* <div className="col-12 d-md-none mt-2">
                        <div className="bb-search d-flex align-items-center position-relative">

                            <input
                                type="text"
                                placeholder="Search"
                                className="form-control rounded-pill pe-5"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />

                            <button
                                className="btn position-absolute end-0 top-50 translate-middle-y rounded-circle me-1"
                                onClick={handleSearch}
                                style={{
                                    width: "36px",
                                    height: "36px",
                                    background: "#eee",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                            >
                                <FaSearch />
                            </button>

                        </div>
                    </div> */}

                </div>
            </div>
        </nav>
    );
}