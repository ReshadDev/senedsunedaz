import React from "react";
import CvNavbar from "./CvNavbar";
import CvFooter from "./CvFooter";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const MainLayoutCV: React.FC = () => {
  return (
    <div>
      <CvNavbar />
      <>
        <ToastContainer />

        <Outlet />
      </>
      <CvFooter />
    </div>
  );
};

export default MainLayoutCV;
