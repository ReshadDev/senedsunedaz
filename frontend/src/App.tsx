import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Erizeler from "./pages/Erizeler/Erizeler";
import CV from "./pages/CV/CV";
import About from "./pages/Erizeler/About";
import MainLayout from "./components/Layout/MainLayout";
import Search from "./pages/Erizeler/Search";
import ErrorPage from "./pages/Erizeler/ErrorPage";
import ErizeDetails from "./pages/Erizeler/ErizeDetails";
import AllErizeler from "./pages/Erizeler/AllErizeler";
import AdminLogin from "./components/Admin/AdminLogin";
import AdminPanel from "./components/Admin/AdminPanel";
import CreateDocument from "./components/Admin/CreateDocument";
import CreateCategory from "./components/Admin/CreateCategory";
import CategoryDetails from "./pages/Erizeler/CategoryDetails";
// import RequireAuth from "./components/RequireAuth";
import AdminLayout from "./components/Admin/AdminLayout";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="erizeler/*" element={<MainLayout />}>
          <Route index element={<Erizeler />} />
          <Route path="all" element={<AllErizeler />} />
          <Route path="about" element={<About />} />
          <Route path="erize/:slug" element={<ErizeDetails />} />
          <Route path="category/:slug" element={<CategoryDetails />} />
          <Route path="search" element={<Search />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>

        <Route path="cv" element={<CV />} />
        <Route path="login" element={<AdminLogin />} />
        {/* <Route element={<RequireAuth />}> */}
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<AdminPanel />} />
          <Route path="create-category" element={<CreateCategory />} />
          <Route path="create-document" element={<CreateDocument />} />
        </Route>
        {/* </Route> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
