import React from "react";
import NavbarCV from "../../components/LayoutCV/NavbarCV";
import { ToastContainer } from "react-toastify";
import FooterCV from "../../components/LayoutCV/FooterCV";
import { Link } from "react-router-dom";
import {
  CvBannerImg,
  cv1,
  cvicon1,
  cvicon2,
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
            <div className="row main-banner-cv-content pb-100">
              <div className="banner-text-box">
                <p>
                  Bir neçə dəqiqə ərzində CV’ni hazırla, yüklə və arzuladığın
                  işi tap.
                </p>
                <Link className="btn cv-primary" to="/">
                  İndi başla
                </Link>
              </div>
              <div className="banner-logo-box">
                <img src={CvBannerImg} alt="" />
              </div>
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
                    <p>Standartlara ugyun</p>
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
                    <p>Standartlara ugyun</p>
                    <p>
                      ATS sistemlərində keçən və işə qəbul standartlarına uyğun
                      şablon
                    </p>
                  </div>
                </div>
                <div className="details-box col-3">
                  <div className="details-box__icon">
                    <img src={cvicon1} alt="" />
                  </div>
                  <div className="details-box__body">
                    <p>Standartlara ugyun</p>
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
                    <p>Standartlara ugyun</p>
                    <p>
                      ATS sistemlərində keçən və işə qəbul standartlarına uyğun
                      şablon
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
                      <p>Qeydiyyatdan keçmədən CV yarat</p>
                      <p>
                        İndi başla düyməsini sıxaraq məlumat dolduma bölməsinə
                        keçid et
                      </p>
                    </div>
                  </div>
                  <div className="step-box">
                    <div className="step-box__icon">
                      <img src={step3} alt="" />
                    </div>
                    <div className="step-box__text">
                      <p>Qeydiyyatdan keçmədən CV yarat</p>
                      <p>
                        İndi başla düyməsini sıxaraq məlumat dolduma bölməsinə
                        keçid et
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
                  <img src={cv1} alt="" />
                </div>

                <div className="template-box col-3">
                  <img src={cv1} alt="" />
                </div>

                <div className="template-box col-3">
                  <img src={cv1} alt="" />
                </div>

                <div className="template-box col-3">
                  <img src={cv1} alt="" />
                </div>
              </div>

              <div className="button-box">
                <Link className="btn cv-primary" to="/">
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
