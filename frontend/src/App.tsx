import "./assets/scss/main.css";
import "react-quill/dist/quill.snow.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Erizeler from "./pages/Erizeler";
import Cv from "./pages/Cv";
import About from "./pages/About";
import MainLayout from "./components/Layout/MainLayout";
import Search from "./pages/Search";
import ErrorPage from "./pages/ErrorPage";
import Categories from "./pages/Categories";
import ErizeDetails from "./pages/ErizeDetails";
import AllErizeler from "./pages/AllErizeler";
import CategoryErizeler from "./pages/CategoryErizeler";
import AdminLogin from "./components/Admin/AdminLogin";
import AdminPanel from "./components/Admin/AdminPanel";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="erizeler" element={<MainLayout />}>
          <Route index element={<Erizeler />} />
          <Route path="all" element={<AllErizeler />} />
          <Route path="about" element={<About />} />
          <Route path="erize/:slug" element={<ErizeDetails />} />
          {/* <Route path="category/:slug" element={<CategoryErizeler />} /> */}
          <Route path="category" element={<CategoryErizeler />} />
          <Route path="search" element={<Search />} />
          <Route path="categories" element={<Categories />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route path="cv" element={<Cv />} />
        <Route path="login" element={<AdminLogin />} />
        <Route path="admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
};

export default App;
