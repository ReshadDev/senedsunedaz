import React from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { CaretLeft, CaretRight, noSearch } from '../../assets/icons';
import { useSearch } from '../../context/search';
import { useNavigate } from 'react-router-dom';
import { IProductProps, ISearchProps, ProductProps } from '../../interfaces';
import { toast } from 'react-toastify';
import { APIURL } from '../../constants';
import axios from 'axios';
import fileDownload from 'js-file-download';

const Search: React.FC = () => {
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

  const [values] = useSearch();

  const navigate = useNavigate();

  React.useEffect(() => {
    localStorage.setItem('searchResults', JSON.stringify(values.results));
    localStorage.setItem('searchKeyword', values.keyword || '');
  }, [values.results, values.keyword]);

  const [currentPage, setCurrentPage] = React.useState(0);
  const itemsPerPage = 8;

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const displayedResults = values?.results.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handleDetailsClick = (result: ISearchProps) => {
    const link = `/erizeler/erize/${result.id}`;
    navigate(link);
  };

  const handleDownload = async (erize: ProductProps | IProductProps) => {
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
    <div id='search'>
      <div className='search-results'>
        <div className='container'>
          <div className='search-results-content'>
            <div className='search-results-text-box'>
              {values?.results.length < 1 ? (
                <div className='no-search-text'>
                  <p className='no-search-results-text'>
                    Axtarışınız üçün nəticə tapılmadı
                  </p>
                </div>
              ) : (
                <h1>{`‘${values.keyword}’ üçün tapılan nəticələr:`}</h1>
              )}
            </div>
            {values?.results.length > 0 ? (
              <div className='search-results-boxes'>
                {displayedResults.map(
                  (result: IProductProps, index: number) => (
                    <div className='sened-box col-lg-3' key={index}>
                      <div className='sened-image'>
                        <img
                          src={`${result.imagePath}`}
                          className='img-fluid'
                        />
                      </div>
                      <div className='sened-box-body'>
                        <div className='sened-text'>
                          <p>{result.docName}</p>
                        </div>
                        <div className='sened-buttons'>
                          <a
                            onClick={() => handleDetailsClick(result)}
                            className='box-details-btn'
                          >
                            Ətraflı
                          </a>
                          <a
                            onClick={() => handleDownload(result)}
                            className='download-btn'
                          >
                            Yüklə
                          </a>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            ) : (
              <div className='search-not-found'>
                <div className='search-not-found-icon'>
                  <img src={noSearch} className='img-fluid' alt='' />
                </div>
              </div>
            )}
          </div>
          {values?.results.length > 0 && (
            <div className='pagination'>
              <ReactPaginate
                previousLabel={<img src={CaretLeft} alt='Previous' />}
                nextLabel={<img src={CaretRight} alt='Next' />}
                breakLabel={'...'}
                pageCount={Math.ceil(values?.results.length / itemsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageChange}
                containerClassName={'pagination'}
                activeClassName={'active'}
              />
            </div>
          )}
        </div>
      </div>
      {values?.results.length < 1 && (
        <section className='mostly-used-documents'>
          <div className='container'>
            <div className='mostly-used-documents-content'>
              <div className='mostly-used-documents-heading-box'>
                <p>Bu ərizələrə baxa bilərsiniz</p>
              </div>

              <div className='sened-documents-box'>
                {erizeler
                  .slice(2, 6)
                  .map((erize: ProductProps, index: number) => (
                    <div className='sened-box col-lg-3' key={index}>
                      <div className='sened-image'>
                        <img src={`${erize.imagePath}`} className='img-fluid' />
                      </div>
                      <div className='sened-box-body'>
                        <div className='sened-text'>
                          <p>{erize.docName}</p>
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
      )}
    </div>
  );
};

export default Search;
