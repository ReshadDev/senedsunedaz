import React from "react";
import NavbarCV from "../../components/LayoutCV/NavbarCV";
import { ToastContainer } from "react-toastify";
import FooterCV from "../../components/LayoutCV/FooterCV";
import { Link } from "react-router-dom";
import {
  cvframe,
  cvicon1,
  cvicon2,
  cvtm1,
  cvtm2,
  cvtm3,
  cvtm4,
  step1,
  step2,
  step3,
  templatecvs,
} from "../../assets/icons";
import { ArrowRightOutlined } from "@ant-design/icons";

const CV: React.FC = () => {
  return (
    <div id="cv">
      <NavbarCV />
      <ToastContainer />

      <main id="maincontent" className="content">
        <section className="main-banner-cv">
          <div className="container">
            <div className="row main-banner-cv-content pb-80">
              <div className="banner-text-box">
                <p>
                  Bir neçə dəqiqə ərzində CV’ni hazırla, yüklə və arzuladığın
                  işi tap.
                </p>
                <Link className="btn cv-primary" to="/cv-form">
                  İndi başla
                </Link>
              </div>
              <div className="banner-logo-box">
                <img src={cvframe} alt="" />
              </div>
              <Link className="btn cv-primary-mobile" to="/cv-form">
                İndi başla
              </Link>
            </div>
          </div>
        </section>

        <section className="cv-details">
          <div className="container">
            <div className="cv-details-content pb-150">
              <div className="heading-text">
                <p className="heading-text__title">
                  CV’ni hazırlayaraq karyeranda növbəti addımı at!
                </p>

                <p>
                  CV qurucu platformamız bacarıqlarınızı, təcrübələrinizi və
                  nailiyyətlərinizi effektiv şəkildə vurğulayan peşəkar və
                  fərdiləşdirilmiş CV yaratmağınıza kömək etmək üçün nəzərdə
                  tutulmuşdur.
                </p>
              </div>
              <div className="details-boxes">
                <div className="details-box col-3">
                  <div className="details-box__icon">
                    <img src={cvicon1} alt="" />
                  </div>
                  <div className="details-box__body">
                    <p>Standartlara uyğun</p>
                    <p>
                      ATS sistemlərində keçən və işə qəbul standartlarına uyğun
                      şablon
                    </p>
                  </div>
                </div>
                <div className="details-box col-3">
                  <div className="details-box__icon">
                    <img src={cvicon2} alt="" />
                  </div>
                  <div className="details-box__body">
                    <p>Sürətli və asan</p>
                    <p>5 dəqiqə ərzində CV’ini hazırla</p>
                  </div>
                </div>
                <div className="details-box col-3">
                  <div className="details-box__icon">
                    <img src={cvicon1} alt="" />
                  </div>
                  <div className="details-box__body">
                    <p>PDF formatda yükləmə</p>
                    <p>CV’ni hazırladıqdan sonra pdf formatda yüklə</p>
                  </div>
                </div>
                <div className="details-box col-3">
                  <div className="details-box__icon">
                    <img src={cvicon2} alt="" />
                  </div>
                  <div className="details-box__body">
                    <p>Yüksək işə qəbul şansı </p>
                    <p>
                      Peşəkar CV ilə siz bütün digər müraciət edənlər arasında
                      fəqləncəksiniz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="how-it-works">
          <div className="container">
            <div className="how-it-works-content pb-100">
              <div className="cv-templates-box">
                <img src={templatecvs} alt="" />
              </div>
              <div className="how-it-works-box">
                <h1 className="heading-text">Necə işləyir?</h1>
                <div className="steps">
                  <div className="step-box">
                    <div className="step-box__icon">
                      <img src={step1} alt="" />
                      <div className="line" />
                    </div>
                    <div className="step-box__text">
                      <p>Qeydiyyatdan keçmədən CV yarat</p>
                      <p>
                        İndi başla düyməsini sıxaraq məlumat dolduma bölməsinə
                        keçid et
                      </p>
                    </div>
                  </div>
                  <div className="step-box">
                    <div className="step-box__icon">
                      <img src={step2} alt="" />
                      <div className="line" />
                    </div>
                    <div className="step-box__text">
                      <p>Xanaları doldur</p>
                      <p>Qarşına çıxan xanaları doldur və sonda şablonu seç.</p>
                    </div>
                  </div>
                  <div className="step-box">
                    <div className="step-box__icon">
                      <img src={step3} alt="" />
                    </div>
                    <div className="step-box__text">
                      <p>Yüklə və paylaş</p>
                      <p>
                        CV hazır olduqdan sonra yüklə və işə müraciətə başla!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cv-templates">
          <div className="container">
            <div className="cv-templates-content pb-150">
              <div className="heading-text">
                <p className="heading-text__title">Şablonlar</p>
                <p>
                  Məlumat xanalarını doldurduqdan sonra istədiyin şablonu seç və
                  CV’in həmin şablon üzərində hazırlansın.
                </p>
              </div>
              <div className="template-boxes">
                <div className="template-box col-3">
                  <img src={cvtm1} alt="" />
                </div>

                <div className="template-box col-3">
                  <img src={cvtm2} alt="" />
                </div>

                <div className="template-box col-3">
                  <img src={cvtm3} alt="" />
                </div>

                <div className="template-box col-3">
                  <img src={cvtm4} alt="" />
                </div>
              </div>

              <div className="button-box">
                <Link className="btn cv-primary" to="/cv-form">
                  CV yarat
                  <ArrowRightOutlined />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterCV />
    </div>
  );
};

export default CV;
