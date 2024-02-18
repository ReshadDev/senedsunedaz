import React from "react";
import { Link } from "react-router-dom";

const ErrorPage: React.FC = () => {
  return (
    <div id="error">
      <main id="maincontent" className="content">
        <div className="container">
          <div className="error-page">
            <div className="error-page-content">
              <div className="error-page-text-box">
                <p id="error-icon">404</p>
                <p className="error-text">Səhifə tapılmadı</p>
              </div>

              <div className="error-page-button-box">
                <Link className="error-btn" to="/erizeler">
                  Ana səhifəyə qayıt
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ErrorPage;
