// APIUtils.ts

import axios from "axios";

interface CreateCategoryData {
  categoryName: string;
}

export const createCategory = async (
  data: CreateCategoryData,
  token: string
) => {
  const formData = new FormData();
  formData.append("name", data.categoryName);

  const response = await axios.post(
    "http://localhost:8080/api/category/addCategory",
    formData,
    {
      headers: {
        "Content-type": "application/json",
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
  formData.append("docFile", data.docFile[0]);
  formData.append("imageFile", data.imageFile[0]);
  formData.append("docName", data.docName);
  formData.append("link", data.link);

  console.log("Data:", data);
  const categoryId = data.categoryId;
  const response = await axios.post(
    `http://localhost:8080/api/application/upload/${categoryId}`,
    formData,
    {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  console.log("Response:", response.data);

  return response.data;
};
