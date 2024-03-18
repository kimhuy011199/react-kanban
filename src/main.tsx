import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {
  THEME_STORAGE_KEY,
  ThemeProvider,
} from './providers/theme-provider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey={THEME_STORAGE_KEY}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
