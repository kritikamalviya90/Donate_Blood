import { useState } from "react";

const states = [
    { name: "Andhra Pradesh" },
    { name: "Arunachal Pradesh" },
    { name: "Assam" },
    { name: "Bihar" },
    { name: "Chhattisgarh" },
    { name: "Goa" },
    { name: "Gujarat" },
    { name: "Haryana" },
    { name: "Himachal Pradesh" },
    { name: "Jharkhand" },
    { name: "Karnataka" },
    { name: "Kerala" },
    { name: "Madhya Pradesh" },
    { name: "Maharashtra" },
    { name: "Manipur" },
    { name: "Meghalaya" },
    { name: "Mizoram" },
    { name: "Nagaland" },
    { name: "Odisha" },
    { name: "Punjab" },
    { name: "Rajasthan" },
    { name: "Sikkim" },
    { name: "Tamil Nadu" },
    { name: "Telangana" },
    { name: "Tripura" },
    { name: "Uttar Pradesh" },
    { name: "Uttarakhand" },
    { name: "West Bengal" },
    { name: "Delhi" },
];

export default function StateDropdown() {
    const [selected, setSelected] = useState(states[12]);
    const [open, setOpen] = useState(false);
    return (
        <div className={`dropdown state-dropdown ${open ? "show" : ""}`}>
            <div
                className="btn btn-sm d-flex align-items-center gap-2 text-white state-btn"
                onClick={() => setOpen(!open)}
            >
                <img src="https://flagcdn.com/in.svg" width="18" alt="India flag" />
                India - {selected.name}
            </div>
            {open && (
                <ul className="dropdown-menu show state-menu">
                    {states.map((state, index) => (
                        <li
                            key={index}
                            className="dropdown-item state-item"
                            onClick={() => {
                                setSelected(state);
                                setOpen(false);
                            }}
                        >
                            🇮🇳 {state.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
