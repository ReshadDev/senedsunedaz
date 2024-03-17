import React from "react";
import TextField from "@mui/material/TextField";
import { CaretLeft, CaretRight } from "../../assets/icons";
import ReactPaginate from "react-paginate";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Category, ProductProps } from "../../interfaces";
import { APIURL } from "../../config";

const ITEMS_PER_PAGE = 6;

const CategoryDetails: React.FC = () => {
  const [erizeler, setErizeler] = React.useState<ProductProps[]>([]);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [categoryName, setCategoryName] = React.useState<string | null>(null);
  const [categories, setCategories] = React.useState<Category[]>([]);

  const params = useParams<{ slug: string }>();

  const getCategoryProducts = async () => {
    try {
      const { data } = await axios.get(
        `${APIURL}/api/category/applications/${params.slug}`
      );
      setErizeler(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(
        `${APIURL}/api/category/getAllCategories`
      );
      setCategories(data?.categories || []);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategoryName = (categoryId: number) => {
    const matchedCategory = categories.find(
      (category) => category?.id === categoryId
    );
    setCategoryName(matchedCategory?.name || null);
  };

  React.useEffect(() => {
    fetchCategories();
  }, []);

  React.useEffect(() => {
    if (erizeler) {
      getCategoryName(erizeler[0]?.categoryId);
    }
  }, [erizeler]);

  React.useEffect(() => {
    if (params?.slug) {
      getCategoryProducts();
    }
  }, [params?.slug]);

  const navigate = useNavigate();

  const handleDetailsClick = (erize: ProductProps) => {
    const link = `/erizeler/erize/${erize.id}`;
    navigate(link);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(0);
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredItems = erizeler.filter((erize) =>
    erize.docName.toLowerCase().includes(searchTerm)
  );

  const pageCount = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const offset = currentPage * ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(offset, offset + ITEMS_PER_PAGE);

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  const handleDownload = (erize: ProductProps) => {
    const downloadUrl = `${APIURL}/api/application/download/${erize?.id}`;

    const downloadLink = document.createElement("a");
    downloadLink.href = downloadUrl;
    downloadLink.download = erize?.docName || "downloadedFile";

    document.body.appendChild(downloadLink);

    downloadLink.click();

    document.body.removeChild(downloadLink);
  };

  return (
    <div className="category-details-page">
      <main id="maincontent" className="content">
        <div className="container">
          <div className="category-details-content">
            <div className="box__heading">
              <p>{categoryName}</p>
            </div>

            <div className="all-erizeler-content-box">
              <div className="all-erizeler-search-box">
                <div className="all-erizeler-input-box">
                  <TextField
                    label="Search"
                    variant="outlined"
                    fullWidth
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </div>
              </div>
              <div className="right-content-box">
                <div className="erizeler-list-box col-12">
                  <div className="box__body">
                    {currentItems.map((erize: ProductProps) => (
                      <div key={erize.id} className="erize-box col-12">
                        <div className="erize-box__text-box">
                          <p>{erize?.docName}</p>
                        </div>
                        <div className="erize-box__buttons-box">
                          <a
                            onClick={() => handleDetailsClick(erize)}
                            className="box-details-btn btn"
                          >
                            Ətraflı
                          </a>
                          <a
                            className="download-btn btn"
                            onClick={() => handleDownload(erize)}
                          >
                            Yüklə
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {currentItems.length > 0 && (
                  <ReactPaginate
                    previousLabel={<img src={CaretLeft} alt="Previous" />}
                    nextLabel={<img src={CaretRight} alt="Next" />}
                    breakLabel={"..."}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageChange}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CategoryDetails;
