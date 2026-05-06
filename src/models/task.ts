
export type Task = {
  id: number;
  title: string;
  description?: string;
  status: 'todo' | 'doing' | 'done';
  deadline?: string;
  priority?: 'high' | 'medium' | 'low';
  tags?: string[];
};

const KEY = 'TASKS';

export const getTasks = (): Task[] => {
  return JSON.parse(localStorage.getItem(KEY) || '[]');
};

export const saveTasks = (data: Task[]) => {
  localStorage.setItem(KEY, JSON.stringify(data));
};