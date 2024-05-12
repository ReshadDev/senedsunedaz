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
import fileDownload from 'js-file-download';

interface Document {
  id: number;
  docName: string;
  docPath: string;
  name: string;
  editedName: string;
  editedDocPath: string;
  destPath: string;
  imagePath: string[];
  imageName: string | null;
  extraInput: {
    id: number;
    labelName: string;
    label: string;
    inputName: string | null;
  }[];
  downloadCount: number;
  categoryId: number;
  iframe: string | null;
}

const Erizeler: React.FC = () => {
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [erizeler, setErizeler] = React.useState<[]>([]);
  const [visitorCount, setVisitorCount] = React.useState<number>(0);
  const [totalDownloadCount, setTotalDownloadCount] = React.useState<number>(0);

  const getVisitorCount = async () => {
    try {
      const { data } = await axios.post(
        `http://localhost:8080/api/visitedcount/incrementcount`
      );
      setVisitorCount(data.count);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllDocuments = async () => {
    try {
      const { data } = await axios.get(`${APIURL}/api/application/findAll`);
      if (data?.success) {
        setErizeler(data?.documents);
        const total = sumDownloadCounts(data?.documents);
        setTotalDownloadCount(total);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const sumDownloadCounts = (documents: Document[]): number => {
    let totalDownloadCount: number = 0;

    documents.forEach((document) => {
      totalDownloadCount += document.downloadCount;
    });

    return totalDownloadCount;
  };

  React.useEffect(() => {
    getVisitorCount();
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

  const handleDownload = async (erize: ProductProps) => {
    try {
      const response = await axios.get(
        `${APIURL}/api/application/download/${erize.id}`,
        { responseType: 'blob' }
      );

      fileDownload(response.data, `${erize.docName}.docx`);

      toast.success('Sənəd uğurla yükləndi!');
    } catch (error) {
      console.error('Error downloading file:', error);
      toast.error(
        'Sənədi yükləmək mümkün olmadı. Zəhmət olmasa daha sonra cəhd edin.'
      );
    }
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
                    <p>{visitorCount}</p>
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
                    <p>{totalDownloadCount}</p>
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
                    <div
                      key={category.id}
                      className='category-box col-lg-4 col-xs-6 col-sm-6 col-md-6'
                    >
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
              <div className='sened-documents-box'>
                {erizeler
                  .slice(0, 8)
                  .map((erize: ProductProps, index: number) => (
                    <div className='sened-box col-lg-3' key={index}>
                      <div className='sened-image'>
                        <img
                          src={`${erize.imagePath}`}
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
