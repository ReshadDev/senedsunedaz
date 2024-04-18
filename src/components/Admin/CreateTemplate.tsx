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

interface CvFormData {
  cvFile: FileList;
  cvEditedFile: FileList;
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

const InputRowTextField = styled(TextField)({});

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
      formData.append('cvEditedFile', data.cvEditedFile[0]);
      for (let i = 0; i < data.imageFile.length; i++) {
        formData.append('imageFile', data.imageFile[i]);
      }
      formData.append('cvName', data.cvName);
      formData.append('inputs', JSON.stringify(inputs));

      setInputs([]);

      await axios.post(`http://64.23.134.82/api/cv/CvUpload`, formData, {
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

  const [inputs, setInputs] = React.useState<{ labelName: string }[]>([]);

  const addInputRow = () => {
    setInputs([...inputs, { labelName: '' }]);
  };

  const removeInputRow = (index: number) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
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
                Edited Cv File (docx)
              </InputLabel>
              <FormTextField
                {...register('cvEditedFile', {
                  required: 'cvEditedFile is required',
                })}
                type='file'
                inputProps={{ accept: '.docx' }}
                error={Boolean(errors.cvEditedFile)}
                helperText={errors.cvEditedFile?.message}
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
            <div className='form-part-2'>
              <InputLabel shrink id='inputs-label'>
                Inputs
              </InputLabel>
              <div
                style={{
                  maxHeight: '300px',
                  overflowY: 'scroll',
                  scrollBehavior: 'smooth',
                  msOverflowStyle: 'none',
                }}
              >
                {inputs.map((input, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      marginBottom: '10px',
                      marginRight: '10px',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <InputRowTextField
                      style={{ width: '260px' }}
                      placeholder='Label Name'
                      value={input.labelName}
                      onChange={(e) => {
                        const newInputs = [...inputs];
                        newInputs[index].labelName = e.target.value;
                        setInputs(newInputs);
                      }}
                      fullWidth
                    />

                    <Button
                      onClick={() => removeInputRow(index)}
                      color='error'
                      variant='contained'
                    >
                      Remove
                    </Button>
                  </div>
                ))}
              </div>
              <Button
                style={{ marginTop: '20px' }}
                onClick={addInputRow}
                color='primary'
                variant='contained'
              >
                Yeni Input yarat
              </Button>
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
