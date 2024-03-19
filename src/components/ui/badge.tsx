import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground',
      },
      type: {
        testing: 'text-fuchsia-500 border-fuchsia-500',
        development: 'text-yellow-500 border-yellow-500',
        design: 'text-teal-500 border-teal-500',
        documentation: 'text-sky-500 border-sky-500',
        default: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      type: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, type, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, type }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
