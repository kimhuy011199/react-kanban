import { ReactNode, useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import { Task } from '@/lib/interface';
import { CalendarIcon, Dot, ListTodo } from 'lucide-react';
import { Badge } from './ui/badge';
import { twMerge } from 'tailwind-merge';
import SubtasksForm from './SubtasksForm';
import DeleteTodoDialog from './DeleteTodoDialog';
import { Button } from './ui/button';
import EditTodoSheet from './EditTodoSheet';
import PriorityBadge from './PriorityBadge';

const DetailTodoSheet = ({
  children,
  task,
}: {
  children: ReactNode;
  task: Task;
}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [open, setOpen] = useState(false);
  const isMissDeadline = new Date(task.deadline) < new Date();

  return (
    <Sheet
      open={open}
      onOpenChange={(value) => {
        setOpen(value);
        setIsEditMode(false);
      }}
    >
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="sm:max-w-[600px] overflow-y-scroll max-h-screen flex flex-col">
        {!isEditMode ? (
          <>
            <SheetHeader>
              <div className="flex justify-between items-center pr-8 text-base">
                <Badge type={task.label as any} variant="outline">
                  <span className="first-letter:uppercase">{task.label}</span>
                </Badge>
                <div className="flex items-center gap-2">
                  <PriorityBadge priority={task.priority} />
                  <Dot className="text-muted-foreground" />
                  <span className="uppercase font-semibold">{task.status}</span>
                  <Dot className="text-muted-foreground" />
                  <div
                    className={twMerge(
                      'flex gap-2 items-center text-muted-foreground',
                      isMissDeadline ? 'text-destructive' : ''
                    )}
                  >
                    <CalendarIcon size={14} />
                    <span className="font-medium">{task.deadline}</span>
                  </div>
                </div>
              </div>
            </SheetHeader>
            <div className="flex flex-col gap-5">
              <SheetTitle>{task.title}</SheetTitle>
              <SheetDescription className="text-base">
                {task.description || 'No description'}
              </SheetDescription>
              <div>
                <div className="flex items-center">
                  <ListTodo size={16} />
                  <span className="pl-2 font-semibold">Subtasks</span>
                </div>
                <SubtasksForm task={task} />
              </div>
            </div>
            <SheetFooter className="flex gap-2 mt-auto">
              <Button variant="secondary" onClick={() => setIsEditMode(true)}>
                Edit
              </Button>
              <DeleteTodoDialog
                id={task.id}
                type={task.status}
                callback={() => setOpen(false)}
              />
            </SheetFooter>
          </>
        ) : (
          <EditTodoSheet task={task} setIsEditMode={setIsEditMode} />
        )}
      </SheetContent>
    </Sheet>
  );
};

export default DetailTodoSheet;
