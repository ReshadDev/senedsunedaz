import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const MainLayout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <>
        <ToastContainer />

        <Outlet />
      </>
      <Footer />
    </div>
  );
};

export default MainLayout;
