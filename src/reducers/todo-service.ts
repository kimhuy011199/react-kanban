import { v4 as uuidv4 } from 'uuid';
import { AnyAction } from '@reduxjs/toolkit';
import { TodoState } from './todo-slice';

const onInitData = (state: TodoState, action: AnyAction) => {
  return { ...state, data: action.payload };
};

const onSaveTask = (state: TodoState, action: AnyAction) => {
  const { payload } = action;
  const id = uuidv4();

  const columnIndex = state.data.findIndex(
    (item) => item.type === payload.status
  );

  if (columnIndex !== -1) {
    state.data[columnIndex].tasks.push({ ...payload, id });
  }

  return state;
};

const onDeleteTask = (state: TodoState, action: AnyAction) => {
  return { ...state, data: action.payload };
};

export { onInitData, onSaveTask, onDeleteTask };
