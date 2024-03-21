import { useSelector, useDispatch } from 'react-redux';
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from 'react-beautiful-dnd';
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
import { dragDropTask } from '@/reducers/todo-slice';

const Board = () => {
  const data = useSelector((state: RootState) => state.todo.data);
  const dispatch = useDispatch();

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) {
      return null;
    }

    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      return null;
    }

    dispatch(
      dragDropTask({
        source,
        destination,
      })
    );
  };

  return (
    <div className="grid grid-cols-4 gap-6 min-w-[1200px]">
      <DragDropContext onDragEnd={onDragEnd}>
        {data.map((column, columnIndex) => (
          <Column key={column.id}>
            <ColumnLabel color={column.color}>
              {column.type} ({column.tasks.length})
            </ColumnLabel>
            <Droppable droppableId={columnIndex.toString()}>
              {(provided) => (
                <ColumnContent
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {column.tasks.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided) => (
                        <ColumnContentItem
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
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
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ColumnContent>
              )}
            </Droppable>
          </Column>
        ))}
      </DragDropContext>
    </div>
  );
};

export default Board;
