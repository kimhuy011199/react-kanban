import { cn } from '@/lib/utils';

const Column = ({ children, className, ...props }: any) => {
  return (
    <div className={cn('flex flex-col gap-4', className)} {...props}>
      {children}
    </div>
  );
};

const ColumnLabel = ({ children, className, ...props }: any) => {
  return (
    <span
      className={cn(
        'text-sm text-muted-foreground font-semibold tracking-widest flex items-center gap-3 uppercase',
        className
      )}
      {...props}
    >
      <div className="w-3 h-3 bg-white rounded-full"></div>
      {children}
    </span>
  );
};

const ColumnContent = ({ children, className, ...props }: any) => {
  return (
    <ul className={cn('flex flex-col gap-2', className)} {...props}>
      {children}
    </ul>
  );
};

const ColumnContentItem = ({ children, className, ...props }: any) => {
  return (
    <li className={cn('flex flex-col gap-2', className)} {...props}>
      {children}
    </li>
  );
};

export { Column, ColumnLabel, ColumnContent, ColumnContentItem };
