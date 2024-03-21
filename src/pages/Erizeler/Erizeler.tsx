import React from "react";
import { useTypewriter } from "react-simple-typewriter";

import {
  AileIcon,
  ArrowRightIcon,
  Bumb,
  Minus,
  Question,
  erizeexample,
} from "../../assets/icons";
import SearchInput from "../../components/SearchInput";
import { Link } from "react-router-dom";
import axios from "axios";
import { Category, ProductProps } from "../../interfaces";
import { APIURL } from "../../config";

const Erizeler: React.FC = () => {
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [erizeler, setErizeler] = React.useState<[]>([]);

  const getAllDocuments = async () => {
    try {
      const { data } = await axios.get(`${APIURL}/api/application/findAll`);
      if (data?.success) {
        setErizeler(data?.documents);
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getAllDocuments();
  }, []);

  // Api Request

  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(
        `${APIURL}/api/category/getAllCategories`
      );
      if (data?.success) {
        setCategories(data?.categories);
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getAllCategories();
  }, []);

  const [typeEffect] = useTypewriter({
    words: ["kliklə"],
    loop: false,
    deleteSpeed: 100,
  });

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
                  {categories.map((category: Category) => (
                    <div className="category-box col-lg-4 col-xs-6 col-sm-6 col-md-6">
                      <div className="category-box__heading-box">
                        <img src={AileIcon} alt="aile sekili" />
                        <p>{category.name}</p>
                      </div>
                      <p className="category-box__body-text">
                        {category.description}
                      </p>
                      <Link
                        to={`category/${category.name}`}
                        className="category-box__footer-box"
                      >
                        <p>Daha çox</p>
                        <img src={ArrowRightIcon} alt="" />
                      </Link>
                    </div>
                  ))}
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div
                      key={index}
                      className="category-box col-lg-4 col-xs-6 col-sm-6 col-md-6"
                    >
                      <div className="category-box__heading-box">
                        <img src={AileIcon} alt="aile sekili" />
                        <p>Aile</p>
                      </div>
                      <p className="category-box__body-text">Kateqoriya adi</p>
                      <Link
                        to={`category/${"Aile"}`}
                        className="category-box__footer-box"
                      >
                        <p>Daha çox</p>
                        <img src={ArrowRightIcon} alt="" />
                      </Link>
                    </div>
                  ))}
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

              <div className="mostly-used-documents-box">
                {erizeler
                  .slice(0, 8)
                  .map((erize: ProductProps, index: number) => (
                    <div
                      key={index}
                      className="document-box col-xs-12 col-sm-6 col-md-6 col-lg-6"
                    >
                      <div className="document-main-box">
                        <div className="document-main-box-header">Ərizə</div>
                        <div className="document-main-box-body">
                          <img
                            width={250}
                            height={230}
                            src={`http://localhost:8080/uploads/images/${erize.imageName}`}
                            alt=""
                          />
                        </div>
                        <div className="document-main-box-footer">
                          <p>{erize.docName}</p>

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

                {Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={index}
                    className="document-box col-xs-12 col-sm-6 col-md-6 col-lg-6"
                  >
                    <div className="document-main-box">
                      <div className="document-main-box-header">Ərizə</div>
                      <div className="document-main-box-body">
                        <img
                          width={250}
                          height={230}
                          src={erizeexample}
                          alt=""
                        />
                      </div>
                      <div className="document-main-box-footer">
                        <p>Rus bölməsinə keçirilməyə dair ərizə</p>

                        <div className="action-buttons">
                          <Link to={`erize/1`} className="box-details-btn">
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

        <section
          className="about-us-banner"
          style={{ paddingBottom: "60px" }}
          id="about"
        >
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
      </main>
    </div>
  );
};

export default Erizeler;
