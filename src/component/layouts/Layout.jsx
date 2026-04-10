import { useLocation } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
const Layout = ({ children }) => {
  const location = useLocation();
  const showNavbar = location.pathname === "/";
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;