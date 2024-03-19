import { Book, CopyPlus, SquareKanban, Table2 } from 'lucide-react';
import Logo from './Logo';
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuItemContent,
  SidebarMenuItemIcon,
} from './SidebarMenu';
import ToggleMode from './ToggleMode';
import { APP_VIEW } from '@/lib/enums';
import NewTodoSheet from './NewTodoSheet';

interface SidebarProps {
  currentView: APP_VIEW;
  setCurrentView: (view: APP_VIEW) => void;
}

const Sidebar = ({ currentView, setCurrentView }: SidebarProps) => {
  return (
    <div className="w-80 flex flex-col bg-card border-r">
      <Logo />
      <SidebarMenu>
        <SidebarMenuItem
          isActive={currentView === APP_VIEW.BOARD}
          onClick={() => setCurrentView(APP_VIEW.BOARD)}
        >
          <SidebarMenuItemIcon>
            <SquareKanban size={18} />
          </SidebarMenuItemIcon>
          <SidebarMenuItemContent>Board view</SidebarMenuItemContent>
        </SidebarMenuItem>
        <SidebarMenuItem
          isActive={currentView === APP_VIEW.TABLE}
          onClick={() => setCurrentView(APP_VIEW.TABLE)}
        >
          <SidebarMenuItemIcon>
            <Table2 size={18} />
          </SidebarMenuItemIcon>
          <SidebarMenuItemContent>Table view</SidebarMenuItemContent>
        </SidebarMenuItem>
        <NewTodoSheet>
          <SidebarMenuItem>
            <SidebarMenuItemIcon>
              <CopyPlus size={18} />
            </SidebarMenuItemIcon>
            <SidebarMenuItemContent>Add new task</SidebarMenuItemContent>
          </SidebarMenuItem>
        </NewTodoSheet>
        <SidebarMenuItem>
          <SidebarMenuItemIcon>
            <Book size={18} />
          </SidebarMenuItemIcon>
          <SidebarMenuItemContent>About</SidebarMenuItemContent>
        </SidebarMenuItem>
      </SidebarMenu>
      <ToggleMode />
    </div>
  );
};

export default Sidebar;
