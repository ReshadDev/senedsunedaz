import React from "react";
import FooterCV from "../../components/LayoutCV/FooterCV";
import NavbarCV from "../../components/LayoutCV/NavbarCV";
import { ToastContainer } from "react-toastify";
import { cvdownload, cvtm1, cvtm2, cvtm3, cvtm4 } from "../../assets/icons";

const CVTemplates: React.FC = () => {
  return (
    <div id="cv-templates">
      <NavbarCV />
      <ToastContainer />
      <div className="cv-template-content">
        <div className="container">
          <div className="cv-templates-content">
            <div className="heading-text">
              <p className="heading-text__title">Şablonlar</p>
            </div>
            <div className="template-boxes">
              <div className="template-box col-3">
                <img src={cvtm1} alt="" />

                <div className="button-box">
                  <a className="btn download-new-cv-btn">
                    Download
                    <img src={cvdownload} alt="" />
                  </a>
                </div>
              </div>

              <div className="template-box col-3">
                <img src={cvtm2} alt="" />

                <div className="button-box">
                  <a className="btn download-new-cv-btn">
                    Download
                    <img src={cvdownload} alt="" />
                  </a>
                </div>
              </div>

              <div className="template-box col-3">
                <img src={cvtm3} alt="" />

                <div className="button-box">
                  <a className="btn download-new-cv-btn">
                    Download
                    <img src={cvdownload} alt="" />
                  </a>
                </div>
              </div>

              <div className="template-box col-3">
                <img src={cvtm4} alt="" />

                <div className="button-box">
                  <a className="btn download-new-cv-btn">
                    Download
                    <img src={cvdownload} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterCV />
    </div>
  );
};

export default CVTemplates;
