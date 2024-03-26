import React from "react";
import FooterCV from "../../components/LayoutCV/FooterCV";
import NavbarCV from "../../components/LayoutCV/NavbarCV";
import { ToastContainer, toast } from "react-toastify";
import { cvdownload } from "../../assets/icons";
import { APIURL } from "../../config";
import axios from "axios";
import { ITemplatesProps } from "../../interfaces";

const CVTemplates: React.FC = () => {
  const [templates, setAllTemplates] = React.useState<ITemplatesProps[]>([]);

  const getAllTemplates = async () => {
    try {
      const { data } = await axios.get(`${APIURL}/api/cv/findAll`);
      if (data?.success) {
        setAllTemplates(data?.documents);
      }

      console.log("templates", templates);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getAllTemplates();
  }, []);

  const handleDownload = (erize: ITemplatesProps) => {
    const s3DownloadUrl = `https://senedsunedstorages.s3.amazonaws.com/${erize.name}`;

    const downloadLink = document.createElement("a");
    downloadLink.href = s3DownloadUrl;
    downloadLink.download = erize?.docName || "downloadedFile";

    document.body.appendChild(downloadLink);

    downloadLink.click();

    document.body.removeChild(downloadLink);
    toast.success("Sənəd uğurla yükləndi!");
  };

  return (
    <div id="cv-templates">
      <NavbarCV />
      <ToastContainer />
      <div className="cv-template-content">
        <div className="container">
          <div className="cv-templates-content">
            <div className="heading-text">
              <p className="heading-text__title">Şablonlar</p>
            </div>
            <div className="template-boxes">
              {templates?.map((template, index) => (
                <div key={index} className="template-box col-3">
                  <img
                    src={`https://senedsunedstorages.s3.amazonaws.com/${template.cvImagePath}`}
                    alt=""
                  />

                  <div className="button-box">
                    <a
                      className="btn download-new-cv-btn"
                      onClick={() => handleDownload(template)}
                    >
                      Download
                      <img src={cvdownload} alt="" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <FooterCV />
    </div>
  );
};

export default CVTemplates;
