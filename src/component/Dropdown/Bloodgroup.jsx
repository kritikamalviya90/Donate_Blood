import { useState } from "react";
const bloodGroups = [
  "A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"
];
export default function BloodGroup() {
  const [selected, setSelected] = useState(bloodGroups[0]);
  const [open, setOpen] = useState(false);
  return (
    <div className={`dropdown state-dropdown ${open ? "show" : ""}`}>
      <div
        className="btn btn-sm d-flex align-items-center gap-2 ui-text-white state-btn"
        onClick={() => setOpen(!open)}
      >
        🩸 {selected}
      </div>
      {open && (
        <ul className="dropdown-menu show state-menu">
          {bloodGroups.map((bg, index) => (
            <li
              key={index}
              className="dropdown-item state-item"
              onClick={() => {
                setSelected(bg);
                setOpen(false);
              }}
            >
              🩸 {bg}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
