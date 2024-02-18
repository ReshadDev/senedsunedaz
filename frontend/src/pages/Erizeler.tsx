import React from "react";
import { useTypewriter } from "react-simple-typewriter";

import {
  AileIcon,
  ErizeIcon,
  LeftIcon,
  RightIcon,
  ErizeExample,
  BiznesIcon,
  HuquqiIcon,
} from "../assets/icons";
import SearchInput from "../components/SearchInput";
import { Link } from "react-router-dom";
import ErizeExamples, { ErizeExampleProps } from "../data";

const Erizeler: React.FC = () => {
  const [typeEffect] = useTypewriter({
    words: ["kliklə"],
    loop: false,
    deleteSpeed: 100,
  });

  const [data] = React.useState<ErizeExampleProps[]>(ErizeExamples);

  return (
    <div id="erize">
      <main id="maincontent" className="content">
        <section className="search-area">
          <div className="container">
            <div className="search-area-content">
              <div className="search-area-box">
                <div className="search-area-text-box">
                  <p className="sat-1">
                    Minlərlə ərizə bir <span>{typeEffect}</span>
                  </p>
                  <h2 className="sat-2">
                    Axtradığın ərizəni tap yüklə və doldur.
                  </h2>
                </div>
                <div className="search-area-input-box">
                  <SearchInput />
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

        <section className="spesific-categories">
          <div className="container">
            <div className="spesific-categories-content">
              <div className="spesific-categories-heading-box">
                <p>Spesifik kataqoriyalar üzrə axtar.</p>
              </div>
              <div className="spesific-categories-category-box">
                <div className="category-box col-4">
                  <div className="category-box-heading-text">
                    <div className="icon-box">
                      <img src={AileIcon} alt="" />
                    </div>
                    <div className="text-box">
                      <p>Ailə</p>
                    </div>
                  </div>
                  <div className="category-box-list">
                    <ul>
                      <li>
                        <a href="#">Ərizənin adı</a>
                      </li>
                      <li>
                        <a href="#">Ərizənin adı</a>
                      </li>
                      <li>
                        <a href="#">Ərizənin adı</a>
                      </li>
                      <li>
                        <a href="#">Ərizənin adı</a>
                      </li>
                      <li>
                        <a href="#">Ərizənin adı</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="category-box col-4">
                  <div className="category-box-heading-text">
                    <div className="icon-box">
                      <img src={BiznesIcon} alt="" />
                    </div>
                    <div className="text-box">
                      <p>Biznes</p>
                    </div>
                  </div>
                  <div className="category-box-list">
                    <ul>
                      <li>
                        <a href="#">Ərizənin adı</a>
                      </li>
                      <li>
                        <a href="#">Ərizənin adı</a>
                      </li>
                      <li>
                        <a href="#">Ərizənin adı</a>
                      </li>
                      <li>
                        <a href="#">Ərizənin adı</a>
                      </li>
                      <li>
                        <a href="#">Ərizənin adı</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="category-box col-4">
                  <div className="category-box-heading-text">
                    <div className="icon-box">
                      <img src={HuquqiIcon} alt="" />
                    </div>
                    <div className="text-box">
                      <p>Hüquqi</p>
                    </div>
                  </div>
                  <div className="category-box-list">
                    <ul>
                      <li>
                        <a href="#">Ərizənin adı</a>
                      </li>
                      <li>
                        <a href="#">Ərizənin adı</a>
                      </li>
                      <li>
                        <a href="#">Ərizənin adı</a>
                      </li>
                      <li>
                        <a href="#">Ərizənin adı</a>
                      </li>
                      <li>
                        <a href="#">Ərizənin adı</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="category-box col-4">
                  <div className="category-box-heading-text">
                    <div className="icon-box">
                      <img src={AileIcon} alt="" />
                    </div>
                    <div className="text-box">
                      <p>Ailə</p>
                    </div>
                  </div>
                  <div className="category-box-list">
                    <ul>
                      <li>
                        <a href="#">Ərizənin adı</a>
                      </li>
                      <li>
                        <a href="#">Ərizənin adı</a>
                      </li>
                      <li>
                        <a href="#">Ərizənin adı</a>
                      </li>
                      <li>
                        <a href="#">Ərizənin adı</a>
                      </li>
                      <li>
                        <a href="#">Ərizənin adı</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="category-box col-4">
                  <div className="category-box-heading-text">
                    <div className="icon-box">
                      <img src={AileIcon} alt="" />
                    </div>
                    <div className="text-box">
                      <p>Ailə</p>
                    </div>
                  </div>
                  <div className="category-box-list">
                    <ul>
                      <li>
                        <a href="#">Ərizənin adı</a>
                      </li>
                      <li>
                        <a href="#">Ərizənin adı</a>
                      </li>
                      <li>
                        <a href="#">Ərizənin adı</a>
                      </li>
                      <li>
                        <a href="#">Ərizənin adı</a>
                      </li>
                      <li>
                        <a href="#">Ərizənin adı</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="category-box col-4">
                  <div className="category-box-heading-text">
                    <div className="icon-box">
                      <img src={AileIcon} alt="" />
                    </div>
                    <div className="text-box">
                      <p>Ailə</p>
                    </div>
                  </div>
                  <div className="category-box-list">
                    <ul>
                      <li>
                        <a href="#">Ərizənin adı</a>
                      </li>
                      <li>
                        <a href="#">Ərizənin adı</a>
                      </li>
                      <li>
                        <a href="#">Ərizənin adı</a>
                      </li>
                      <li>
                        <a href="#">Ərizənin adı</a>
                      </li>
                      <li>
                        <a href="#">Ərizənin adı</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <button className="more-btn">Daha çoxuna bax</button>
            </div>
          </div>
        </section>

        <section className="about-us-banner" id="about">
          <div className="container">
            <div className="about-us-content">
              <div className="about-us-content-box">
                <div className="about-us-logo-box">
                  <img src={ErizeIcon} alt="men sekilem" />
                </div>
                <div className="about-us-text-box">
                  <p>Haqqımızda</p>
                  <p>
                    SeneSuned minlərlə ərizə, idda ərizələri, təhsil üçün
                    arayışlar, tərcümeyi hal kimi sənəd nümünələrini saxlayır.
                    Sənədlərin düzgün yazılmasına, doldurumlasına köməklik edir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mostly-used-documents">
          <div className="container">
            <div className="mostly-used-documents-content">
              <div className="mostly-used-documents-heading-box">
                <p>Ən çox axtarılan ərizələr</p>
              </div>
              <div className="pagination-box">
                <div className="left-icon">
                  <img src={LeftIcon} alt="" />
                </div>
                <div className="right-icon">
                  <img src={RightIcon} alt="" />
                </div>
              </div>
              <div className="mostly-used-documents-box">
                {data.map((erize: ErizeExampleProps, index: number) => (
                  <div key={index} className="document-box col-3">
                    <div className="document-main-box">
                      <div className="document-main-box-header">Ərizə</div>
                      <div className="document-main-box-body">
                        <img src={ErizeExample} alt="" />
                      </div>
                      <div className="document-main-box-footer">
                        <p>{erize.title}</p>

                        <div className="action-buttons">
                          <Link
                            to={`erize/${erize.id}`}
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
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Erizeler;
