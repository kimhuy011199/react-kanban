import { useDispatch } from 'react-redux';
import { useToast } from './ui/use-toast';
import { Task } from '@/lib/interface';
import TodoForm, { TodoFormValuesType } from './TodoForm';
import { SheetDescription, SheetHeader, SheetTitle } from './ui/sheet';
import { saveTask } from '@/reducers/todo-slice';

const EditTodoSheet = ({
  task,
  setIsEditMode,
}: {
  task: Task;
  setIsEditMode: (value: boolean) => void;
}) => {
  const { toast } = useToast();
  const dispatch = useDispatch();

  const handleEditTask = (values: TodoFormValuesType) => {
    dispatch(saveTask({ ...values, id: task.id }));
    setIsEditMode(false);
    toast({
      description: 'Edited task successfully',
      icon: '✅',
    });
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
