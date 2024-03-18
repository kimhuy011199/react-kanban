import { Book, CopyPlus, SquareKanban, Table2 } from 'lucide-react';
import Logo from './Logo';
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuItemContent,
  SidebarMenuItemIcon,
} from './SidebarMenu';
import ToggleMode from './ToggleMode';

const Sidebar = () => {
  return (
    <div className="w-64 flex flex-col bg-card border-r">
      <Logo />
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuItemIcon>
            <SquareKanban size={18} />
          </SidebarMenuItemIcon>
          <SidebarMenuItemContent>Board View</SidebarMenuItemContent>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuItemIcon>
            <Table2 size={18} />
          </SidebarMenuItemIcon>
          <SidebarMenuItemContent>Table View</SidebarMenuItemContent>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuItemIcon>
            <CopyPlus size={18} />
          </SidebarMenuItemIcon>
          <SidebarMenuItemContent>Add New Task</SidebarMenuItemContent>
        </SidebarMenuItem>
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
