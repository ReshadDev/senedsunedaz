import * as React from 'react';
import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  TextField,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled,
} from '@mui/material';
import { useAuth } from '../../context/auth';
import { toast } from 'react-toastify';
import { Category } from '../../interfaces';
import { APIURL } from '../../constants';

interface FormData {
  docFile: FileList;
  editDocFile: FileList;
  imageFile: FileList;
  docName: string;
  categoryId: string;
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
const CategoryLabel = styled(InputLabel)({
  marginBottom: '10px',
});

const InputRowTextField = styled(TextField)({});

const CreateDocument: React.FC = () => {
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [categoryId, setCategoryId] = React.useState<string>('');

  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(
        `${APIURL}/api/category/getAllCategories`
      );
      if (data?.success) {
        setCategories(data?.categories);
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getAllCategories();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [auth] = useAuth(); // Access auth state and updateAuth function from context

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const formData = new FormData();
      formData.append('docFile', data.docFile[0]);
      for (let i = 0; i < data.imageFile.length; i++) {
        formData.append('imageFile', data.imageFile[i]);
      }
      formData.append('editDocFile', data.editDocFile[0]);
      formData.append('docName', data.docName);
      formData.append('inputs', JSON.stringify(inputs));

      const categoryId = data.categoryId;

      setInputs([]);

      await axios.post(
        `${APIURL}/api/application/upload/${categoryId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${auth.tokenPair.accessToken}`,
          },
        }
      );

      setCategoryId('new');

      reset();
      toast.success('Yeni sənəd uğurla yaradıldı!');
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  const [inputs, setInputs] = React.useState<
    { labelName: string; label: string }[]
  >([]);

  const addInputRow = () => {
    setInputs([...inputs, { labelName: '', label: '' }]);
  };

  const removeInputRow = (index: number) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

  return (
    <FormContainer maxWidth='lg'>
      <h1 className='text-center'>Create Document</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-parts d-flex'>
          <div className='form-part-1'>
            <FormControl fullWidth>
              <CategoryLabel id='category-label'>
                Select a Category
              </CategoryLabel>
              <Select
                {...register('categoryId', {
                  required: 'Category is required',
                })}
                style={{ marginBottom: '20px' }}
                value={categoryId}
                onChange={(event) => setCategoryId(event.target.value)}
                label='Category'
                error={Boolean(errors.categoryId)}
                fullWidth
              >
                {categories.map((category) => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <InputLabel shrink id='docFile-label'>
              Doc File (docx)
            </InputLabel>
            <FormTextField
              {...register('docFile', {
                required: 'docFile is required',
              })}
              type='file'
              inputProps={{ accept: '.docx' }}
              error={Boolean(errors.docFile)}
              helperText={errors.docFile?.message}
              fullWidth
            />

            <InputLabel shrink id='docFile-label'>
              Edited File (docx)
            </InputLabel>
            <FormTextField
              {...register('editDocFile', {
                required: 'editDocFile is required',
              })}
              type='file'
              inputProps={{ accept: '.docx' }}
              error={Boolean(errors.editDocFile)}
              helperText={errors.editDocFile?.message}
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
          </div>
          <div className='form-part-2'>
            <FormTextField
              {...register('docName', {
                required: 'docName is required',
              })}
              label='Document Name'
              error={Boolean(errors.docName)}
              helperText={errors.docName?.message}
              fullWidth
            />

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
                    style={{ width: '180px' }}
                    placeholder='Label Name'
                    value={input.labelName}
                    onChange={(e) => {
                      const newInputs = [...inputs];
                      newInputs[index].labelName = e.target.value;
                      setInputs(newInputs);
                    }}
                    fullWidth
                  />
                  <InputRowTextField
                    style={{ width: '180px' }}
                    placeholder='Label'
                    value={input.label}
                    onChange={(e) => {
                      const newInputs = [...inputs];
                      newInputs[index].label = e.target.value;
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
              onClick={addInputRow}
              style={{ marginTop: '20px' }}
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
  );
};

export default CreateDocument;
