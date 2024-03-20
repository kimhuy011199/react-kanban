import { ReactNode, useState } from 'react';
import TodoForm, { TodoFormValuesType } from './TodoForm';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import { useDispatch } from 'react-redux';
import { saveTask } from '@/reducers/todo-slice';
import { useToast } from './ui/use-toast';

const NewTodoSheet = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { toast } = useToast();

  const handleCreateTask = (values: TodoFormValuesType) => {
    dispatch(saveTask(values));
    setOpen(false);
    toast({
      description: 'Created new task successfully',
      icon: '✅',
    });
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
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
