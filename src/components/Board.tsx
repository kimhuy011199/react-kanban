import {
  Column,
  ColumnContent,
  ColumnContentItem,
  ColumnLabel,
} from './Column';
import { Badge } from './ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import data from '../data.json';

const Board = () => {
  console.log('data', data);

  return (
    <div className="grid grid-cols-4 gap-6">
      {data.map((column) => (
        <Column key={column.id}>
          <ColumnLabel>
            {column.type} ({column.tasks.length})
          </ColumnLabel>
          <ColumnContent>
            {column.tasks.map((todo) => (
              <ColumnContentItem key={todo.id}>
                <Card>
                  <CardHeader className="flex flex-row justify-between items-center pt-4 px-3 pb-0 space-y-0">
                    <Badge className="text-[10px]">{todo.label}</Badge>
                    <span className="text-xs text-muted-foreground">
                      {todo.deadline}
                    </span>
                  </CardHeader>
                  <CardContent className="px-3 pb-4 pt-2">
                    <CardTitle className="text-base font-medium">
                      {todo.title}
                    </CardTitle>
                    <CardDescription className="mt-1.5 text-xs">
                      3 of 3 subtasks
                    </CardDescription>
                  </CardContent>
                </Card>
              </ColumnContentItem>
            ))}
          </ColumnContent>
        </Column>
      ))}
    </div>
  );
};

export default Board;
