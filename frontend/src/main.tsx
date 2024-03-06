import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { SearchProvider } from "./context/search.jsx";
import { AuthProvider } from "./context/auth.tsx";
import "./assets/scss/main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <SearchProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </SearchProvider>
  </AuthProvider>
);
