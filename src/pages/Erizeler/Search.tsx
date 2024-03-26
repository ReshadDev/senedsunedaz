import React from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { CaretLeft, CaretRight, noSearch } from "../../assets/icons";
import { useSearch } from "../../context/search";
import { useNavigate } from "react-router-dom";
import { IProductProps, ISearchProps } from "../../interfaces";
import { toast } from "react-toastify";

const Search: React.FC = () => {
  const [values] = useSearch();

  const navigate = useNavigate();

  React.useEffect(() => {
    localStorage.setItem("searchResults", JSON.stringify(values.results));
    localStorage.setItem("searchKeyword", values.keyword || "");
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

  const handleDownload = async (product: IProductProps) => {
    const fileName = product?.name;
    const s3DownloadUrl = `https://senedsunedstorages.s3.amazonaws.com/${product.name}`;

    const downloadLink = document.createElement("a");
    downloadLink.href = s3DownloadUrl;
    downloadLink.download = fileName || "downloadedFile";

    document.body.appendChild(downloadLink);
    downloadLink.click();

    document.body.removeChild(downloadLink);

    toast.success("Sənəd uğurla yükləndi!");
  };

  return (
    <div id="search">
      <div className="search-results">
        <div className="container">
          <div className="search-results-content">
            <div className="search-results-text-box">
              {values?.results.length < 1 ? (
                <div className="no-search-text">
                  <p className="no-search-results-text">
                    Axtarışınız üçün nəticə tapılmadı
                  </p>
                  <Link to="/erizeler/all">Bütün ərizələrə bax</Link>
                </div>
              ) : (
                <h1>{`‘${values.keyword}’ üçün tapılan nəticələr:`}</h1>
              )}
            </div>
            {values?.results.length > 0 ? (
              <div className="search-results-boxes">
                {displayedResults.map(
                  (result: IProductProps, index: number) => (
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
                            src={`https://senedsunedstorages.s3.amazonaws.com/${result.imagePath}`}
                            alt=""
                          />
                        </div>
                        <div className="document-main-box-footer">
                          <p>{result.docName}</p>

                          <div className="action-buttons">
                            <a
                              onClick={() => handleDetailsClick(result)}
                              className="box-details-btn"
                            >
                              Ətraflı
                            </a>
                            <a
                              onClick={() => handleDownload(result)}
                              className="download-btn"
                            >
                              Yüklə
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            ) : (
              <div className="search-not-found">
                <div className="search-not-found-icon">
                  <img src={noSearch} alt="" />
                </div>
              </div>
            )}
          </div>
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
  );
};

export default Search;
