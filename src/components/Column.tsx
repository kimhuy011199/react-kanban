import React from 'react';
import { cn } from '@/lib/utils';
import { twMerge } from 'tailwind-merge';

const Column = ({ children, className, ...props }: any) => {
  return (
    <div className={cn('flex flex-col gap-4', className)} {...props}>
      {children}
    </div>
  );
};

const ColumnLabel = ({ children, className, color, ...props }: any) => {
  return (
    <span
      className={cn(
        'text-sm text-muted-foreground font-semibold tracking-widest flex items-center gap-3 uppercase',
        className
      )}
      {...props}
    >
      <div className={twMerge('w-3 h-3 rounded-full', color)}></div>
      {children}
    </span>
  );
};

const ColumnContent = React.forwardRef<any, any>(
  ({ children, className, ...props }: any, ref) => {
    return (
      <ul className={cn('min-h-60', className)} ref={ref} {...props}>
        {children}
      </ul>
    );
  }
);

const ColumnContentItem = React.forwardRef<any, any>(
  ({ children, className, ...props }: any, ref) => {
    return (
      <li
        className={cn('flex flex-col gap-2 mb-3', className)}
        ref={ref}
        {...props}
      >
        {children}
      </li>
    );
  }
);

export { Column, ColumnLabel, ColumnContent, ColumnContentItem };
