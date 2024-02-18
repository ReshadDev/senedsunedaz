import * as React from "react";
import { Link, useParams } from "react-router-dom";
import ErizeExamples, { ErizeExampleProps } from "../data";
import mammoth from "mammoth";
import document from "../erizeler/erize1.docx"; // Adjusted import path
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ErizeDetails: React.FC = () => {
  const params = useParams<{ slug: string }>();

  const [erize, setErize] = React.useState<ErizeExampleProps>({
    id: 0,
    title: "",
    description: "",
    slug: "",
  });

  const [, setDocumentContent] = React.useState<string>("");
  const [editorContent, setEditorContent] = React.useState<string>("");

  React.useEffect(() => {
    const selectedErize = ErizeExamples.find(
      (item) => item.slug === params.slug
    );
    if (selectedErize) {
      setErize(selectedErize);

      // Load DOCX file content
      fetch(document)
        .then((response) => response.arrayBuffer())
        .then((data) => {
          const arrayBuffer = new Uint8Array(data);
          mammoth
            .extractRawText({ arrayBuffer })
            .then((result) => {
              setDocumentContent(result.value);
              setEditorContent(result.value); // Initialize the editor content
              console.log(result.value);
            })
            .catch((error) =>
              console.error("Error extracting content:", error)
            );
        })
        .catch((error) => console.error("Error loading document:", error));
    }
  }, [params.slug]);

  const handleEditorChange = (content: string) => {
    setEditorContent(content);
  };

  return (
    <div className="erize-details-page">
      <main className="content" id="maincontent">
        <section className="erize-details-box">
          <div className="container">
            <div className="erize-details-content">
              <div className="erize-details-action-box">
                <div className="action-text-box">
                  <h1>{erize.title}</h1>
                  <p>{erize.description}</p>
                </div>
                <div className="action-buttons-box">
                  <Link to="/erizeler" className="btn btn-primary">
                    Geri Dön
                  </Link>
                  <Link to="/erizeler" className="btn btn-primary">
                    Geri Dön
                  </Link>
                </div>
              </div>
              <div className="erize-details-text-box">
                <div className="document-editor">
                  <ReactQuill
                    value={editorContent}
                    onChange={handleEditorChange}
                    modules={{ toolbar: false }}
                    readOnly={true}
                    theme="snow"
                  />
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
