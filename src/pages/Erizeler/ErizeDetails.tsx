import * as React from 'react';
import { useParams } from 'react-router-dom';
import { PencilIcon } from '../../assets/icons';
import 'react-image-gallery/styles/css/image-gallery.css';
import axios from 'axios';
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
import { Category, ProductProps } from '../../interfaces';
import { APIURL } from '../../constants';
import fileDownload from 'js-file-download';

const ErizeDetails: React.FC = () => {
  const [product, setProduct] = React.useState<ProductProps | null>(null);
  const [categoryName, setCategoryName] = React.useState<string>('');
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [inputValues, setInputValues] = React.useState<
    { labelName: string; inputName: string }[]
  >([]);
  const [categories, setCategories] = React.useState<Category[]>([]);

  const params = useParams<{ slug: string }>();

  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `${APIURL}/api/application/byId/${params.slug}`
      );
      setProduct(data.document);
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
    setCategoryName(matchedCategory?.name || '');
  };

  React.useEffect(() => {
    if (params?.slug) {
      getProduct();
    }
  }, [params?.slug]);

  React.useEffect(() => {
    fetchCategories();
  }, []);

  React.useEffect(() => {
    if (product) {
      getCategoryName(product.categoryId);
    }
  }, [product]);

  const images = product?.imagePath.map((imagePath) => ({
    original: `${imagePath}`,
    thumbnail: `${imagePath}`,
  }));

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
  const handleEdit = () => {
    setOpenModal(true);
    // Initialize inputValues with the existing input values
    const initialInputValues =
      product?.extraInput.map((input) => ({
        labelName: input.labelName,
        inputName: input.inputName || '',
      })) || [];
    setInputValues(initialInputValues);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleDownloadEditedFile = async (erize: ProductProps) => {
    try {
      const response = await axios.get(
        `${APIURL}/api/application/downloadEdited/${erize.editedName}`,
        { responseType: 'blob' }
      );
      fileDownload(response.data, `${erize.docName}.docx`);
      handleCloseModal();
    } catch (error) {
      console.error('Error downloading file:', error);
      toast.error(
        'Sənədi yükləmək mümkün olmadı. Zəhmət olmasa daha sonra cəhd edin.'
      );
    }
  };

  // const handleDownloadEditedFile = async () => {
  //   try {
  //     if (product?.id) {
  //       const s3DownloadUrl = `https://senedsunedstorages.s3.amazonaws.com/edited_${product.editedName}`;
  //       const downloadLink = document.createElement('a');
  //       downloadLink.href = s3DownloadUrl;
  //       downloadLink.download = `${product.docName}_edited`;

  //       document.body.appendChild(downloadLink);
  //       downloadLink.click();
  //       document.body.removeChild(downloadLink);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleConfirmEdit = async (erize: ProductProps) => {
    if (inputValues.some((input) => input.inputName.trim() === '')) {
      toast.error('Zəhmət olmasa bütün xanaları doldurun');
      return;
    }

    try {
      const requestBody = inputValues.map((input) => ({
        labelName: input.labelName,
        inputName: input.inputName,
      }));

      await axios.post(
        `${APIURL}/api/application/edit/${product?.id}`,
        requestBody
      );
      await getProduct();
      toast.success('Ərizəniz uğurla redaktə olundu');

      await handleDownloadEditedFile(erize);
    } catch (error) {
      console.error(error);
      toast.error('Ərizəniz uğurla redaktə olunmasında problem çıxdı');
    }
  };

  return (
    <div className='erize-details-page'>
      <section className='erize-details-box'>
        <div className='container'>
          <div className='erize-details-content'>
            <div className='page-box'>
              <div className='text-box'>
                <p className='mid-text-s'>Ərizələr</p>/<p>Ətraflı</p>
              </div>
            </div>

            <div className='erize-details-text-box'>
              <div className='left-side'>
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
              <div className='right-side'>
                <div className='erize-details-action-box'>
                  <div className='erize-details-erize-box'>
                    <div
                      className='d-main-box'
                      style={{ paddingBottom: '20px' }}
                    >
                      <p className='erize-name-label'>Ərizə adı: </p>
                      <p>{product?.docName}</p>
                    </div>
                    <div
                      className='d-main-box'
                      style={{ paddingBottom: '20px' }}
                    >
                      <p className='erize-name-label'>Kateqoriya adı: </p>
                      <NewButton type='primary'>
                        {categoryName || 'Ailə'}
                      </NewButton>
                    </div>
                  </div>

                  <div className='action-buttons-box'>
                    <a
                      target='_blank'
                      className='btn edit-btn'
                      onClick={handleEdit}
                    >
                      <img src={PencilIcon} alt='' />
                      Redaktə et və yüklə
                    </a>
                    <a
                      className='btn download-btn'
                      onClick={() => product && handleDownload(product)}
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
          {product?.extraInput.map((input, index) => (
            <div key={input.id} style={{ marginBottom: '10px' }}>
              <label>{input.label}</label>
              <TextField
                variant='outlined'
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
            onClick={() => product && handleConfirmEdit(product)}
            color='primary'
          >
            Redaktə et və yüklə
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ErizeDetails;
