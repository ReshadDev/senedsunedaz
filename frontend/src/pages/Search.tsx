import React from "react";
import { ErizeSnapshot, noSearch } from "../assets/icons";
import { Link } from "react-router-dom";
import ErizeExamples from "../data";

const Search: React.FC = () => {
  const documentBoxes = Array(12)
    .fill(null)
    .map((_, index) => (
      <div key={index} className="document-box col-3">
        <div className="document-main-box">
          <div className="document-main-box-header">Ərizə</div>
          <div className="document-main-box-body">
            <img src={ErizeSnapshot} alt="" />
          </div>
          <div className="document-main-box-footer">
            <p>{ErizeExamples[0].title}</p>

            <div className="action-buttons">
              <Link
                to={`erize/${ErizeExamples[0].id}`}
                className="box-details-btn"
              >
                Ətraflı
              </Link>
              <Link className="download-btn" to="/">
                Yüklə
              </Link>
            </div>
          </div>
        </div>
      </div>
    ));

  return (
    <div id="search">
      <main id="maincontent" className="content">
        <div className="search-results">
          <div className="container">
            <div className="search-results-content">
              <div className="search-results-text-box">
                {documentBoxes.length > 0 ? (
                  <h1>‘Şikayətlər’ üçün tapılan nəticələr:</h1>
                ) : (
                  <div className="d-flex align-items-center">
                    <p className="no-search-results-text">
                      Axtarışınız üçün nəticə tapılmadı
                    </p>
                    <Link to="/erizeler/categories">Kateqoriyalara bax</Link>
                  </div>
                )}
              </div>
              {documentBoxes.length > 0 ? (
                <div className="search-results-boxes">{documentBoxes}</div>
              ) : (
                <div className="search-not-found">
                  <div className="search-not-found-icon">
                    <img src={noSearch} alt="" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Search;
