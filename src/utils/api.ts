import axios from 'axios';

interface CreateCategoryData {
  categoryName: string;
  description: string;
}

export const createCategory = async (
  data: CreateCategoryData,
  token: string
) => {
  const formData = new FormData();
  formData.append('name', data.categoryName);
  formData.append('description', data.description);

  const response = await axios.post(
    'http://64.23.134.82/api/category/addCategory',
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
    `http://64.23.134.82/api/application/upload/${categoryId}`,
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

//

//
//

//
//

//
//

//
//

//
//
