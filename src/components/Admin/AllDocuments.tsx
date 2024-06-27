import React from 'react';
import { DocumentData } from '../../interfaces';
import { ITEMS_PER_PAGE } from '../../constants';
import ReactPaginate from 'react-paginate';
import { CaretLeft, CaretRight } from '../../assets/icons';
import { TextField } from '@mui/material';
import { Modal } from 'antd';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/auth';
import {
  deleteDocument,
  getAllDocuments,
} from '../../services/DocumentService';

const AllDocuments: React.FC = () => {
  const [erizeler, setErizeler] = React.useState<DocumentData[]>([]);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [searchTerm, setSearchTerm] = React.useState<string>('');
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [deleteId, setDeleteId] = React.useState<number | null>(null);

  const [auth] = useAuth();

  React.useEffect(() => {
    getAllDocuments(setErizeler);
  }, []);

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

  const handleDelete = async () => {
    try {
      await deleteDocument(deleteId, auth.tokenPair.accessToken);
      await getAllDocuments(setErizeler);
      toast.success('Ərizə uğurla silindi');
    } catch (error) {
      console.error('Error deleting document:', error);
      toast.error('Xəta baş verdi');
    }
    setIsOpen(false);
  };

  const showModal = (id: number) => {
    setDeleteId(id);
    setIsOpen(true);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <div className="all-documents-admin">
      <div className="container-new">
        <div className="heading-box">
          <h1>Bütün Ərizələr</h1>
        </div>
        <div className="all-erizeler-input-box">
          <TextField
            label="Search"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="erizeler-list-box">
          <div className="box__body">
            {currentItems.map((erize: DocumentData) => (
              <div key={erize.id} className="erize-box col-12">
                <div className="erize-box__text-box">
                  <p>{erize?.docName}</p>
                </div>
                <div className="erize-box__buttons-box">
                  <a
                    className="download-btn btn"
                    onClick={() => showModal(erize.id)}
                  >
                    Sil
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
      <Modal
        title="Təsdiq etmək"
        open={isOpen}
        onOk={handleDelete}
        onCancel={handleCancel}
        okText="Təsdiq et"
        cancelText="Ləğv et"
      >
        <p>
          Ərizəni silmək istədiyinizə əminsinizmi? Bu əməliyyatı geri qaytarmaq
          olmur
        </p>
      </Modal>
    </div>
  );
};

export default AllDocuments;
