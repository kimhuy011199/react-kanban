export interface Subtask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export interface Task {
  id: string;
  label: string;
  title: string;
  description: string;
  deadline: string;
  status: string;
  priority: string;
  subtasks: Subtask[];
}

export interface TodoItem {
  id: string;
  type: string;
  color?: string;
  tasks: Task[];
}
