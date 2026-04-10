import { useState } from "react";

export default function Input({
    type = "text",
    placeholder = "Enter text...",
    value,
    onChange,
    className = "",
    color = "var(--blood-primary)",
    variant = "primary",
    size = "md",
    fullWidth = true,
}) {
    const [focus, setFocus] = useState(false);
    const sizeStyles = {
        sm: {
            padding: "6px 14px",
            fontSize: "12px",
        },
        md: {
            padding: "10px 18px",
            fontSize: "14px",
        },
        lg: {
            padding: "14px 22px",
            fontSize: "18px",
        },
        xl: {
            padding: "18px 26px",
            fontSize: "22px",
        }
    };
    const variantStyles = {
        primary: {
            backgroundColor: "var(--glass-bg)",
            color: "var(--white)",
            border: `2px solid ${focus ? color : "var(--glass-border)"}`,
        },
        outline: {
            backgroundColor: "var(--glass-bg)",
            color: color,
            border: `2px solid ${focus ? color : "var(--glass-border)"}`,
        },
        ghost: {
            backgroundColor: "var(--glass-bg)",
            color: color,
            border: `2px solid var(--glass-border)`,
            borderBottom: `2px solid ${focus ? color : "var(--glass-border)"}`,
            borderRadius: "0px",
        },
        danger: {
            backgroundColor: "var(--glass-bg)",
            color: "var(--emergency-red)",
            border: `2px solid ${focus ? "var(--emergency-red)" : "var(--glass-border)"}`,
        }
    };
    const baseStyle = {
        borderRadius: "50px",
        outline: "none",
        transition: "all 0.3s ease",
        fontWeight: "500",
        width: fullWidth ? "100%" : "auto",
        ...sizeStyles[size],
        ...variantStyles[variant]
    };
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`blood-input ${className}`}
            style={baseStyle}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
        />
    );
}
