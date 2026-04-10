import Button from "../UI/Button";
import banner03 from "../../assets/banner03.png"

export default function Banner() {
    return (
        <section
            className="banner-section d-flex align-items-center  "
            style={{ backgroundImage: `url(${banner03})` }}
        >
            <div className="container text-center banner-content ui-text-white">
                <h1 className="banner-title">
                    Donate Blood, Save Lives 🩸
                </h1>
                <p className="banner-subtitle">
                    Your one donation can save up to 3 lives.
                </p>
                < Button
                    color="var(--white)"
                    variant="outline"
                    route="/donate"
                    style={{ fontSize: "12px", width: "320px" }}>
                    Donate Blood
                </ Button>
            </div>
        </section >
    );
}
