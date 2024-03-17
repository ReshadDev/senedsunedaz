import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AdminProtectedRoute: React.FC = () => {
  const authData = localStorage.getItem("auth");
  const auth = authData ? JSON.parse(authData) : null;

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default AdminProtectedRoute;
