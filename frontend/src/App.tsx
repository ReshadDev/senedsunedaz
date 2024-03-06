import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Erizeler from "./pages/Erizeler";
import Cv from "./pages/Cv";
import About from "./pages/About";
import MainLayout from "./components/Layout/MainLayout";
import Search from "./pages/Search";
import ErrorPage from "./pages/ErrorPage";
import ErizeDetails from "./pages/ErizeDetails";
import AllErizeler from "./pages/AllErizeler";
import AdminLogin from "./components/Admin/AdminLogin";
import AdminPanel from "./components/Admin/AdminPanel";
import CreateDocument from "./components/Admin/CreateDocument";
import CreateCategory from "./components/Admin/CreateCategory";
import CategoryDetails from "./pages/CategoryDetails";
// import RequireAuth from "./components/RequireAuth";
import AdminLayout from "./components/Admin/AdminLayout";
import MainLayoutCV from "./components/LayoutCV/MainLayoutCV";

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
        <Route path="cv" element={<Cv />} />
        <Route path="cv/*" element={<MainLayoutCV />}>
          <Route index element={<Cv />} />
        </Route>
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
