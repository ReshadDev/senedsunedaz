import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { SearchProvider } from './context/search.jsx';
import { AuthProvider } from './context/auth.tsx';
import './assets/scss/main.css';
import { DownloadCountProvider } from './context/Down.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <SearchProvider>
      <DownloadCountProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </DownloadCountProvider>
    </SearchProvider>
  </AuthProvider>
);
