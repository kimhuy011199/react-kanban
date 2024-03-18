import { useEffect, useState } from 'react';
import { APP_VIEW } from './lib/enums';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Main from '@/components/Main';
import { loadState } from './lib/local-storage';

const App = () => {
  const [currentView, setCurrentView] = useState(APP_VIEW.BOARD);

  useEffect(() => {
    const initAppState = async () => {
      const persistedState = loadState();

      // If data is alreay in Local storage
      if (persistedState) {
        // Init data
      } else {
        // Get data from app and init data
      }
    };

    initAppState();
  }, []);

  return (
    <div className="flex h-screen w-screen">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <div className="flex flex-col w-full">
        <Header />
        <Main currentView={currentView} />
      </div>
    </div>
  );
};

export default App;
