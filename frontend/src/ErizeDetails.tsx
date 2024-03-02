import * as React from "react";
import { useParams } from "react-router-dom";
import { PencilIcon } from "./assets/icons";
import "react-image-gallery/styles/css/image-gallery.css";
import axios from "axios";
import config from "./config";

import ImageGallery from "react-image-gallery";
import { Button } from "antd";

interface ProductProps {
  id: number;
  docName: string;
  docPath: string;
  imagePath: string;
  imageName: string;
  categoryId: number | null;
  link: string;
}

const ErizeDetails: React.FC = () => {
  const categoryMap = {
    1: "Ailə",
    2: "Təhsil",
    3: "Hüquqi",
    4: "İş",
    5: "Əmlak ",
    6: "Sahibkarlıq",
  };
  const apiURL = config.apiURL;

  const [product, setProduct] = React.useState<ProductProps | null>(null);
  const [categoryName, setCategoryName] = React.useState<string | null>(null);
  const params = useParams<{ slug: string }>();

  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `${apiURL}/api/application/byId/${params.slug}`
      );
      setProduct(data.document);
      console.log("DATA", data.document);
      const categoryName = categoryMap[data.document.categoryId];
      setCategoryName(categoryName);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    const fetchData = async () => {
      if (params?.slug) {
        await getProduct();
      }
    };

    fetchData();
  }, [params?.slug]);

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
                        <Button type="primary">{categoryName}</Button>
                      </div>
                    </div>

                    <div className="action-buttons-box">
                      <a
                        href={product?.link}
                        target="_blank"
                        className="btn edit-btn"
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
    </div>
  );
};

export default ErizeDetails;
