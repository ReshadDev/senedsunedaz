import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField, Button, Container, styled } from '@mui/material';
import { useAuth } from '../../context/auth';
import { createCategory } from '../../utils/api';

import { toast } from 'react-toastify';

const FormContainer = styled(Container)({
  marginTop: '50px',
  padding: '20px',
  backgroundColor: '#f5f5f5',
  borderRadius: '8px',
});

const FormTextField = styled(TextField)({
  marginBottom: '20px',
});

interface CategoryForm {
  categoryName: string;
  description: string;
}

const CreateCategory: React.FC = () => {
  const [auth] = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CategoryForm>();

  const onSubmit: SubmitHandler<CategoryForm> = async (data) => {
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
      <FormContainer maxWidth='sm'>
        <h1 className='text-center mb-20'>Create Document</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormTextField
            {...register('categoryName', {
              required: 'categoryName is required',
            })}
            label='Enter Category Name'
            error={Boolean(errors.categoryName)}
            helperText={errors.categoryName?.message}
            fullWidth
          />
          <FormTextField
            {...register('description', {
              required: 'description is required',
            })}
            label='Enter Description'
            error={Boolean(errors.description)}
            helperText={errors.description?.message}
            fullWidth
          />

          <Button type='submit' variant='contained' color='primary' fullWidth>
            Create
          </Button>
        </form>
      </FormContainer>
    </div>
  );
};

export default CreateCategory;
