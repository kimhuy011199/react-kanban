import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Main from '@/components/Main';
import { useState } from 'react';
import { APP_VIEW } from './lib/enums';

const App = () => {
  const [currentView, setCurrentView] = useState(APP_VIEW.BOARD);

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
