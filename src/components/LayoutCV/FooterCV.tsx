import React from "react";
// import CallIcon from "../../assets/images/Phone.svg";

const FooterCV: React.FC = () => {
  return (
    <footer className="foot-cv">
      <div className="container">
        <div className="foot__top">
          <div className="foot-top__left">
            <p>SenedSuned</p>
          </div>
          <div className="foot-top__right">
            {/* <p className="me-20">Elaqe</p>
            <div className="number-box">
              <img src={CallIcon} alt="" />
              <p>0125847965 </p>
            </div> */}
          </div>
        </div>
      </div>

      <div className="foot__bottom">
        <div className="container">
          <ul>
            <li>
              <a href="#">Privacy & Policy</a>
            </li>

            <li>
              <a href="#">© Copyrights</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterCV;
