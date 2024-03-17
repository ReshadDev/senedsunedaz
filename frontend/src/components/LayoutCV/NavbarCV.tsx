import React from "react";
import { Link } from "react-router-dom";

const NavbarCV: React.FC = () => {
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
            <Link to="/templates">Şablonlar</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarCV;
