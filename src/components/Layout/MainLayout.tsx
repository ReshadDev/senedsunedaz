import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const MainLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <>
        <ToastContainer />

        <Outlet />
      </>
      <Footer />
    </>
  );
};

export default MainLayout;
