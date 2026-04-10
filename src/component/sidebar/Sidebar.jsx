// import { Link } from "react-router-dom";
// import Logo from "../UI/Logo";
// import Button from "../UI/Button";
// import StateDropdown from "../Dropdown/StateDropdown";

// export default function Sidebar({ isOpen, toggleSidebar }) {
//     return (
//         <>
//             {isOpen && (
//                 <div
//                     className="sidebar-overlay"
//                     onClick={toggleSidebar}
//                 ></div>
//             )}
//             <div className={`sidebar ${isOpen ? "open" : ""}`}>
//                 <div className="sidebar-header d-flex justify-content-between align-items-center">
//                     <Link to="/">
//                         <Logo />
//                     </Link>
//                     <button
//                         className="btn-close"
//                         onClick={toggleSidebar}
//                     ></button>
//                 </div>
//                 <ul className="sidebar-menu">
//                     <li>
//                         <Link to="/" onClick={toggleSidebar}>
//                             Home
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="/donate" onClick={toggleSidebar}>
//                             Donate Blood
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="/find-blood#request-blood" onClick={toggleSidebar}>
//                             Request Blood
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="/find-blood" onClick={toggleSidebar}>
//                             Find Donors
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="/hospitals" onClick={toggleSidebar}>
//                             Hospitals & Blood Banks
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="/dashboards" onClick={toggleSidebar}>
//                             Dashboards
//                         </Link>
//                     </li>
//                 </ul>
//                 <div className="sidebar-state">
//                     <StateDropdown />
//                 </div>
//                 <div className="sidebar-buttons">
//                     <Button
//                         route="/login"
//                         variant="outline"
//                         size="md"
//                         className="w-100 mb-2"
//                     >
//                         Login
//                     </Button>
//                     <Button
//                         route="/register"
//                         variant="primary"
//                         size="md"
//                         className="w-100"
//                     >
//                         Register
//                     </Button>
//                 </div>
//             </div>
//         </>
//     );
// }
