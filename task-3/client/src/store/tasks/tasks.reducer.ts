import { TasksActions } from "./tasks.action";
import { TASKS_ACTION_TYPES } from "./tasks.types";

export interface Task {
  _id: number,
  description: string,
  isDone: boolean,
  __v: number
}

export interface TasksState {
  tasks: Task[];
  isLoading: boolean;
  error: string | null;
}

export const TASKS_INITIAL_STATE = {
  tasks: [],
  isLoading: false,
  error: null,
};

export const tasksReducer = (state: TasksState = TASKS_INITIAL_STATE, action: TasksActions): TasksState => {
  switch(action.type) {
      case TASKS_ACTION_TYPES.FETCH_TASKS_START:
          return {
              ...state, isLoading: true 
          } 
      case TASKS_ACTION_TYPES.FETCH_TASKS_SUCCESS:
          return {
            ...state, tasks: action.payload, isLoading: false, error: null
          }
      case TASKS_ACTION_TYPES.FETCH_TASKS_FAILED:
          return {
            ...state, error: action.payload, isLoading: false 
          }
      default: 
          return state;
  }
}
