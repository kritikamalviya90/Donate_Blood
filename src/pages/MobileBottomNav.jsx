import { Link, useLocation } from "react-router-dom";
import { FaHome, FaTint, FaSearch, FaHospital, FaBars } from "react-icons/fa";

export default function MobileBottomNav() {
    const location = useLocation();

    const navItems = [
        { name: "Home", path: "/", icon: <FaHome /> },
        { name: "Donate", path: "/become-donor", icon: <FaTint /> },
        { name: "Find Blood", path: "/find-blood", icon: <FaSearch /> },
        { name: "Hospitals", path: "/hospitals", icon: <FaHospital /> },
        { name: "Menu", path: "/menu", icon: <FaBars /> },
    ];

    return (
        <div className="mobile-bottom-nav d-md-none glass mt-5">
            {navItems.map((item, index) => {
                const isActive = location.pathname === item.path;

                return (
                    <Link
                        to={item.path}
                        key={index}
                        className={`bottom-nav-item ${isActive ? "active" : ""}`}
                    >
                        <div className="icon">{item.icon}</div>
                        <span>{item.name}</span>
                    </Link>
                );
            })}
        </div>
    );
}