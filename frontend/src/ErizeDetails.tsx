import * as React from "react";
import { useParams } from "react-router-dom";
import { PencilIcon } from "./assets/icons";
import "react-image-gallery/styles/css/image-gallery.css";
import axios from "axios";
import config from "./config";
import "react-toastify/dist/ReactToastify.css";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
} from "@mui/material";

import { toast } from "react-toastify";

import ImageGallery from "react-image-gallery";
import { Button as NewButton } from "antd";
import { Category, ProductProps } from "./interfaces";

const ErizeDetails: React.FC = () => {
  const apiURL = config.apiURL;

  const [product, setProduct] = React.useState<ProductProps | null>(null);
  const [categoryName, setCategoryName] = React.useState<string | null>(null);
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [inputValues, setInputValues] = React.useState<
    { labelName: string; inputName: string }[]
  >([]);
  const [categories, setCategories] = React.useState<Category[]>([]);

  const params = useParams<{ slug: string }>();

  const getProduct = async () => {
    try {
      console.log("Fetching product...");
      const { data } = await axios.get(
        `${apiURL}/api/application/byId/${params.slug}`
      );
      setProduct(data.document);
      console.log("Product fetched:", data.document);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    try {
      console.log("Fetching categories...");
      const { data } = await axios.get(
        `${apiURL}/api/category/getAllCategories`
      );
      setCategories(data?.categories || []);
      console.log("Categories fetched:", data?.categories);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategoryName = (categoryId: number) => {
    const matchedCategory = categories.find(
      (category) => category?.id === categoryId
    );
    console.log("Matched category:", matchedCategory);
    setCategoryName(matchedCategory?.name || null);
  };

  React.useEffect(() => {
    console.log("Effect triggered with params.slug:", params?.slug);
    if (params?.slug) {
      getProduct();
    }
  }, [params?.slug]);

  React.useEffect(() => {
    fetchCategories();
  }, []);

  React.useEffect(() => {
    if (product) {
      getCategoryName(product.categoryId);
    }
  }, [product]);

  // console.log("Documents:", docs);

  const images = [
    {
      original: `${apiURL}/uploads/images/${product?.imageName}`,
      thumbnail: `${apiURL}/uploads/images/${product?.imageName}`,
    },
  ];

  const handleDownload = () => {
    const downloadUrl = `${apiURL}/api/application/download/${product?.id}`;

    const downloadLink = document.createElement("a");
    downloadLink.href = downloadUrl;
    downloadLink.download = product?.docName || "downloadedFile";

    document.body.appendChild(downloadLink);

    downloadLink.click();

    document.body.removeChild(downloadLink);
  };

  const handleEdit = () => {
    setOpenModal(true);
    // Initialize inputValues with the existing input values
    const initialInputValues =
      product?.extraInput.map((input) => ({
        labelName: input.labelName,
        inputName: input.inputName || "",
      })) || [];
    setInputValues(initialInputValues);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleConfirmEdit = async () => {
    try {
      const requestBody = inputValues.map((input) => ({
        labelName: input.labelName,
        inputName: input.inputName,
      }));

      await axios.post(
        `${apiURL}/api/application/editDoc/${product?.id}`,
        requestBody
      );
      await getProduct();
      toast.success("Edited successfully"); // Use toast for success message
    } catch (error) {
      console.log(error);
      toast.error("Error editing"); // Use toast for error message
    }
  };

  const handleDownloadEditedFile = async () => {
    try {
      if (product?.id) {
        const downloadUrl = `${apiURL}/api/application/downloadEditedDoc/${product.id}`;
        const downloadLink = document.createElement("a");
        downloadLink.href = downloadUrl;
        downloadLink.download = `${product.docName}_edited`;

        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      }
      handleCloseModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="erize-details-page">
      <main className="content" id="maincontent">
        <section className="erize-details-box">
          <div className="container">
            <div className="erize-details-content">
              <div className="page-box">
                <div className="text-box">
                  <p className="mid-text-s">Ərizələr</p>/<p>Ətraflı</p>
                </div>
              </div>

              <div className="erize-details-text-box">
                <div className="left-side">
                  <div>
                    <ImageGallery
                      items={images}
                      showPlayButton={false}
                      showNav={false}
                    />
                  </div>
                </div>
                <div className="right-side">
                  <div className="erize-details-action-box">
                    <div className="erize-details-erize-box">
                      <div
                        className=" d-main-box"
                        style={{ paddingBottom: "20px" }}
                      >
                        <p>Ərizə adı: </p>
                        <p>{product?.docName}</p>
                      </div>
                      <div
                        className="d-main-box"
                        style={{ paddingBottom: "20px" }}
                      >
                        <p>Kateqoriya adı: </p>
                        <NewButton type="primary">{categoryName}</NewButton>
                      </div>
                    </div>

                    <div className="action-buttons-box">
                      <a
                        target="_blank"
                        className="btn edit-btn"
                        onClick={handleEdit}
                      >
                        <img src={PencilIcon} alt="" />
                        Redaktə et
                      </a>
                      <a className="btn download-btn" onClick={handleDownload}>
                        Yüklə
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Edit Document</DialogTitle>
        <DialogContent>
          {/* Display extraInput array in the modal */}
          {product?.extraInput.map((input, index) => (
            <div key={input.id} style={{ marginBottom: "10px" }}>
              <label>{input.label}</label>
              <TextField
                variant="outlined"
                fullWidth
                defaultValue={input.inputName || ""}
                onChange={(e) => {
                  const newInputValues = [...inputValues];
                  newInputValues[index] = {
                    labelName: input.labelName,
                    inputName: e.target.value,
                  };
                  setInputValues(newInputValues);
                }}
              />
            </div>
          ))}
          <Button onClick={handleCloseModal}>Close</Button>
          <Button onClick={handleConfirmEdit} color="primary">
            Confirm
          </Button>
          <Button onClick={handleDownloadEditedFile} color="primary">
            Download Edited File
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ErizeDetails;
