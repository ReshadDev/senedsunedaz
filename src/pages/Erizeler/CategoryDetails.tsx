import React from 'react';
import TextField from '@mui/material/TextField';
import { CaretLeft, CaretRight } from '../../assets/icons';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Category, DocumentData } from '../../interfaces';
import { ErizeFakeProps } from '../../data/fakeData';
import {
  getAllCategories,
  getCategoryName,
  getCategoryProducts,
} from '../../services/CategoryService';
import { downloadDocument } from '../../services/DocumentService';

const ITEMS_PER_PAGE = 6;

const CategoryDetails: React.FC = () => {
  const [erizeler, setErizeler] = React.useState<DocumentData[]>([]);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [searchTerm, setSearchTerm] = React.useState<string>('');
  const [categoryName, setCategoryName] = React.useState<string | null>(null);
  const [categories, setCategories] = React.useState<Category[]>([]);

  const params = useParams<{ slug: string }>();

  React.useEffect(() => {
    getAllCategories(setCategories);
  }, []);

  React.useEffect(() => {
    if (erizeler) {
      getCategoryName(erizeler[0]?.categoryId, categories, setCategoryName);
    }
  }, [categories, erizeler]);

  React.useEffect(() => {
    if (params?.slug) {
      getCategoryProducts(params, setErizeler);
    }
  }, [params, params?.slug]);

  const navigate = useNavigate();

  const handleDetailsClick = (erize: ErizeFakeProps) => {
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

  return (
    <div className="category-details-page">
      <div className="container">
        <div className="category-details-content">
          <div className="box__heading">
            <p>{params?.slug || categoryName}</p>
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
  );
};

export default CategoryDetails;
