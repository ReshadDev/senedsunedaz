import React from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

import SearchIcon from "../assets/images/MagnifyingGlass.svg";

const Erizeler: React.FC = () => {
  return (
    <div id="erize">
      <Navbar />
      <main id="maincontent" className="content">
        <section className="search-area">
          <div className="container">
            <div className="search-area-content">
              <div className="search-area-box">
                <div className="search-area-text-box">
                  <p className="sat-1">
                    Minlərlə ərizə bir <span>kliklə</span>
                  </p>
                  <h2 className="sat-2">
                    Axtradığın ərizəni tap yüklə və doldur.
                  </h2>
                </div>
                <div className="search-area-input-box">
                  <input
                    id="main-search-input"
                    type="text"
                    placeholder="Ərizə adı və ya söz axtar"
                  />
                  <button className="search-btn">
                    <img className="search-icon" src={SearchIcon} alt="" />
                    Axtar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="information-banner">
          <div className="container">
            <div className="information-banner-content">
              <div className="information-banner-box">
                <div className="col-4">
                  <div className="text-box">
                    <p>15.000+</p>
                    <p>Sənəd-sünəd</p>
                  </div>
                </div>

                <div className="col-4">
                  <div className="text-box">
                    <p>250+</p>
                    <p>Növ ərizə</p>
                  </div>
                </div>

                <div className="col-4">
                  <div className="text-box">
                    <p>1867+</p>
                    <p>Yükləmə</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Erizeler;
