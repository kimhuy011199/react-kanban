import { Task } from '@/lib/interface';
import TodoForm, { TodoFormValuesType } from './TodoForm';
import { SheetDescription, SheetHeader, SheetTitle } from './ui/sheet';

const EditTodoSheet = ({
  task,
  setIsEditMode,
}: {
  task: Task;
  setIsEditMode: (value: boolean) => void;
}) => {
  const handleEditTask = (values: TodoFormValuesType) => {
    console.log(values);
    setIsEditMode(false);
  };

  return (
    <>
      <SheetHeader>
        <SheetTitle>Edit Task</SheetTitle>
        <SheetDescription>
          Update your task here. Click save when you're done.
        </SheetDescription>
      </SheetHeader>
      <TodoForm formValues={task} onSubmit={handleEditTask} />
    </>
  );
};

export default EditTodoSheet;
