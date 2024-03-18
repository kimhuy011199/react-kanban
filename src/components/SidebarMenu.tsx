import { cn } from '@/lib/utils';

const SidebarMenu = ({ children, className, ...props }: any) => {
  return (
    <ul className={cn('flex flex-col gap-2 p-4', className)} {...props}>
      {children}
    </ul>
  );
};

const SidebarMenuItem = ({
  children,
  className,
  isActive = false,
  ...props
}: any) => {
  return (
    <li
      className={cn(
        'flex items-center w-full font-medium gap-4 cursor-pointer text-sm px-3 py-3 transition-all text-muted-foreground rounded-md hover:bg-accent',
        isActive
          ? 'bg-primary text-white hover:bg-primary hover:text-white'
          : '',
        className
      )}
      {...props}
    >
      {children}
    </li>
  );
};

const SidebarMenuItemContent = ({ children, className, ...props }: any) => {
  return (
    <span className={cn('', className)} {...props}>
      {children}
    </span>
  );
};

const SidebarMenuItemIcon = ({ children, className, ...props }: any) => {
  return (
    <span className={cn('', className)} {...props}>
      {children}
    </span>
  );
};

export {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuItemContent,
  SidebarMenuItemIcon,
};
