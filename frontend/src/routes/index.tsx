import Home from "../pages/Home";
import DocumentList from "../pages/DocumentList";
import Erizeler from "../pages/Erizeler";
import Cv from "../pages/Cv";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/documents", element: <DocumentList /> },
  { path: "/erizeler", element: <Erizeler /> },
  { path: "/cv", element: <Cv /> },
];

export default routes;
