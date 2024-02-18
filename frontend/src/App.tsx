import "./assets/scss/main.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Erizeler from "./pages/Erizeler";
import Cv from "./pages/Cv";
import About from "./pages/About";
import MainLayout from "./components/Layout/MainLayout";
import Search from "./pages/Search";
import ErrorPage from "./pages/ErrorPage";
import Categories from "./pages/Categories";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="erizeler" element={<MainLayout />}>
          <Route index element={<Erizeler />} />
          <Route path="about" element={<About />} />
          <Route path="search" element={<Search />} />
          <Route path="categories" element={<Categories />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route path="cv" element={<Cv />} />
      </Routes>
    </Router>
  );
};

export default App;
