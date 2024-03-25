import React from "react";
import FooterCV from "../../components/LayoutCV/FooterCV";
import NavbarCV from "../../components/LayoutCV/NavbarCV";
import { ToastContainer } from "react-toastify";
// import { cvdownload, cvt1, cvt2, cvt3, cvt4 } from "../../assets/icons";

const CVTemplates: React.FC = () => {
  return (
    <div id="cv-templates">
      <NavbarCV />
      <ToastContainer />
      <div className="cv-template-content">
        <div className="container">
          <div className="cv-heading-box">
            <h1>CV Şablonları</h1>
          </div>
        </div>
      </div>

      <FooterCV />
    </div>
  );
};

export default CVTemplates;
