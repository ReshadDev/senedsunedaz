import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import Slider from "react-slick";

import {
  AileIcon,
  LeftIcon,
  RightIcon,
  ArrowRightIcon,
  Bumb,
  Minus,
  Question,
  Company1Icon,
  Company2Icon,
  Company3Icon,
  Company4Icon,
  ErizeSnapshot,
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

  const settings = {
    dots: true,
    infinite: false,
    speed: 100,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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

        {/* DONE */}

        <section className="spesific-categories">
          <div className="container">
            <div className="spesific-categories-content">
              <div className="container">
                <div className="spesific-categories-heading-box">
                  <p>Spesifik kataqoriyalar üzrə axtar.</p>
                </div>
                <div className="spesific-categories-category-box">
                  <div className="category-box col-4">
                    <div className="category-box__heading-box">
                      <img src={AileIcon} alt="aile sekili" />
                      <p>Ailə</p>
                    </div>
                    <p className="category-box__body-text">
                      İddia, uşaq və boşanma ərizələri
                    </p>
                    <Link to="/" className="category-box__footer-box">
                      <p>Daha çox</p>
                      <img src={ArrowRightIcon} alt="" />
                    </Link>
                  </div>

                  <div className="category-box col-4">
                    <div className="category-box__heading-box">
                      <img src={AileIcon} alt="aile sekili" />
                      <p>Ailə</p>
                    </div>
                    <p className="category-box__body-text">
                      İddia, uşaq və boşanma ərizələri
                    </p>
                    <Link to="/" className="category-box__footer-box">
                      <p>Daha çox</p>
                      <img src={ArrowRightIcon} alt="" />
                    </Link>
                  </div>

                  <div className="category-box col-4">
                    <div className="category-box__heading-box">
                      <img src={AileIcon} alt="aile sekili" />
                      <p>Ailə</p>
                    </div>
                    <p className="category-box__body-text">
                      İddia, uşaq və boşanma ərizələri
                    </p>
                    <Link to="/" className="category-box__footer-box">
                      <p>Daha çox</p>
                      <img src={ArrowRightIcon} alt="" />
                    </Link>
                  </div>

                  <div className="category-box col-4">
                    <div className="category-box__heading-box">
                      <img src={AileIcon} alt="aile sekili" />
                      <p>Ailə</p>
                    </div>
                    <p className="category-box__body-text">
                      İddia, uşaq və boşanma ərizələri
                    </p>
                    <Link to="/" className="category-box__footer-box">
                      <p>Daha çox</p>
                      <img src={ArrowRightIcon} alt="" />
                    </Link>
                  </div>

                  <div className="category-box col-4">
                    <div className="category-box__heading-box">
                      <img src={AileIcon} alt="aile sekili" />
                      <p>Ailə</p>
                    </div>
                    <p className="category-box__body-text">
                      İddia, uşaq və boşanma ərizələri
                    </p>
                    <Link to="/" className="category-box__footer-box">
                      <p>Daha çox</p>
                      <img src={ArrowRightIcon} alt="" />
                    </Link>
                  </div>

                  <div className="category-box col-4">
                    <div className="category-box__heading-box">
                      <img src={AileIcon} alt="aile sekili" />
                      <p>Ailə</p>
                    </div>
                    <p className="category-box__body-text">
                      İddia, uşaq və boşanma ərizələri
                    </p>
                    <Link to="/" className="category-box__footer-box">
                      <p>Daha çox</p>
                      <img src={ArrowRightIcon} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-us-banner" id="about">
          <div className="container">
            <div className="about-us-content">
              <div className="about-us-content-box">
                <div className="left-side-box">
                  <div className="box-content">
                    <div className="box-heading">
                      <img src={Question} alt="" />
                      <p>Ərizə nədir?</p>
                    </div>
                    <div className="box-body">
                      <div className="text-box">
                        <div className="icon-box">
                          <img src={Minus} alt="" />
                        </div>
                        <p>
                          şəxsin müəyyən bir mövzuda düşüncə, şikayət və ya
                          istəklərini nəzərdə tutan müəyyən formaya malik və
                          rəsmi şəkildə yazılan müraciət formasıdır. Əslində
                          ərizələr müxtəlif formalara malik olsa da, məzmunca
                          eyni cürdür.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-side-box">
                  <div className="box-content">
                    <div className="box-heading">
                      <img src={Bumb} alt="" />
                      <p>Ərizə yazarkən nələrə diqqət etməliyik?</p>
                    </div>
                    <div className="box-body">
                      <div className="text-box">
                        <img src={Minus} alt="" />
                        <p>Sənədlərin düzgün yazılış qaydalarına</p>
                      </div>

                      <div className="text-box">
                        <img src={Minus} alt="" />
                        <p>Hərf səhvlərinin olmamasına</p>
                      </div>

                      <div className="text-box">
                        <img src={Minus} alt="" />
                        <p>Sənədlərin düzgün yazılış qaydalarına</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="company-logos">
          <div className="container">
            <div className="company-logos-content">
              <div className="slider-container">
                <Slider {...settings}>
                  <div className="slider-box">
                    <img src={Company1Icon} alt="" />
                  </div>

                  <div className="slider-box">
                    <img src={Company2Icon} alt="" />
                  </div>

                  <div className="slider-box">
                    <img src={Company3Icon} alt="" />
                  </div>

                  <div className="slider-box">
                    <img src={Company4Icon} alt="" />
                  </div>
                  <div className="slider-box">
                    <img src={Company1Icon} alt="" />
                  </div>

                  <div className="slider-box">
                    <img src={Company2Icon} alt="" />
                  </div>

                  <div className="slider-box">
                    <img src={Company3Icon} alt="" />
                  </div>

                  <div className="slider-box">
                    <img src={Company4Icon} alt="" />
                  </div>
                </Slider>
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
                        <img src={ErizeSnapshot} alt="" />
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
