import { ReactNode } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import { Task } from '@/lib/interface';
import { CalendarIcon, Dot, ListTodo } from 'lucide-react';
import { Badge } from './ui/badge';
import { twMerge } from 'tailwind-merge';

const DetailTodoSheet = ({
  children,
  task,
}: {
  children: ReactNode;
  task: Task;
}) => {
  const isMetDeadline = new Date(task.deadline) > new Date();
  console.log(new Date(task.deadline), isMetDeadline);

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="sm:max-w-[600px] overflow-y-scroll max-h-screen">
        <SheetHeader>
          <div className="flex justify-between items-center pr-8 pb-5 text-base">
            <Badge>{task.label}</Badge>
            <div className="flex items-center gap-2">
              <span className="uppercase font-semibold">{task.status}</span>
              <Dot className="text-muted-foreground" />
              <div
                className={twMerge(
                  'flex gap-2 items-center text-muted-foreground',
                  isMetDeadline ? 'text-destructive' : ''
                )}
              >
                <CalendarIcon size={14} />
                <span className="font-medium">{task.deadline}</span>
              </div>
            </div>
          </div>
        </SheetHeader>
        <div className="flex flex-col gap-4">
          <SheetTitle>{task.title}</SheetTitle>
          <SheetDescription className="text-base">
            {task.description}
          </SheetDescription>
          <div>
            <div className="flex items-center">
              <ListTodo size={16} />
              <span className="pl-2 font-semibold">Subtasks</span>
            </div>
            <ul className="mt-2">
              {task.subtasks.map((subtask) => (
                <li key={subtask.id}>
                  <div>
                    <span>{subtask.title}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default DetailTodoSheet;
