import { ColumnDef } from '@tanstack/react-table';
import { Task } from '@/lib/interface';
import { twMerge } from 'tailwind-merge';
import { Eye, Flame } from 'lucide-react';
import { PriorityItem } from './PriorityBadge';
import { Badge } from './ui/badge';
import DetailTodoSheet from './DetailTodoSheet';

export const TABLE_COLUMNS: ColumnDef<Task>[] = [
  {
    accessorKey: 'title',
    header: 'Title',
    cell: ({ row }) => {
      const title = row.getValue('title') as string;
      const { label = '' } = row.original;
      return (
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-muted">
            <span className="first-letter:uppercase">{label}</span>
          </Badge>
          <span>{title}</span>
        </div>
      );
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      return (
        <DetailTodoSheet task={row.original}>
          <Eye size={18} className="cursor-pointer text-muted-foreground" />
        </DetailTodoSheet>
      );
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status') as string;
      return <div className="first-letter:uppercase">{status}</div>;
    },
  },
  {
    accessorKey: 'priority',
    header: 'Priority',
    cell: ({ row }) => {
      const priority = row.getValue('priority') as string;
      return <PriorityItem priority={priority} className="gap-2" />;
    },
  },
  {
    accessorKey: 'deadline',
    header: 'Deadline',
    cell: ({ row }) => {
      const deadlineValue = row.getValue('deadline') as string;
      const isMetDeadline = new Date(deadlineValue) < new Date();
      return (
        <div
          className={twMerge(
            'flex items-center gap-2',
            isMetDeadline ? 'text-destructive' : ''
          )}
        >
          <span>{deadlineValue}</span>
          {isMetDeadline ? <Flame size={16} /> : null}
        </div>
      );
    },
  },
];
