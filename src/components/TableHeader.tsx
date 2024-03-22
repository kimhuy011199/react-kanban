import { ChevronsUpDown, ArrowDownAZ, ArrowDownZA } from 'lucide-react';
import { Button } from './ui/button';

const TableHeader = ({ column, title }: { column: any; title: string }) => {
  const sorted = column.getIsSorted();
  const renderSortedIcon =
    sorted === 'asc' ? (
      <ArrowDownAZ className="h-4 w-4" />
    ) : (
      <ArrowDownZA className="h-4 w-4" />
    );

  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(sorted === 'asc')}
      className="-ml-3 p-3"
    >
      <span className="mr-2">{title}</span>
      {!sorted ? (
        <ChevronsUpDown className="h-4 w-4" />
      ) : (
        <>{renderSortedIcon}</>
      )}
    </Button>
  );
};

export default TableHeader;
