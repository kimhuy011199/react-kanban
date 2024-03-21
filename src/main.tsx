import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.tsx';
import './index.css';
import {
  THEME_STORAGE_KEY,
  ThemeProvider,
} from './providers/theme-provider.tsx';
import { store } from './store.ts';
import { Toaster } from './components/ui/toaster.tsx';
import { saveState } from './lib/local-storage.ts';

store.subscribe(() => {
  const data = store.getState().todo.data;
  saveState(data);
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ThemeProvider defaultTheme="dark" storageKey={THEME_STORAGE_KEY}>
      <App />
      <Toaster />
    </ThemeProvider>
  </Provider>
);
