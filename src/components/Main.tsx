import { APP_VIEW } from '@/lib/enums';

interface MainProps {
  currentView: APP_VIEW;
}

const Main = ({ currentView }: MainProps) => {
  return (
    <div className="px-7 py-5">
      {currentView === APP_VIEW.BOARD ? <>Board</> : null}
      {currentView === APP_VIEW.TABLE ? <>Table</> : null}
    </div>
  );
};

export default Main;
