import * as React from "react";
import { Link, useParams } from "react-router-dom";
import ErizeExamples, { ErizeExampleProps } from "../data";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { PencilIcon } from "../assets/icons";
import quillEmoji from "quill-emoji";

const { EmojiBlot, ShortNameEmoji, ToolbarEmoji, TextAreaEmoji } = quillEmoji;

Quill.register(
  {
    "formats/emoji": EmojiBlot,
    "modules/emoji-shortname": ShortNameEmoji,
    "modules/emoji-toolbar": ToolbarEmoji,
    "modules/emoji-textarea": TextAreaEmoji,
  },
  true
);

const ErizeDetails: React.FC = () => {
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike", "link"],
      [
        { list: "ordered" },
        { list: "bullet" },
        {
          color: [
            "#e60000",
            "#ff9900",
            "#ffff00",
            "#008a00",
            "#0066cc",
            "#9933ff",
            "#ffffff",
            "#facccc",
            "#ffebcc",
            "#ffffcc",
            "#cce8cc",
            "#cce0f5",
            "#ebd6ff",
            "#bbbbbb",
            "#f06666",
            "#ffc266",
            "#ffff66",
            "#66b966",
            "#66a3e0",
            "#c285ff",
            "#888888",
            "#a10000",
            "#b26b00",
            "#b2b200",
            "#006100",
            "#0047b2",
            "#6b24b2",
            "#444444",
            "#5c0000",
            "#663d00",
            "#666600",
            "#003700",
            "#002966",
            "#3d1466",
            "custom-color",
          ],
        },
      ],
      ["emoji"],
      ["clean"],
    ],
    "emoji-textarea": false,
    "emoji-shortname": true,
    clipboard: {
      matchVisual: false,
    },
  };
  const params = useParams<{ slug: string }>();

  const [, setErize] = React.useState<ErizeExampleProps>({
    id: 0,
    title: "",
    description: "",
    slug: "",
  });

  const [editorContent, setEditorContent] = React.useState<string>(
    "<p>Start typing your content...</p>"
  );

  React.useEffect(() => {
    const selectedErize = ErizeExamples.find(
      (item) => item.slug === params.slug
    );
    setErize(selectedErize || ErizeExamples[0]);

    // Fetch HTML content from the file
    const fetchHTMLContent = async () => {
      try {
        // const response = await fetch("/src/erizehtml/new.html");
        // const htmlContent = await response.text();
        // const parser = new DOMParser();
        // const document = parser.parseFromString(htmlContent, "text/html");

        const htmlContent = `
        <p
  style="
    margin-top: 0pt;
    margin-bottom: 0pt;
    text-align: right;
    font-size: 11pt;
  "
>
  <span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&quot;XXX&quot;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;Mə**** Məsuliyyətli</span
  ><span style="font-family: Arial">&nbsp;</span>
</p>
<p
  style="
    margin-top: 0pt;
    margin-bottom: 0pt;
    text-align: right;
    font-size: 11pt;
  "
>
  <span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">Cəmiyyətinin direktoru</span
  ><span style="font-family: Arial">&nbsp;</span>
</p>
<p
  style="
    margin-top: 0pt;
    margin-bottom: 0pt;
    text-align: right;
    font-size: 11pt;
  "
>
  <span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">XXX</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;XXX</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;XXX oğluna</span
  ><span style="font-family: Arial">&nbsp;</span>
</p>
<p
  style="
    margin-top: 0pt;
    margin-bottom: 0pt;
    text-align: right;
    font-size: 11pt;
  "
>
  <span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial"
    >&mdash;&mdash;&ndash;&mdash;&mdash;&ndash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</span
  >
</p>
<p
  style="
    margin-top: 0pt;
    margin-bottom: 0pt;
    text-align: right;
    font-size: 11pt;
  "
>
  <span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">qeydiyyat &uuml;nvanı)</span
  ><span style="font-family: Arial">&nbsp;</span>
</p>
<p
  style="
    margin-top: 0pt;
    margin-bottom: 0pt;
    text-align: right;
    font-size: 11pt;
  "
>
  <span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial"
    >&mdash;&mdash;&mdash;&mdash;&uuml;nvanında</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span>
</p>
<p
  style="
    margin-top: 0pt;
    margin-bottom: 0pt;
    text-align: right;
    font-size: 11pt;
  "
>
  <span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">qeydiyyatda olan</span
  ><span style="font-family: Arial">&nbsp;</span>
</p>
<p
  style="
    margin-top: 0pt;
    margin-bottom: 0pt;
    text-align: right;
    font-size: 11pt;
  "
>
  <span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial"
    >&mdash;&mdash;&mdash;&mdash;&ndash;&mdash;&ndash;&mdash;&mdash;&mdash;&mdash;&ndash;&mdash;&mdash;&mdash;</span
  >
</p>
<p
  style="
    margin-top: 0pt;
    margin-bottom: 0pt;
    text-align: right;
    font-size: 11pt;
  "
>
  <span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">(soyad, ad, ata adı)</span
  ><span style="font-family: Arial">&nbsp;</span>
</p>
<p style="margin-top: 0pt; margin-bottom: 0pt; text-align: right">
  <span style="font-family: 'Times New Roman'">&nbsp;</span>
</p>
<p
  style="
    margin-top: 0pt;
    margin-bottom: 0pt;
    text-align: right;
    font-size: 11pt;
  "
>
  <span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">tərəfindən</span
  ><span style="font-family: Arial">&nbsp;</span>
</p>
<p style="margin-top: 0pt; margin-bottom: 12pt">
  <span style="font-family: 'Times New Roman'">&nbsp;</span>
</p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt">
  <span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial"
    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
  ><strong><span style="font-family: Arial">Ə R İ Z Ə</span></strong>
</p>
<p style="margin-top: 0pt; margin-bottom: 0pt">
  <span style="font-family: 'Times New Roman'">&nbsp;</span>
</p>
<p style="margin-top: 0pt; margin-bottom: 0pt">
  <span style="font-family: Arial; font-size: 11pt"
    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
  ><span style="font-family: Arial; font-size: 11pt"
    >Yazıb sizdən xahiş edirəm ki, məni &mdash;&mdash;&mdash;&mdash;&mdash;- ci
    il tarixdən etibarən cəmiyyətinizə
    &mdash;&mdash;&mdash;&mdash;&mdash;&mdash; vəzifəsinə ( peşəsinə)</span
  ><span style="font-family: Arial; font-size: 11pt">&nbsp;</span
  ><span style="font-family: 'Times New Roman'">&nbsp;</span
  ><span style="font-family: Arial; font-size: 11pt">(vəzifənin adı)</span
  ><span style="font-family: Arial; font-size: 11pt">&nbsp;</span
  ><span style="font-family: 'Times New Roman'">&nbsp;</span
  ><span style="font-family: Arial; font-size: 11pt">qəbul edəsiniz.</span
  ><br /><span style="font-family: 'Times New Roman'">&nbsp;</span>
</p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt">
  <span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial">&nbsp;</span
  ><span style="font-family: Arial"
    >&quot;&mdash;&quot; &mdash;&mdash;&mdash;20 &mdash;&mdash;** il</span
  >
</p>
<p style="margin-top: 0pt; margin-bottom: 0pt">
  <span style="font-family: 'Times New Roman'">&nbsp;</span>
</p>
<p style="margin-top: 0pt; margin-bottom: 0pt; font-size: 11pt">
  <span style="font-family: Arial"
    >İmza:&mdash;&mdash;&mdash;&mdash;&mdash;/&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;/</span
  >
</p>
<p style="margin-top: 0pt; margin-bottom: 0pt">
  <span style="font-family: 'Times New Roman'">&nbsp;</span>
</p>
<p style="margin-top: 0pt; margin-bottom: 0pt">&nbsp;</p>

        `;

        setEditorContent(htmlContent);
        console.log(htmlContent);

        // console.log("HTML content fetched successfully:", htmlContent);
      } catch (error) {
        console.error("Error fetching HTML content:", error);
      }
    };

    fetchHTMLContent();
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
              <div className="page-box">
                <div className="text-box">
                  <p>Ailə</p>/<p className="mid-text-s">Ərizələr</p>/
                  <p>Ətraflı</p>
                </div>
              </div>
              <div className="erize-details-action-box">
                <div className="action-buttons-box">
                  <Link to="/erizeler" className="btn edit-btn">
                    <img src={PencilIcon} alt="" />
                    Redaktə et
                  </Link>
                  <a
                    onClick={() => console.log("salam")}
                    className="btn download-btn"
                  >
                    Yüklə
                  </a>
                </div>
              </div>
              <div className="erize-details-text-box">
                <div className="erize-details-erize-box">
                  <h1>{ErizeExamples[0].title}</h1>
                </div>
                <div className="document-editor">
                  <ReactQuill
                    value={editorContent}
                    onChange={handleEditorChange}
                    modules={modules}
                    formats={["bold", "italic", "underline", "strike"]}
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
