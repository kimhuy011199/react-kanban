import { TodoItem } from '@/lib/interface';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { onInitData } from './todo-service';

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
  },
});

export const { initData } = todoSlice.actions;

export default todoSlice.reducer;
