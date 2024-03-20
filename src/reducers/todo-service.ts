import { AnyAction } from '@reduxjs/toolkit';
import { TodoState } from './todo-slice';

const onInitData = (state: TodoState, action: AnyAction) => {
  return { ...state, data: action.payload };
};

export { onInitData };
