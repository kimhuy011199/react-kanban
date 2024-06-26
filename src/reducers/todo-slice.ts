import { TodoItem } from '@/lib/interface';
import { createSlice } from '@reduxjs/toolkit';
import {
  onSaveTask,
  onDeleteTask,
  onInitData,
  onDragDropTask,
} from './todo-service';

export interface TodoState {
  data: TodoItem[];
}

const initialState: TodoState = {
  data: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    initData: (state, action) => onInitData(state, action),
    saveTask: (state, action) => onSaveTask(state, action),
    deleteTask: (state, action) => onDeleteTask(state, action),
    dragDropTask: (state, action) => onDragDropTask(state, action),
  },
});

export const { initData, saveTask, deleteTask, dragDropTask } =
  todoSlice.actions;

export default todoSlice.reducer;
