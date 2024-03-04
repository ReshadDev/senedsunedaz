import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  TextField,
  Button,
  Container,
  Snackbar,
  SnackbarContent,
  styled,
} from "@mui/material";
import { useAuth } from "../../context/auth";
import { createCategory } from "../../utils/api";

const FormContainer = styled(Container)({
  marginTop: "50px",
  padding: "20px",
  backgroundColor: "#f5f5f5",
  borderRadius: "8px",
});

const FormTextField = styled(TextField)({
  marginBottom: "20px",
});

const StyledSnackbarContent = styled(SnackbarContent)({
  color: "white",
  backgroundColor: "green",
});

interface FormData {
  categoryName: string;
}

const CreateCategory: React.FC = () => {
  const [showAlert, setShowAlert] = React.useState<boolean>(false);
  const [auth] = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  console.log(auth);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await createCategory(data, auth.token);

      setShowAlert(true);
      reset();
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  return (
    <div>
      <FormContainer maxWidth="sm">
        <h1 className="text-center mb-20">Create Document</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormTextField
            {...register("categoryName", {
              required: "categoryName is required",
            })}
            label="Enter Category Name"
            error={Boolean(errors.categoryName)}
            helperText={errors.categoryName?.message}
            fullWidth
          />

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Create
          </Button>
        </form>
      </FormContainer>

      <Snackbar
        open={showAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
      >
        <StyledSnackbarContent message="Ərizəniz yaradıldı" />
      </Snackbar>
    </div>
  );
};

export default CreateCategory;
