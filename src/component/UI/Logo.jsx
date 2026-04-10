import logo from "../../assets/logo.png";
export default function Logo() {
    const handleLogoClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        setTimeout(() => {
            window.location.reload();
        }, 200);
    };
    return (
        <div
            to="/"
            className="navbar-brand logo"
            onClick={handleLogoClick}
        >
            <img
                src={logo}
                alt="BloodCare Logo"
                style={{
                    height: "45px",
                    width: "auto",
                    cursor: "pointer"
                }}
            />
        </div>
    );
}