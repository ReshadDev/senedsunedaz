import {
  CreateDocumentData,
  DocumentData,
  DocumentInput,
  DocumentInputV2,
} from '../interfaces';
import axios from 'axios';
import { APIURL } from '../constants';
import fileDownload from 'js-file-download';
import { toast } from 'react-toastify';

// Fethch All Documents

export const getAllDocuments = async (
  setErizeler: (erizeler: DocumentData[]) => void
) => {
  try {
    const { data } = await axios.get(`${APIURL}/api/application/findAll`);
    if (data?.success) {
      setErizeler(data?.documents);
    }
  } catch (error) {
    console.log(error);
  }
};

// Get one Document

export const getDocument = async (
  setProduct: (product: DocumentData) => void,
  params: Readonly<
    Partial<{
      slug: string;
    }>
  >
) => {
  try {
    const { data } = await axios.get(
      `${APIURL}/api/application/byId/${params.slug}`
    );
    setProduct(data.document);
  } catch (error) {
    console.log(error);
  }
};

// Create Document

export const createDocument = async (
  data: CreateDocumentData,
  inputs: DocumentInput[],
  authToken: string
) => {
  const formData = new FormData();
  formData.append('docFile', data.docFile[0]);
  for (let i = 0; i < data.imageFile.length; i++) {
    formData.append('imageFile', data.imageFile[i]);
  }
  formData.append('editDocFile', data.editDocFile[0]);
  formData.append('docName', data.docName);
  formData.append('inputs', JSON.stringify(inputs));

  const categoryId = data.categoryId;

  await axios.post(`${APIURL}/api/application/upload/${categoryId}`, formData, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
};

// Delete Document

export const deleteDocument = async (id: number | null, token: string) => {
  axios.delete(`${APIURL}/api/application/deleteById/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Download Document

export const downloadDocument = async (erize: DocumentData) => {
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

// Edit Document

export const editDocument = async (
  inputValues: DocumentInputV2[],
  document: DocumentData
) => {
  const requestBody = inputValues.map((input) => ({
    labelName: input.labelName,
    inputName: input.inputName,
  }));

  await axios.post(
    `${APIURL}/api/application/edit/${document?.id}`,
    requestBody
  );
};

// Download Edited File

export const downloadEditedDocument = async (
  erize: DocumentData,
  handleCloseModal: () => void
) => {
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
