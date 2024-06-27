import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@mui/material';
import { useAuth } from '../../context/auth';
import { createCategory } from '../../services/CategoryService';
import { CreateCategoryData } from '../../interfaces';
import {
  CreateCategoryFormContainer,
  CreateCategoryFormTextField,
} from '../../utils/styled';

import { toast } from 'react-toastify';

const CreateCategory: React.FC = () => {
  const [auth] = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateCategoryData>();

  const onSubmit: SubmitHandler<CreateCategoryData> = async (data) => {
    try {
      await createCategory(data, auth.tokenPair.accessToken);
      reset();
      toast.success('Kateqoriya uğurla yaradıldı');
    } catch (error) {
      console.error('Error creating category:', error);
      toast.error('Xəta baş verdi');
    }
  };

  return (
    <div>
      <CreateCategoryFormContainer maxWidth="sm">
        <h1 className="text-center mb-20">Kateqoriya Yarat</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <CreateCategoryFormTextField
            {...register('categoryName', {
              required: 'categoryName is required',
            })}
            label="Enter Category Name"
            error={Boolean(errors.categoryName)}
            helperText={errors.categoryName?.message}
            fullWidth
          />
          <CreateCategoryFormTextField
            {...register('description', {
              required: 'description is required',
            })}
            label="Enter Description"
            error={Boolean(errors.description)}
            helperText={errors.description?.message}
            fullWidth
          />

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Create
          </Button>
        </form>
      </CreateCategoryFormContainer>
    </div>
  );
};

export default CreateCategory;
