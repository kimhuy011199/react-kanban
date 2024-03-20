import { useDispatch } from 'react-redux';
import { Task } from '@/lib/interface';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { twMerge } from 'tailwind-merge';
import { saveTask } from '@/reducers/todo-slice';

const SubtasksForm = ({ task }: { task: Task }) => {
  const dispatch = useDispatch();

  const handleChangeSubtasks = (subtaskId: string) => {
    const subtasks = task.subtasks.map((subtask) =>
      subtask.id === subtaskId
        ? { ...subtask, isCompleted: !subtask.isCompleted }
        : subtask
    );

    dispatch(saveTask({ ...task, subtasks }));
  };

  return (
    <ul className="flex flex-col gap-2 mt-3">
      {task.subtasks.map((item) => (
        <li key={item.id}>
          <div className="flex items-center bg-muted px-4 rounded-md hover:bg-secondary">
            <Checkbox
              id={item.id}
              checked={item.isCompleted}
              onCheckedChange={() => handleChangeSubtasks(item.id)}
              className="cursor-pointer px-0"
            />
            <Label
              htmlFor={item.id}
              className={twMerge(
                'font-normal cursor-pointer w-full p-4 block leading-5',
                item.isCompleted ? 'line-through text-muted-foreground' : ''
              )}
            >
              {item.title}
            </Label>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SubtasksForm;
