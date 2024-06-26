import { APP_VIEW } from '@/lib/enums';
import Board from './Board';
import Table from './Table';

interface MainProps {
  currentView: APP_VIEW;
}

const Main = ({ currentView }: MainProps) => {
  return (
    <div className="px-7 py-5 bg-muted overflow-scroll board-area">
      {currentView === APP_VIEW.BOARD ? <Board /> : null}
      {currentView === APP_VIEW.TABLE ? <Table /> : null}
    </div>
  );
};

export default Main;
