import { useLocation } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import MobileBottomNav from "../../pages/MobileBottomNav";

const Layout = ({ children }) => {
  const location = useLocation();

  // hide mobile nav on auth pages (optional)
  const hideOnRoutes = ["/login", "/register"];
  const shouldHideMobileNav = hideOnRoutes.includes(location.pathname);

  return (
    <>
      <Header />

      <main>{children}</main>

      {/* ❌ Hide footer on mobile */}
      <div className="d-none d-md-block">
        <Footer />
      </div>

      {/* ✅ Mobile Bottom Nav */}
      {!shouldHideMobileNav && <MobileBottomNav />}
    </>
  );
};

export default Layout;