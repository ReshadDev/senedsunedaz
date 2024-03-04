import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AdminProtectedRoute: React.FC = () => {
  const authData = localStorage.getItem("auth");
  const auth = authData ? JSON.parse(authData) : null;

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default AdminProtectedRoute;
