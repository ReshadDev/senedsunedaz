import * as React from 'react';
import { useParams } from 'react-router-dom';
import { PencilIcon } from '../../assets/icons';
import 'react-image-gallery/styles/css/image-gallery.css';
import 'react-toastify/dist/ReactToastify.css';

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
} from '@mui/material';

import { toast } from 'react-toastify';

import ImageGallery from 'react-image-gallery';
import { Button as NewButton } from 'antd';
import { Category, DocumentData, DocumentInputV2 } from '../../interfaces';
import {
  getAllCategories,
  getCategoryName,
} from '../../services/CategoryService';
import {
  downloadDocument,
  downloadEditedDocument,
  editDocument,
  getDocument,
} from '../../services/DocumentService';

const ErizeDetails: React.FC = () => {
  const [document, setDocument] = React.useState<DocumentData | null>(null);
  const [categoryName, setCategoryName] = React.useState<string>('');
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [inputValues, setInputValues] = React.useState<DocumentInputV2[]>([]);
  const [categories, setCategories] = React.useState<Category[]>([]);

  const params = useParams<{ slug: string }>();

  React.useEffect(() => {
    if (params?.slug) {
      getDocument(setDocument, params);
    }
  }, [params, params?.slug]);

  React.useEffect(() => {
    getAllCategories(setCategories);
  }, []);

  React.useEffect(() => {
    if (document) {
      getCategoryName(document.categoryId, categories, setCategoryName);
    }
  }, [categories, document]);

  const images = document?.imagePath.map((imagePath) => ({
    original: `${imagePath}`,
    thumbnail: `${imagePath}`,
  }));

  const handleEdit = () => {
    setOpenModal(true);
    const initialInputValues =
      document?.extraInput.map((input) => ({
        labelName: input.labelName,
        inputName: input.inputName || '',
      })) || [];
    setInputValues(initialInputValues);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleConfirmEdit = async (erize: DocumentData | null) => {
    if (!erize || inputValues.some((input) => input.inputName.trim() === '')) {
      toast.error('Zəhmət olmasa bütün xanaları doldurun');
      return;
    }
    try {
      await editDocument(inputValues, erize);
      await getDocument(setDocument, params);

      toast.success('Ərizəniz uğurla redaktə olundu');

      await downloadEditedDocument(erize, handleCloseModal);
    } catch (error) {
      console.error(error);
      toast.error('Ərizəniz uğurla redaktə olunmasında problem çıxdı');
    }
  };

  return (
    <div className="erize-details-page">
      <section className="erize-details-box">
        <div className="container">
          <div className="erize-details-content">
            <div className="page-box">
              <div className="text-box">
                <p className="mid-text-s">Ərizələr</p>/<p>Ətraflı</p>
              </div>
            </div>

            <div className="erize-details-text-box">
              <div className="left-side">
                <div>
                  {images && images.length > 0 && (
                    <ImageGallery
                      items={images}
                      showPlayButton={false}
                      showNav={false}
                      showFullscreenButton={false}
                    />
                  )}
                </div>
              </div>
              <div className="right-side">
                <div className="erize-details-action-box">
                  <div className="erize-details-erize-box">
                    <div
                      className="d-main-box"
                      style={{ paddingBottom: '20px' }}
                    >
                      <p className="erize-name-label">Ərizə adı: </p>
                      <p>{document?.docName}</p>
                    </div>
                    <div
                      className="d-main-box"
                      style={{ paddingBottom: '20px' }}
                    >
                      <p className="erize-name-label">Kateqoriya adı: </p>
                      <NewButton type="primary">
                        {categoryName || 'Ailə'}
                      </NewButton>
                    </div>
                  </div>

                  <div className="action-buttons-box">
                    <a
                      target="_blank"
                      className="btn edit-btn"
                      onClick={handleEdit}
                    >
                      <img src={PencilIcon} alt="" />
                      Redaktə et və yüklə
                    </a>
                    <a
                      className="btn download-btn"
                      onClick={() => document && downloadDocument(document)}
                    >
                      Yüklə
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Ərizəni redaktə et</DialogTitle>
        <DialogContent>
          {document?.extraInput.map((input, index) => (
            <div key={input.id} style={{ marginBottom: '10px' }}>
              <label>{input.label}</label>
              <TextField
                variant="outlined"
                fullWidth
                defaultValue={input.inputName || ''}
                onChange={(e) => {
                  const newInputValues = [...inputValues];
                  newInputValues[index] = {
                    labelName: input.labelName,
                    inputName: e.target.value,
                  };
                  setInputValues(newInputValues);
                }}
                InputProps={{
                  required: true,
                }}
              />
            </div>
          ))}
          <Button
            onClick={() => document && handleConfirmEdit(document)}
            color="primary"
          >
            Redaktə et və yüklə
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ErizeDetails;
