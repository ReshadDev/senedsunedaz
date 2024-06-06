import axios from 'axios';
import { APIURL } from '../constants';

interface FormData {
  docFile: FileList;
  imageFile: FileList;
  docName: string;
  link: string;
  categoryId: string;
}

export const createDocument = async (data: FormData, token: string) => {
  const formData = new FormData();
  formData.append('docFile', data.docFile[0]);
  formData.append('imageFile', data.imageFile[0]);
  formData.append('docName', data.docName);
  formData.append('link', data.link);

  const categoryId = data.categoryId;
  const response = await axios.post(
    `${APIURL}/api/application/upload/${categoryId}`,
    formData,
    {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const refreshAccessToken = async (accessToken: string) => {
  try {
    const refreshTokenResponse = await axios.post(
      `${APIURL}/auth/refresh`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return refreshTokenResponse.data.accessToken;
  } catch (error) {
    console.error('Error refreshing access token:', error);
    throw error;
  }
};
