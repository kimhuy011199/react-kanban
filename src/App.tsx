import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { APP_VIEW } from './lib/enums';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Main from '@/components/Main';
import { loadState, saveState } from './lib/local-storage';
import { initData } from './reducers/todo-slice';
import initialAppData from './data.json';

const App = () => {
  const [currentView, setCurrentView] = useState(APP_VIEW.BOARD);
  const dispatch = useDispatch();

  useEffect(() => {
    const initAppState = () => {
      const persistedState = loadState();
      if (!persistedState) {
        saveState(initialAppData);
      }
      dispatch(initData(persistedState || initialAppData));
    };

    initAppState();
  }, [dispatch]);

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
