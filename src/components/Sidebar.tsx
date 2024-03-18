import Logo from './Logo';
import ToggleMode from './ToggleMode';

const Sidebar = () => {
  return (
    <div className="w-64 flex flex-col bg-card border-r">
      <Logo />
      <ToggleMode />
    </div>
  );
};

export default Sidebar;
