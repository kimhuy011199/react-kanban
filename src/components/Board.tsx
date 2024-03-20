import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import {
  Column,
  ColumnContent,
  ColumnContentItem,
  ColumnLabel,
} from './Column';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import DetailTodoSheet from './DetailTodoSheet';
import SubtaskProgress from './SubtaskProgress';

const Board = () => {
  const data = useSelector((state: RootState) => state.todo.data);

  return (
    <div className="grid grid-cols-4 gap-6">
      {data.map((column) => (
        <Column key={column.id}>
          <ColumnLabel color={column.color}>
            {column.type} ({column.tasks.length})
          </ColumnLabel>
          <ColumnContent>
            {column.tasks.map((task) => (
              <ColumnContentItem key={task.id}>
                <DetailTodoSheet task={task}>
                  <Card>
                    <CardHeader className="flex flex-row justify-between items-center pt-4 px-3 pb-0 space-y-0">
                      <Badge
                        variant="outline"
                        type={task.label as any}
                        className="text-[10px]"
                      >
                        {task.label}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {task.deadline}
                      </span>
                    </CardHeader>
                    <CardContent className="px-3 pb-4 pt-2">
                      <CardTitle className="text-base font-medium">
                        {task.title}
                      </CardTitle>
                      <div className="mt-4 text-xs">
                        <SubtaskProgress subtasks={task.subtasks} />
                      </div>
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
