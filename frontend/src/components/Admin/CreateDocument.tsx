import * as React from "react";
import axios from "axios";
import config from "../../config";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  TextField,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  SnackbarContent,
  styled,
} from "@mui/material";
import { useAuth } from "../../context/auth";

const FormContainer = styled(Container)({
  marginTop: "50px",
  padding: "20px",
  backgroundColor: "#f5f5f5",
  borderRadius: "8px",
});

const FormTextField = styled(TextField)({
  marginBottom: "20px",
});

const CategoryLabel = styled(InputLabel)({
  marginBottom: "10px",
});

const StyledSnackbarContent = styled(SnackbarContent)({
  color: "white",
  backgroundColor: "green",
});

interface Category {
  id: string;
  name: string;
}

interface FormData {
  docFile: FileList;
  imageFile: FileList;
  docName: string;
  link: string;
  categoryId: string;
}

const CreateDocument: React.FC = () => {
  const apiURL = config.apiURL;
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [categoryId, setCategoryId] = React.useState<string>("");
  const [showAlert, setShowAlert] = React.useState<boolean>(false);

  const [auth] = useAuth();

  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(
        `${apiURL}/api/category/getAllCategories`
      );
      if (data?.success) {
        setCategories(data?.category);
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

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const formData = new FormData();
      formData.append("docFile", data.docFile[0]);
      formData.append("imageFile", data.imageFile[0]);
      formData.append("docName", data.docName);
      formData.append("link", data.link);

      const categoryId = data.categoryId;
      const response = await axios.post(
        `http://localhost:8080/api/application/upload/${categoryId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );

      setCategoryId("new");

      setShowAlert(true);
      reset();
      console.log(response.data);
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
        <h1 className="text-center">Create Document</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <InputLabel shrink id="docFile-label">
            Doc File (docx)
          </InputLabel>
          <FormTextField
            {...register("docFile", {
              required: "docFile is required",
            })}
            type="file"
            error={Boolean(errors.docFile)}
            helperText={errors.docFile?.message}
            fullWidth
          />

          <InputLabel shrink id="docFile-label">
            Image File (jpeg)
          </InputLabel>
          <FormTextField
            {...register("imageFile", {
              required: "imageFile is required",
            })}
            type="file"
            error={Boolean(errors.imageFile)}
            helperText={errors.imageFile?.message}
            fullWidth
          />

          <FormTextField
            {...register("docName", {
              required: "docName is required",
            })}
            label="Doc Name"
            error={Boolean(errors.docName)}
            helperText={errors.docName?.message}
            fullWidth
          />

          <FormTextField
            {...register("link", { required: "link is required" })}
            label="Link"
            error={Boolean(errors.link)}
            helperText={errors.link?.message}
            fullWidth
          />

          <FormControl fullWidth>
            <CategoryLabel id="category-label">Select a Category</CategoryLabel>
            <Select
              {...register("categoryId", {
                required: "Category is required",
              })}
              value={categoryId}
              onChange={(event) => setCategoryId(event.target.value)}
              label="Category"
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

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Upload
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

export default CreateDocument;
