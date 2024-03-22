import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { TodoItem } from './interface';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const formatCalendarDate = (date: Date | string) => {
  const options: any = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

  return new Intl.DateTimeFormat('en-US', options).format(
    typeof date === 'string' ? new Date(date) : date
  );
};

export const flattenTodo = (data: TodoItem[]) => {
  const tasksArray = data.map((todo) => todo.tasks);
  return tasksArray.flat();
};
