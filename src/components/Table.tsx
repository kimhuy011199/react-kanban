import { useSelector } from 'react-redux';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { RootState } from '@/store';
import { TABLE_COLUMNS } from './TableColumn';
import { flattenTodo } from '@/lib/utils';
import { useMemo } from 'react';

const TableView = () => {
  const data = useSelector((state: RootState) => state.todo.data);
  const flattenData = useMemo(() => flattenTodo(data), [data]);

  const table = useReactTable({
    data: flattenData,
    columns: TABLE_COLUMNS,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md bg-background text-foreground border min-w-[1080px] max-w-screen-2xl">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={TABLE_COLUMNS.length}
                className="h-24 text-center"
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableView;
