import React from 'react';
import TextField from '@mui/material/TextField';
import { CaretLeft, CaretRight, FilterIcon } from '../../assets/icons';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import { APIURL, ITEMS_PER_PAGE } from '../../constants';
import { useNavigate } from 'react-router-dom';
import { Category, DocumentData } from '../../interfaces';
import Checkbox from '@mui/material/Checkbox';
import { CloseOutlined } from '@ant-design/icons';
import {
  downloadDocument,
  getAllDocuments,
} from '../../services/DocumentService';
import { getAllCategories } from '../../services/CategoryService';

const AllErizeler: React.FC = () => {
  const [erizeler, setErizeler] = React.useState<DocumentData[]>([]);
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [searchTerm, setSearchTerm] = React.useState<string>('');
  const [isFilterOpen, setIsFilterOpen] = React.useState<boolean>(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  React.useEffect(() => {
    getAllDocuments(setErizeler);
  }, []);

  React.useEffect(() => {
    getAllCategories(setCategories);
  }, []);

  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(
    null
  );

  const handleCategoryClick = async (category: string) => {
    try {
      const apiUrl = `${APIURL}/api/category/applications/${category}`;

      if (category === selectedCategory) {
        setSelectedCategory(null);
        getAllDocuments(setErizeler);
      } else {
        const { data } = await axios.get(apiUrl);

        setErizeler(data);

        setSelectedCategory(category);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleCategoryClick2 = async (category: string) => {
    try {
      const apiUrl = `${APIURL}/api/category/applications/${category}`;

      if (category === selectedCategory) {
        setSelectedCategory(null);
        getAllDocuments(setErizeler);
      } else {
        const { data } = await axios.get(apiUrl);

        setErizeler(data);

        setSelectedCategory(category);

        setIsFilterOpen(false);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const navigate = useNavigate();

  const handleDetailsClick = (erize: DocumentData) => {
    const link = `/erizeler/erize/${erize.id}`;
    navigate(link);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(0);
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredItems = erizeler.filter((erize) => {
    const searchTerms = searchTerm.split(' ').filter(Boolean);
    return searchTerms.every((term) =>
      erize.docName.toLowerCase().includes(term.toLowerCase())
    );
  });

  const pageCount = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const offset = currentPage * ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(offset, offset + ITEMS_PER_PAGE);

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <div className="all-erizeler">
      <div className="container">
        <div className="all-erizeler-content">
          <div className="box__heading">
            <p>Bütün Ərizələr</p>
          </div>

          <div className="all-erizeler-content-box">
            <div className="left-content-box">
              <div className="all-erizeler-search-box">
                <div className="all-erizeler-input-box">
                  <TextField
                    label="Search"
                    variant="outlined"
                    fullWidth
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                  <div className="filter-icon-mobile" onClick={toggleFilter}>
                    <img src={FilterIcon} alt="" />
                  </div>

                  {isFilterOpen && (
                    <div className="offcanvas-right-sidebar">
                      <div className="offcanvas-text-box">
                        <p>Kateqoriyaya görə filterlə</p>
                        <CloseOutlined onClick={() => setIsFilterOpen(false)} />
                      </div>
                      <div className="filter-mobile-box">
                        {categories.map((category) => (
                          <div key={category.id}>
                            <Checkbox
                              checked={category.name === selectedCategory}
                              onChange={() =>
                                handleCategoryClick2(category.name)
                              }
                            />
                            {category.name}
                          </div>
                        ))}
                      </div>

                      {/* <div className="erize-box__buttons-box">
                        <a
                          onClick={() => setSelectedCategory(null)}
                          className="box-details-btn btn"
                        >
                          Təmizlə
                        </a>
                      </div> */}
                    </div>
                  )}
                </div>
                <div className="all-erizeler-filter-box">
                  {categories.map((category) => (
                    <div key={category.id}>
                      <Checkbox
                        checked={category.name === selectedCategory}
                        onChange={() => handleCategoryClick(category.name)}
                      />
                      {category.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="right-content-box">
              <div className="erizeler-list-box col-12">
                <div className="box__body">
                  {currentItems.map((erize: DocumentData) => (
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
                          onClick={() => downloadDocument(erize)}
                        >
                          Yüklə
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {currentItems.length > 0 && (
          <ReactPaginate
            previousLabel={<img src={CaretLeft} alt="Previous" />}
            nextLabel={<img src={CaretRight} alt="Next" />}
            breakLabel={'...'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={'pagination'}
            activeClassName={'active'}
          />
        )}
      </div>
    </div>
  );
};

export default AllErizeler;
