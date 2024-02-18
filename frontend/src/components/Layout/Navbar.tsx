import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <header>
      <div className="container">
        <div className="nav">
          <div className="logo">
            <a className="logo-text" href="/erizeler">
              SenedSuned
            </a>
          </div>

          <div className="links">
            <Link to="about">Haqqımızda</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
