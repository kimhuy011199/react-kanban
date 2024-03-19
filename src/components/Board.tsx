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
import DetailTodoSheet from './DetailTodoSheet';

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
            {column.tasks.map((task) => (
              <ColumnContentItem key={task.id}>
                <DetailTodoSheet task={task}>
                  <Card>
                    <CardHeader className="flex flex-row justify-between items-center pt-4 px-3 pb-0 space-y-0">
                      <Badge className="text-[10px]">{task.label}</Badge>
                      <span className="text-xs text-muted-foreground">
                        {task.deadline}
                      </span>
                    </CardHeader>
                    <CardContent className="px-3 pb-4 pt-2">
                      <CardTitle className="text-base font-medium">
                        {task.title}
                      </CardTitle>
                      <CardDescription className="mt-1.5 text-xs">
                        3 of 3 subtasks
                      </CardDescription>
                    </CardContent>
                  </Card>
                </DetailTodoSheet>
              </ColumnContentItem>
            ))}
          </ColumnContent>
        </Column>
      ))}
    </div>
  );
};

export default Board;
