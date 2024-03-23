import { ColumnDef } from '@tanstack/react-table';
import { Task } from '@/lib/interface';
import { twMerge } from 'tailwind-merge';
import { Eye, Flame } from 'lucide-react';
import { PriorityItem } from './PriorityBadge';
import { Badge } from './ui/badge';
import DetailTodoSheet from './DetailTodoSheet';
import TableHeader from './TableHeader';

export const TABLE_COLUMNS: ColumnDef<Task>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => {
      return <TableHeader column={column} title="Task" />;
    },
    cell: ({ row }) => {
      const id = row.getValue('id') as string;
      return <div className="uppercase">{id}</div>;
    },
  },
  {
    accessorKey: 'title',
    header: ({ column }) => {
      return <TableHeader column={column} title="Title" />;
    },
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
    header: ({ column }) => {
      return <TableHeader column={column} title="Status" />;
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    cell: ({ row }) => {
      const status = row.getValue('status') as string;
      return <div className="first-letter:uppercase">{status}</div>;
    },
  },
  {
    accessorKey: 'priority',
    header: ({ column }) => {
      return <TableHeader column={column} title="Priority" />;
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    cell: ({ row }) => {
      const priority = row.getValue('priority') as string;
      return <PriorityItem priority={priority} className="gap-2" />;
    },
  },
  {
    accessorKey: 'deadline',
    header: ({ column }) => {
      return <TableHeader column={column} title="Deadline" />;
    },
    filterFn: (row, id, value) => {
      const isMissDeadline = new Date(row.getValue(id)) < new Date();
      return value.length > 1 || !!value[0] === isMissDeadline;
    },
    cell: ({ row }) => {
      const deadlineValue = row.getValue('deadline') as string;
      const isMissDeadline = new Date(deadlineValue) < new Date();
      return (
        <div
          className={twMerge(
            'flex items-center gap-2',
            isMissDeadline ? 'text-destructive' : ''
          )}
        >
          <span>{deadlineValue}</span>
          {isMissDeadline ? <Flame size={16} /> : null}
        </div>
      );
    },
  },
];
