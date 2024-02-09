import React from "react";
import Container from "../Container";

const HomeFooter: React.FC = () => {
  return (
    <div className="home-footer">
      <Container>
        <div className="row">
          <div className="home-footer__logo col-2">SenedSuned</div>
          <div className="home-footer__menu col-4">
            <h1 className="me-20">CV yarat</h1>
            <h1>Erizeler</h1>
          </div>
          <div className="home-footer__contact col-6">
            <h1 className="me-20">Elaqe</h1>
            <h1>0559107999</h1>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeFooter;
