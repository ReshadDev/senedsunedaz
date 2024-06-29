import { TextField, Container, styled, InputLabel } from '@mui/material';

export const CreateCategoryFormContainer = styled(Container)({
  marginTop: '50px',
  padding: '20px',
  backgroundColor: '#f5f5f5',
  borderRadius: '8px',
});

export const CreateCategoryFormTextField = styled(TextField)({
  marginBottom: '20px',
});

export const CreateDocumentFormContainer = styled(Container)({
  marginTop: '50px',
  padding: '20px',
  backgroundColor: '#f5f5f5',
  borderRadius: '8px',
});

export const CreateDocumentFormTextField = styled(TextField)({
  marginBottom: '20px',
});
export const CategoryLabel = styled(InputLabel)({
  marginBottom: '10px',
});

export const InputRowTextField = styled(TextField)({});

export const textMinifier = (str: string, maxLength: number): string => {
  if (str.length <= maxLength) {
    return str;
  }
  return str.substring(0, maxLength - 3) + '...';
};
