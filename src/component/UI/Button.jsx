import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Button({
    children = "Donate Blood",
    route,
    className = "",
    color = "var(--blood-primary)",
    variant = "primary",
    size = "md",          
    fullWidth = false,
    onClick,     
    type,
}) {

    const [hover, setHover] = useState(false);
    const navigate = useNavigate();
    const sizeStyles = {

        sm: {
            padding: "6px 18px",
            fontSize: "12px",
        },

        md: {
            padding: "12px 32px",
            fontSize: "14px",
        },

        lg: {
            padding: "16px 42px",
            fontSize: "18px",
        },

        xl: {
            padding: "20px 52px",
            fontSize: "22px",
        }
    };
    const variantStyles = {
        primary: {
            backgroundColor: hover ? "var(--glass-bg)" : color,
            color: "var(--white)",
            border: `2px solid ${color}`,
        },
        outline: {
            backgroundColor: hover ? color : "var(--glass-bg)",
            color: "var(--white)",
            border: `2px solid ${color}`,
        },
        ghost: {
            backgroundColor: hover ? "var(--glass-bg)" : "var(--glass-bg)",
            color: color,
            border: "2px solid var(--glass-border)",
        },
        danger: {
            backgroundColor: hover ? "var(--glass-bg)" : "var(--emergency-red)",
            color: hover ? "var(--emergency-red)" : "var(--white)",
            border: "2px solid var(--emergency-red)",
        }
    };
    const baseStyle = {
        borderRadius: "50px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        fontWeight: "600",
        letterSpacing: "1px",

        width: fullWidth ? "100%" : "auto",

        ...sizeStyles[size],
        ...variantStyles[variant]

    };
    const handleClick = () => {
        if (onClick) {
            onClick();
        } else if (route) {
            navigate(route);
        }
    };
    return (
        <button
            onClick={handleClick}
            className={`btn shadow blood-btn ${className}`}
            style={baseStyle}
            type={type}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
             {children}
        </button>
    )
}
