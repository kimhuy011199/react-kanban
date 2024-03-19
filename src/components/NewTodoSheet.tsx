import { ReactNode } from 'react';
import TodoForm, { TodoFormValuesType } from './TodoForm';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

const NewTodoSheet = ({ children }: { children: ReactNode }) => {
  const handleCreateTask = (values: TodoFormValuesType) => {
    console.log(values);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="sm:max-w-[600px] overflow-y-scroll max-h-screen">
        <SheetHeader>
          <SheetTitle>Add New Task</SheetTitle>
          <SheetDescription>
            Create a new task here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <TodoForm onSubmit={handleCreateTask} />
      </SheetContent>
    </Sheet>
  );
};

export default NewTodoSheet;
