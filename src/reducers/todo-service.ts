import { v4 as uuidv4 } from 'uuid';
import { AnyAction } from '@reduxjs/toolkit';
import { TodoState } from './todo-slice';

const onInitData = (state: TodoState, action: AnyAction) => {
  return { ...state, data: action.payload };
};

const onSaveTask = (state: TodoState, action: AnyAction) => {
  const { payload } = action;
  const id = payload?.id || uuidv4();

  const columnIndex = state.data.findIndex(
    (item) => item.type === payload.status
  );

  if (columnIndex !== -1) {
    if (!payload?.id) {
      state.data[columnIndex].tasks.push({ ...payload, id });
    } else {
      const taskIndex = state.data[columnIndex].tasks.findIndex(
        (item) => item.id === id
      );
      if (taskIndex !== -1) {
        state.data[columnIndex].tasks[taskIndex] = { ...payload };
      }
    }
  }

  return state;
};

const onDeleteTask = (state: TodoState, action: AnyAction) => {
  const { payload } = action;
  const { id, type } = payload;

  const columnIndex = state.data.findIndex((item) => item.type === type);

  if (columnIndex !== -1) {
    const taskIndex = state.data[columnIndex].tasks.findIndex(
      (item) => item.id === id
    );
    if (taskIndex !== -1) {
      state.data[columnIndex].tasks.splice(taskIndex, 1);
    }
  }

  return state;
};

export { onInitData, onSaveTask, onDeleteTask };
