import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';

import {
  AileIcon,
  ArrowRightIcon,
  Bumb,
  Minus,
  Question,
} from '../../assets/icons';
import SearchInput from '../../components/SearchInput';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Category, ProductProps } from '../../interfaces';
import { APIURL } from '../../config';
import { toast } from 'react-toastify';
import { useDownloadCount } from '../../context/Down';

const Erizeler: React.FC = () => {
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [erizeler, setErizeler] = React.useState<[]>([]);

  const getAllDocuments = async () => {
    try {
      const { data } = await axios.get(`${APIURL}/api/application/findAll`);
      if (data?.success) {
        setErizeler(data?.documents);
      }
      console.log(erizeler);
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
    words: ['kliklə'],
    loop: false,
    deleteSpeed: 100,
  });

  const { incrementDownloadCount } = useDownloadCount();
  const { downloadCount } = useDownloadCount();

  const handleDownload = async (product: ProductProps) => {
    const fileName = product?.name;
    const s3DownloadUrl = `https://senedsunedstorages.s3.amazonaws.com/${product.name}`;

    const downloadLink = document.createElement('a');
    downloadLink.href = s3DownloadUrl;
    downloadLink.download = fileName || 'downloadedFile';

    document.body.appendChild(downloadLink);
    downloadLink.click();

    document.body.removeChild(downloadLink);

    toast.success('Sənəd uğurla yükləndi!');

    incrementDownloadCount();
  };

  return (
    <div id='erize'>
      <main id='maincontent' className='content'>
        <section className='search-area'>
          <div className='container'>
            <div className='search-area-content'>
              <div className='search-area-box'>
                <div className='search-area-text-box'>
                  <p className='sat-1'>
                    Minlərlə ərizə bir <span>{typeEffect}</span>
                  </p>
                  <h2 className='sat-2'>
                    Axtradığın ərizəni tap yüklə və doldur.
                  </h2>
                </div>
                <div className='search-area-input-box'>
                  <SearchInput />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='information-banner'>
          <div className='container'>
            <div className='information-banner-content'>
              <div className='information-banner-box'>
                <div className='col-4'>
                  <div className='text-box'>
                    <p>140</p>
                    <p>Ziyarətçi</p>
                  </div>
                </div>

                <div className='col-4'>
                  <div className='text-box'>
                    <p>{erizeler.length}</p>
                    <p>Ərizələr</p>
                  </div>
                </div>

                <div className='col-4'>
                  <div className='text-box'>
                    <p>{downloadCount}</p>
                    <p>Yükləmə</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DONE */}

        <section className='spesific-categories'>
          <div className='container'>
            <div className='spesific-categories-content'>
              <div className='container'>
                <div className='spesific-categories-heading-box'>
                  <p>Spesifik kataqoriyalar üzrə axtar.</p>
                </div>
                <div className='spesific-categories-category-box'>
                  {categories.map((category: Category) => (
                    <div className='category-box col-lg-4 col-xs-6 col-sm-6 col-md-6'>
                      <div className='category-box__heading-box'>
                        <img src={AileIcon} alt='aile sekili' />
                        <p>{category.name}</p>
                      </div>
                      <p className='category-box__body-text'>
                        {category.description}
                      </p>
                      <Link
                        to={`category/${category.name}`}
                        className='category-box__footer-box'
                      >
                        <p>Daha çox</p>
                        <img src={ArrowRightIcon} alt='' />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='mostly-used-documents'>
          <div className='container'>
            <div className='mostly-used-documents-content'>
              <div className='mostly-used-documents-heading-box'>
                <p>Ən çox axtarılan ərizələr</p>
              </div>

              {/* <div className='mostly-used-documents-box'>
                {erizeler
                  .slice(0, 8)
                  .map((erize: ProductProps, index: number) => (
                    <div
                      key={index}
                      className='document-box col-xs-12 col-sm-6 col-md-6 col-lg-6'
                    >
                      <div className='document-main-box'>
                        <div className='document-main-box-header'>Ərizə</div>
                        <div className='document-main-box-body'>
                          <img
                            width={250}
                            height={230}
                            src={`https://senedsunedstorages.s3.amazonaws.com/${erize.imagePath}`}
                            alt=''
                          />
                        </div>
                        <div className='document-main-box-footer'>
                          <p>{erize.docName}</p>

                          <div className='action-buttons'>
                            <Link
                              to={`erize/${erize.id}`}
                              className='box-details-btn'
                            >
                              Ətraflı
                            </Link>
                            <a
                              onClick={() => handleDownload(erize)}
                              className='download-btn'
                            >
                              Yüklə
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div> */}

              <div className='sened-documents-box'>
                {erizeler
                  .slice(0, 8)
                  .map((erize: ProductProps, index: number) => (
                    <div className='sened-box col-lg-3' key={index}>
                      <div className='sened-image'>
                        <img
                          src={`https://senedsunedstorages.s3.amazonaws.com/${erize.imagePath}`}
                          className='img-fluid'
                        />
                      </div>
                      <div className='sened-box-body'>
                        <div className='sened-text'>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ea aperiam ex illo odio. Sequi quaerat magni
                            delectus, assumenda sint ad!
                          </p>
                        </div>
                        <div className='sened-buttons'>
                          <Link
                            to={`erize/${erize.id}`}
                            className='box-details-btn'
                          >
                            Ətraflı
                          </Link>
                          <a
                            onClick={() => handleDownload(erize)}
                            className='download-btn'
                          >
                            Yüklə
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                {erizeler
                  .slice(0, 8)
                  .map((erize: ProductProps, index: number) => (
                    <div className='sened-box col-lg-3' key={index}>
                      <div className='sened-image'>
                        <img
                          src={`https://senedsunedstorages.s3.amazonaws.com/${erize.imagePath}`}
                          className='img-fluid'
                        />
                      </div>
                      <div className='sened-box-body'>
                        <div className='sened-text'>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ea aperiam ex illo odio. Sequi quaerat magni
                            delectus, assumenda sint ad!
                          </p>
                        </div>
                        <div className='sened-buttons'>
                          <Link
                            to={`erize/${erize.id}`}
                            className='box-details-btn'
                          >
                            Ətraflı
                          </Link>
                          <a
                            onClick={() => handleDownload(erize)}
                            className='download-btn'
                          >
                            Yüklə
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                {erizeler
                  .slice(0, 8)
                  .map((erize: ProductProps, index: number) => (
                    <div className='sened-box col-lg-3' key={index}>
                      <div className='sened-image'>
                        <img
                          src={`https://senedsunedstorages.s3.amazonaws.com/${erize.imagePath}`}
                          className='img-fluid'
                        />
                      </div>
                      <div className='sened-box-body'>
                        <div className='sened-text'>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ea aperiam ex illo odio. Sequi quaerat magni
                            delectus, assumenda sint ad!
                          </p>
                        </div>
                        <div className='sened-buttons'>
                          <Link
                            to={`erize/${erize.id}`}
                            className='box-details-btn'
                          >
                            Ətraflı
                          </Link>
                          <a
                            onClick={() => handleDownload(erize)}
                            className='download-btn'
                          >
                            Yüklə
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                {erizeler
                  .slice(0, 8)
                  .map((erize: ProductProps, index: number) => (
                    <div className='sened-box col-lg-3' key={index}>
                      <div className='sened-image'>
                        <img
                          src={`https://senedsunedstorages.s3.amazonaws.com/${erize.imagePath}`}
                          className='img-fluid'
                        />
                      </div>
                      <div className='sened-box-body'>
                        <div className='sened-text'>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ea aperiam ex illo odio. Sequi quaerat magni
                            delectus, assumenda sint ad!
                          </p>
                        </div>
                        <div className='sened-buttons'>
                          <Link
                            to={`erize/${erize.id}`}
                            className='box-details-btn'
                          >
                            Ətraflı
                          </Link>
                          <a
                            onClick={() => handleDownload(erize)}
                            className='download-btn'
                          >
                            Yüklə
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>

        <section className='about-us-banner' id='about'>
          <div className='container'>
            <div className='about-us-content'>
              <div className='about-us-content-box'>
                <div className='left-side-box'>
                  <div className='box-content'>
                    <div className='box-heading'>
                      <img src={Question} alt='' />
                      <p>Ərizə nədir?</p>
                    </div>
                    <div className='box-body'>
                      <div className='text-box'>
                        <div className='icon-box'>
                          <img src={Minus} alt='' />
                        </div>
                        <p>
                          şəxsin müəyyən bir mövzuda düşüncə, şikayət və ya
                          istəklərini nəzərdə tutan müəyyən formaya malik və
                          rəsmi şəkildə yazılan müraciət formasıdır. Əslində
                          ərizələr müxtəlif formalara malik olsa da, məzmunca
                          eyni cürdür.{' '}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='right-side-box'>
                  <div className='box-content'>
                    <div className='box-heading'>
                      <img src={Bumb} alt='' />
                      <p>Ərizə yazarkən nələrə diqqət etməliyik?</p>
                    </div>
                    <div className='box-body'>
                      <div className='text-box'>
                        <img src={Minus} alt='' />
                        <p>Sənədlərin düzgün yazılış qaydalarına</p>
                      </div>

                      <div className='text-box'>
                        <img src={Minus} alt='' />
                        <p>Hərf səhvlərinin olmamasına</p>
                      </div>

                      <div className='text-box'>
                        <img src={Minus} alt='' />
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
