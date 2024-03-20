import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.tsx';
import './index.css';
import {
  THEME_STORAGE_KEY,
  ThemeProvider,
} from './providers/theme-provider.tsx';
import { store } from './store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey={THEME_STORAGE_KEY}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
