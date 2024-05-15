import React from 'react';
import { AboutCvIcon, Bank, LightBulb, RocketLaunch } from '../../assets/icons';
import NavbarCV from '../../components/LayoutCV/NavbarCV';
import FooterCV from '../../components/LayoutCV/FooterCV';

const CVAbout: React.FC = () => {
  return (
    <div id='cv-about'>
      <NavbarCV />
      <main id='maincontent' className='content'>
        <section className='cv-about-us'>
          <div className='container'>
            <div className='about-us-content'>
              <div className='page-nav-box'>
                <p>Haqqımızda</p>
              </div>

              <div className='about-us-box'>
                <div className='text-box'>
                  <p style={{ marginBottom: '10px' }}>Biz kimik?</p>

                  <p style={{ marginBottom: '10px' }}>
                    Sənəd və CV yaradılmasını asanlaşdıran online platforma.
                    Bizim missiyamız iş axtarış və sənəd hazırlama proseslərini
                    həm effektiv, həm də əlçatan və sadə etməkdir. Saytımız,
                    müxtəlif kateqoriyalar üzrə geniş ərizə və CV şablonlarını
                    təqdim edir. İstifadəçilərimiz rahat axtarış sistemi
                    vasitəsilə öz ehtiyaclarına uyğun kateqoriyaları seçə bilər,
                    ərizələrini redaktə edə bilər və lazım olan şablonları
                    asanlıqla yükləyə bilərlər.
                  </p>

                  <p style={{ marginBottom: '10px' }}>
                    CV bölməmiz, iş axtaranların öz kariyera yollarını
                    göstərərək CV hazırlamalarına imkan verir. Məlumatları daxil
                    etməklə, ATS (Applicant Tracking System) sistemlərində rahat
                    yoxlanıla bilən və HR-ların diqqətini cəlb edə biləcək
                    peşəkar CV-lər yarada bilərsiniz. Saytımızda təqdim olunan
                    şablonlar, müasir standartlara uyğun olaraq hazırlanmış və
                    dizayn edilmişdir. Saytımız sizin karyeranızı növbəti
                    səviyyəyə qaldırmaq üçün lazım olan bütün vasitələri təqdim
                    edir.
                  </p>

                  <p>
                    Biz, iş axtarış prosesinizi asanlaşdırmaq və sənəd
                    hazırlamağınızı sürətləndirmək üçün buradayıq. Peşəkar
                    həyatınızda yeni bir fəsil başlatmağa hazırsınız? Başlayaq!
                  </p>
                </div>
                <div className='img-box'>
                  <img src={AboutCvIcon} alt='' />
                </div>
              </div>

              <div className='container'>
                <div className='information-boxes'>
                  <div className='information-box col-4'>
                    <div className='box__heading'></div>

                    <div className='box__body'>
                      <img src={RocketLaunch} alt='' />
                      <p>
                        Sürətli şəkildə ərizələri hazırlayıb, yükləmə imkanı
                      </p>
                    </div>
                  </div>

                  <div className='information-box col-4'>
                    <div className='box__heading'></div>

                    <div className='box__body'>
                      <img src={LightBulb} alt='' />
                      <p>Ərizələrin düzgün yazılışı</p>
                    </div>
                  </div>

                  <div className='information-box col-4'>
                    <div className='box__heading'></div>

                    <div className='box__body'>
                      <img src={Bank} alt='' />
                      <p>Rəsmi ərizə növləri </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterCV />
    </div>
  );
};

export default CVAbout;
