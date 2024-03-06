import React from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { CaretLeft, CaretRight, noSearch } from "../assets/icons";
import { useSearch } from "../context/search";
import config from "../config";
import { useNavigate } from "react-router-dom";
import { ISearchProps } from "../interfaces";

const Search: React.FC = () => {
  const apiUrl = config.apiURL;

  const [values] = useSearch();

  const navigate = useNavigate();

  React.useEffect(() => {
    localStorage.setItem("searchResults", JSON.stringify(values.results));
    localStorage.setItem("searchKeyword", values.keyword || "");
  }, [values.results, values.keyword]);

  // Retrieve search keyword from localStorage on component mount

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


  return (
    <div id="search">
      <main id="maincontent" className="content">
        <div className="search-results">
          <div className="container">
            <div className="search-results-content">
              <div className="search-results-text-box">
                {values?.results.length < 1 ? (
                  <div className="d-flex align-items-center">
                    <p className="no-search-results-text">
                      Axtarışınız üçün nəticə tapılmadı
                    </p>
                    <Link to="/erizeler/all">Erizelere bax</Link>
                  </div>
                ) : (
                  <h1>{`‘${values.keyword}’ üçün tapılan nəticələr:`}</h1>
                )}
              </div>
              {values?.results.length > 0 ? (
                <div className="search-results-boxes">
                  {displayedResults.map((result: ISearchProps) => (
                    <div key={result.id} className="document-box col-3">
                      <div className="document-main-box">
                        <div className="document-main-box-header">Ərizə</div>
                        <div className="document-main-box-body">
                          <img
                            width={250}
                            height={230}
                            src={`${apiUrl}/uploads/images/${result.imageName}`}
                            alt=""
                          />
                        </div>
                        <div className="document-main-box-footer">
                          <p>{result.docName}</p>

                          <div className="action-buttons">
                            <button
                              onClick={() => handleDetailsClick(result)}
                              className="box-details-btn"
                            >
                              Ətraflı
                            </button>
                            <Link className="download-btn" to="/">
                              Yüklə
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="search-not-found">
                  <div className="search-not-found-icon">
                    <img src={noSearch} alt="" />
                  </div>
                </div>
              )}

              {values?.results.length > 0 && (
                <div className="pagination">
                  <ReactPaginate
                    previousLabel={<img src={CaretLeft} alt="Previous" />}
                    nextLabel={<img src={CaretRight} alt="Next" />}
                    breakLabel={"..."}
                    pageCount={Math.ceil(values?.results.length / itemsPerPage)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageChange}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Search;
