import { Table } from '@tanstack/react-table';
import { X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

const TableFilter = ({ table }: DataTableToolbarProps<any>) => {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center gap-2">
      <Input
        placeholder="Filter tasks..."
        value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
        onChange={(event) =>
          table.getColumn('title')?.setFilterValue(event.target.value)
        }
        className="w-80"
      />
      {isFiltered && (
        <Button
          variant="ghost"
          onClick={() => table.resetColumnFilters()}
          className="px-3"
        >
          Reset
          <X className="ml-2 h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default TableFilter;
