import React from "react";
import FooterCV from "../../components/LayoutCV/FooterCV";
import NavbarCV from "../../components/LayoutCV/NavbarCV";
import { ToastContainer } from "react-toastify";
import { cvdownload, cvt1, cvt2, cvt3, cvt4 } from "../../assets/icons";

const CVTemplates: React.FC = () => {
  return (
    <div id="cv">
      <NavbarCV />
      <ToastContainer />
      <main id="maincontent" className="content">
        <div className="container">
          <div className="cv-heading-box">
            <h1>CV Şablonları</h1>
          </div>

          <div className="templates">
            <div className="template-box col-3">
              <div className="img">
                <img src={cvt1} alt="" />
              </div>
              <div className="button-box">
                <a
                  href="https://onedrive.live.com/download?resid=751B0807B9033833%21215&authkey=!ADwYYAQ4OLV_x7E&em=2"
                  className="btn download-new-cv-btn"
                >
                  Download
                  <img src={cvdownload} alt="" />
                </a>
              </div>
            </div>

            <div className="template-box col-3">
              <div className="img">
                <img src={cvt2} alt="" />
              </div>
              <div className="button-box">
                <a
                  href="https://onedrive.live.com/download?resid=751B0807B9033833%21212&authkey=!AEPNJFnaFtOKV0w&em=2"
                  className="btn download-new-cv-btn"
                >
                  Download
                  <img src={cvdownload} alt="" />
                </a>
              </div>
            </div>

            <div className="template-box col-3">
              <div className="img">
                <img src={cvt3} alt="" />
              </div>
              <div className="button-box">
                <a
                  href="https://onedrive.live.com/download?resid=751B0807B9033833%21211&authkey=!AJ_5tHF7Wfx8G4I&em=2"
                  className="btn download-new-cv-btn"
                >
                  Download
                  <img src={cvdownload} alt="" />
                </a>
              </div>
            </div>

            <div className="template-box col-3">
              <div className="img">
                <img src={cvt4} alt="" />
              </div>
              <div className="button-box">
                <a
                  href="https://onedrive.live.com/download?resid=751B0807B9033833%21209&authkey=!ALnzpDyIaDIf9Do&em=2"
                  className="btn download-new-cv-btn"
                >
                  Download
                  <img src={cvdownload} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterCV />
    </div>
  );
};

export default CVTemplates;
