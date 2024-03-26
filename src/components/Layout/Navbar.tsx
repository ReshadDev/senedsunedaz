// import { MenuOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  // const [isMobileMenuOpen, setIsMobileMenuOpen] =
  //   React.useState<boolean>(false);

  // const toggleMobileMenu = () => {
  //   setIsMobileMenuOpen(!isMobileMenuOpen);
  // };
  return (
    <header>
      <div className="container">
        <div className="nav">
          <div className="logo">
            <a className="logo-text" href="/">
              SenedSuned
            </a>
          </div>

          <div className="links">
            <Link to="about">Haqqımızda</Link>
            <Link to="all">Ərizələr</Link>
          </div>

          {/* <div className="mobile-menu" onClick={toggleMobileMenu}>
            <MenuOutlined />
          </div> */}

          {/* Mobile Menu */}
          {/* <div
            className={`mobile-menu-dropdown ${isMobileMenuOpen ? "open" : ""}`}
          >
            <Link to="/about" onClick={toggleMobileMenu}>
              Haqqımızda
            </Link>
            <Link to="/all" onClick={toggleMobileMenu}>
              Ərizələr
            </Link>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
