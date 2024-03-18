import { ReactNode } from 'react';
import TodoForm from './TodoForm';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

const NewTodoSheet = ({ children }: { children: ReactNode }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="sm:max-w-[600px]">
        <SheetHeader>
          <SheetTitle>Add New Task</SheetTitle>
          <SheetDescription>
            Create a new task here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <TodoForm />
      </SheetContent>
    </Sheet>
  );
};

export default NewTodoSheet;
