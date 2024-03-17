import React from "react";
import Container from "../Container";
import CallIcon from "../../assets/images/Phone.svg";

const HomeFooter: React.FC = () => {
  return (
    <div className="home-footer">
      <Container>
        <div className="home-footer__box">
          <div className="home-footer__logo col-2">
            <h1>SenedSuned</h1>
          </div>
          <div className="home-footer__menu col-4">
            <p className="me-20">CV yarat</p>
            <p>Erizeler</p>
          </div>
          <div className="home-footer__contact col-6">
            <p className="me-20">Elaqe</p>
            <div className="number-box">
              <img src={CallIcon} alt="" />
              <p>0125847965 </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeFooter;
