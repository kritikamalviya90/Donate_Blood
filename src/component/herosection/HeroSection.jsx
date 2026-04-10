import Navbar from "../Layout/Navbar";
import Button from "../UI/Button";
import { Link } from "react-router-dom";

export default function HeroSection() {
    return (
        <section className="hero-section">
            <div className="hero-overlay"></div>

            <Navbar />

            <div className="container hero-content text-center">
                <h1 className="hero-title">
                    Donate Blood, Save Lives ❤️
                </h1>

                <p className="hero-subtitle">
                    Your one donation can save up to 3 lives.
                    Join our blood donor community today.
                </p>

                <div className="hero-buttons d-flex flex-wrap justify-content-center">
                    <Button
                        route="/donate"
                        variant="primary"
                        size="lg"
                        className="me-3 mb-2"
                    >
                        Donate Blood
                    </Button>

                    <Button
                        route="/find-blood#request-blood"
                        variant="outline"
                        size="lg"
                        className="mb-2"
                    >
                        Request Blood
                    </Button>
                </div>

                <div className="bb-search glass">
                    <input
                        type="text"
                        placeholder="Search Blood Group, Donor, Blood Bank..."
                        className="form-control"
                    />

                    <Link to="/find-blood">
                        <button className="search-btn">
                            Search
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}