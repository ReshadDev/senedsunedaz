import React from 'react';

import {
  TextField,
  Button,
  Container,
  InputLabel,
  styled,
} from '@mui/material';
import { useAuth } from '../../context/auth';
import { useForm, SubmitHandler } from 'react-hook-form';

import axios from 'axios';
import { toast } from 'react-toastify';
import { APIURL } from '../../config';

interface CvFormData {
  cvFile: FileList;
  imageFile: FileList;
  cvName: string;
}

const FormContainer = styled(Container)({
  marginTop: '50px',
  padding: '20px',
  backgroundColor: '#f5f5f5',
  borderRadius: '8px',
});

const FormTextField = styled(TextField)({
  marginBottom: '20px',
});

const CreateTemplate: React.FC = () => {
  const [auth] = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CvFormData>();

  const onSubmit: SubmitHandler<CvFormData> = async (data) => {
    try {
      const formData = new FormData();
      formData.append('cvFile', data.cvFile[0]);
      for (let i = 0; i < data.imageFile.length; i++) {
        formData.append('imageFile', data.imageFile[i]);
      }
      formData.append('cvName', data.cvName);

      await axios.post(`${APIURL}/api/cv/CvUpload`, formData, {
        headers: {
          Authorization: `Bearer ${auth.tokenPair.accessToken}`,
        },
      });

      reset();
      toast.success('Yeni sənəd uğurla yaradıldı!');
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  return (
    <div>
      <FormContainer maxWidth='lg'>
        <h1 className='text-center'>Create CV</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-parts d-flex'>
            <div className='form-part-1'>
              <InputLabel shrink id='docFile-label'>
                Cv File (docx)
              </InputLabel>
              <FormTextField
                {...register('cvFile', {
                  required: 'cvFile is required',
                })}
                type='file'
                inputProps={{ accept: '.docx' }}
                error={Boolean(errors.cvFile)}
                helperText={errors.cvFile?.message}
                fullWidth
              />

              <InputLabel shrink id='docFile-label'>
                Image File (jpeg)
              </InputLabel>
              <FormTextField
                {...register('imageFile', {
                  required: 'imageFile is required',
                })}
                type='file'
                inputProps={{
                  accept: 'image/jpeg, image/png, image/jpg',
                  multiple: true,
                }}
                error={Boolean(errors.imageFile)}
                helperText={errors.imageFile?.message}
                fullWidth
              />

              <FormTextField
                {...register('cvName', {
                  required: 'cvName is required',
                })}
                label='CV Name'
                error={Boolean(errors.cvName)}
                helperText={errors.cvName?.message}
                fullWidth
              />
            </div>
          </div>

          <Button
            type='submit'
            variant='contained'
            color='primary'
            fullWidth
            style={{ marginTop: '20px' }}
          >
            Upload
          </Button>
        </form>
      </FormContainer>
    </div>
  );
};

export default CreateTemplate;
