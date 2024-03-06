import React from "react";
import NavbarCV from "../../components/LayoutCV/NavbarCV";
import { ToastContainer } from "react-toastify";
import FooterCV from "../../components/LayoutCV/FooterCV";

const CV: React.FC = () => {
  return (
    <div id="cv">
      <NavbarCV />
      <ToastContainer />

      <main id="maincontent" className="content">
        <section className="main-banner-cv"></section>
      </main>
      <FooterCV />
    </div>
  );
};

export default CV;
