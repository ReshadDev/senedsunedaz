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
  styled,
} from "@mui/material";
import { useAuth } from "../../context/auth";
import { toast } from "react-toastify";
import { Category } from "../../interfaces";

interface FormData {
  docFile: FileList;
  editDocFile: FileList;
  imageFile: FileList;
  docName: string;
  categoryId: string;
}

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

const CreateDocument: React.FC = () => {
  const apiURL = config.apiURL;
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [categoryId, setCategoryId] = React.useState<string>("");

  const [auth] = useAuth();

  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(
        `${apiURL}/api/category/getAllCategories`
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

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const formData = new FormData();
      formData.append("docFile", data.docFile[0]);
      formData.append("editDocFile", data.editDocFile[0]);
      formData.append("imageFile", data.imageFile[0]);
      formData.append("docName", data.docName);
      formData.append("inputs", JSON.stringify(inputs));

      const categoryId = data.categoryId;

      setInputs([]);

      await axios.post(
        `http://localhost:8080/api/application/upload/${categoryId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );

      setCategoryId("new");

      reset();
      toast.success("Yeni sənəd uğurla yaradıldı!");
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  const [inputs, setInputs] = React.useState<
    { labelName: string; label: string }[]
  >([]);

  const addInputRow = () => {
    setInputs([...inputs, { labelName: "", label: "" }]);
  };

  const removeInputRow = (index: number) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

  return (
    <div>
      <FormContainer maxWidth="sm">
        <h1 className="text-center">Create Document</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
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
            Edited File (docx)
          </InputLabel>
          <FormTextField
            {...register("editDocFile", {
              required: "editDocFile is required",
            })}
            type="file"
            error={Boolean(errors.editDocFile)}
            helperText={errors.editDocFile?.message}
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

          <InputLabel shrink id="inputs-label">
            Inputs
          </InputLabel>

          {inputs.map((input, index) => (
            <div key={index} style={{ display: "flex", marginBottom: "10px" }}>
              <FormTextField
                placeholder="Label Name"
                value={input.labelName}
                onChange={(e) => {
                  const newInputs = [...inputs];
                  newInputs[index].labelName = e.target.value;
                  setInputs(newInputs);
                }}
                fullWidth
              />
              <FormTextField
                placeholder="Label"
                value={input.label}
                onChange={(e) => {
                  const newInputs = [...inputs];
                  newInputs[index].label = e.target.value;
                  setInputs(newInputs);
                }}
                fullWidth
              />
              <Button onClick={() => removeInputRow(index)} color="secondary">
                Remove
              </Button>
            </div>
          ))}
          <Button onClick={addInputRow} color="primary">
            Add Input Row
          </Button>

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Upload
          </Button>
        </form>
      </FormContainer>
    </div>
  );
};

export default CreateDocument;
