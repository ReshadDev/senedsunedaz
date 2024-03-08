import React from "react";
import { AboutUs, Bank, LightBulb, RocketLaunch } from "../../assets/icons";

const About: React.FC = () => {
  return (
    <div id="about">
      <main id="maincontent" className="content">
        <section className="about-us">
          <div className="container">
            <div className="about-us-content">
              <div className="page-nav-box">
                <p>Haqqımızda</p>
              </div>

              <div className="about-us-box">
                <div className="text-box">
                  <p>
                    SeneSuned minlərlə ərizə, idda ərizələri, təhsil üçün
                    arayışlar, tərcümeyi hal kimi sənəd nümünələrini saxlayır.
                    Sənədlərin düzgün yazılmasına, doldurumlasına köməklik edir.
                    SeneSuned minlərlə ərizə, idda ərizələri, təhsil üçün
                    arayışlar, tərcümeyi hal kimi sənəd nümünələrini saxlayır.
                    Sənədlərin düzgün yazılmasına, doldurumlasına köməklik
                    edir.SeneSuned minlərlə ərizə, idda ərizələri, təhsil üçün
                    arayışlar, tərcümeyi hal kimi sənəd nümünələrini saxlayır.
                    Sənədlərin düzgün yazılmasına, doldurumlasına köməklik edir.
                  </p>
                </div>
                <div className="img-box">
                  <img src={AboutUs} alt="" />
                </div>
              </div>

              <div className="container">
                <div className="information-boxes">
                  <div className="information-box col-4">
                    <div className="box__heading"></div>

                    <div className="box__body">
                      <img src={RocketLaunch} alt="" />
                      <p>
                        Sürətli şəkildə ərizələri hazırlayıb, yükləmə imkanı
                      </p>
                    </div>
                  </div>

                  <div className="information-box col-4">
                    <div className="box__heading"></div>

                    <div className="box__body">
                      <img src={LightBulb} alt="" />
                      <p>Ərizələrin düzgün yazılışı</p>
                    </div>
                  </div>

                  <div className="information-box col-4">
                    <div className="box__heading"></div>

                    <div className="box__body">
                      <img src={Bank} alt="" />
                      <p>Rəsmi ərizə növləri </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
