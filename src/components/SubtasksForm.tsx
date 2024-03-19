import { useState } from 'react';
import { Subtask } from '@/lib/interface';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { twMerge } from 'tailwind-merge';

const SubtasksForm = ({ subtasks }: { subtasks: Subtask[] }) => {
  const [subtasksList, setSubtasksList] = useState([...subtasks]);

  const handleChangeSubtasks = (id: string) => {
    const subtask = subtasksList.find((item) => item.id === id);
    if (subtask) {
      subtask.isCompleted = !subtask.isCompleted;
    }
    setSubtasksList([...subtasksList]);
  };

  return (
    <ul className="flex flex-col gap-2 mt-3">
      {subtasksList.map((item) => (
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
