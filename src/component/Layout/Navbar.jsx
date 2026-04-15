import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Find Blood", path: "/find-blood" },
        { name: "Donate Blood", path: "/become-donor" },
        { name: "Hospitals", path: "/hospitals" },
        { name: "Blood Banks", path: "/blood-banks" }, // fixed
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact-support" },
    ];

    return (
        <nav className="navbar custom-navbar">
            <div className="container-fluid">

                {/* ================= DESKTOP + TABLET NAVBAR ================= */}
                <div className="justify-content-center d-none d-md-flex w-100">
                    <ul className="navbar-nav flex-row fw-bold gap-4">

                        {navItems.map((item, index) => {
                            const isActive = location.pathname === item.path;

                            return (
                                <li className="nav-item" key={index}>
                                    <Link
                                        to={item.path}
                                        className={`nav-link text-white nav-animate ${isActive ? "active-link" : ""}`}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        })}

                    </ul>
                </div>

                {/* ================= MOBILE NAVBAR ONLY ================= */}
                <div className="d-md-none mobile-nav-wrapper">
                    <ul className="navbar-nav flex-row mobile-nav-scroll px-2">

                        {navItems.map((item, index) => {
                            const isActive = location.pathname === item.path;

                            return (
                                <li className="nav-item mobile-nav-item" key={index}>
                                    <Link
                                        to={item.path}
                                        className={`nav-link text-white mobile-link ${isActive ? "active-mobile" : ""}`}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        })}

                    </ul>
                </div>

            </div>
        </nav>
    );
}