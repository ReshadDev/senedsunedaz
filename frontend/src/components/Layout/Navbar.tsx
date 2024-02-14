import React from "react";

const Navbar: React.FC = () => {
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
            <a href="#about">Haqqımızda</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
