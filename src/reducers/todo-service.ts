import { v4 as uuidv4 } from 'uuid';
import { AnyAction } from '@reduxjs/toolkit';
import { TodoState } from './todo-slice';

// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes

const onInitData = (state: TodoState, action: AnyAction) => {
  return { ...state, data: action.payload };
};

const onSaveTask = (state: TodoState, action: AnyAction) => {
  const { payload } = action;
  const id = payload?.id || uuidv4();

  // Get culumn index: 0 todo 1 doing 2 done 3 pending
  const columnIndex = state.data.findIndex(
    (item) => item.type === payload.status
  );

  if (columnIndex !== -1) {
    // Tasks array of current column
    const tasks = state.data[columnIndex].tasks;
    // Create new task
    if (!payload?.id) {
      tasks.push({ ...payload, id });
    } else {
      // Update current task
      const taskIndex = tasks.findIndex((item) => item.id === id);
      if (taskIndex !== -1) {
        tasks[taskIndex] = { ...payload };
      }
    }
  }

  return state;
};

const onDeleteTask = (state: TodoState, action: AnyAction) => {
  const { id, type } = action.payload;

  // Get culumn index: 0 todo 1 doing 2 done 3 pending
  const columnIndex = state.data.findIndex((item) => item.type === type);
  if (columnIndex !== -1) {
    // Tasks array of current column
    const tasks = state.data[columnIndex].tasks;
    // Get the task index to delete
    const taskIndex = tasks.findIndex((item) => item.id === id);
    if (taskIndex !== -1) {
      // Remove task from tasks array
      tasks.splice(taskIndex, 1);
    }
  }

  return state;
};

const onDragDropTask = (state: TodoState, action: AnyAction) => {
  const { source, destination } = action.payload;

  // Drag and drop in 1 column
  if (destination.droppableId === source.droppableId) {
    const columnTasks = state.data[+source.droppableId].tasks;
    // Remove item from array at sourceIndex position
    const [movedItem] = columnTasks.splice(source.index, 1);
    // Add removed item to destinationIndex position
    columnTasks.splice(destination.index, 0, movedItem);
  } else {
    // Drag and drop in multiple columns
    const sourceColumnTasks = state.data[+source.droppableId].tasks;
    const destinationColumnTasks = state.data[+destination.droppableId].tasks;
    // Remove item from source array at sourceIndex position
    const [movedItem] = sourceColumnTasks.splice(source.index, 1);
    // Change moved item status to correct column
    movedItem.status = state.data[+destination.droppableId].type;
    // Add moved item to destination array at destinationIndex position
    destinationColumnTasks.splice(destination.index, 0, movedItem);
  }

  return state;
};

export { onInitData, onSaveTask, onDeleteTask, onDragDropTask };
