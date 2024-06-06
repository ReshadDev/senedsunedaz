import axios from 'axios';
import { APIURL } from '../constants';
import { Category, CreateCategoryData } from '../interfaces';

// Fetch All Categories

export const getAllCategories = async (
  setCategories: (categories: Category[]) => void
) => {
  try {
    const { data } = await axios.get(`${APIURL}/api/category/getAllCategories`);
    if (data?.success) {
      setCategories(data?.categories);
    }
  } catch (error) {
    console.log(error);
  }
};

// Fetch One Category

export const fetchCategory = async (
  id: number,
  setCategoryData: (categoryData: Category) => void
) => {
  try {
    const response = await axios.get(`${APIURL}/api/category/byId/${id}`);
    const category = response.data.category;

    if (category) {
      setCategoryData(category);
    } else {
      console.error('Category not found');
    }
  } catch (error) {
    console.error('Error fetching category:', error);
  }
};

// Create Category Service

export const createCategory = async (
  data: CreateCategoryData,
  token: string
) => {
  const formData = new FormData();
  formData.append('name', data.categoryName);
  formData.append('description', data.description);

  const response = await axios.post(
    `${APIURL}/api/category/addCategory`,
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

// Update Category Service

export const updateCategory = async (
  id: number | null,
  data: Category,
  token: string
) => {
  await axios.put(`${APIURL}/api/category/updateCategory/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Delete Category Service

export const deleteCategory = async (id: number | null, token: string) => {
  await axios.delete(`${APIURL}/api/category/deleteCategory/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
