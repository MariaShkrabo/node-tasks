import { TasksActions } from "./tasks.action";
import { TASKS_ACTION_TYPES } from "./tasks.types";

export interface Task {
  _id: number | null,
  description: string,
  isDone: boolean,
  __v: number | null
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
  switch (action.type) {
    case TASKS_ACTION_TYPES.FETCH_TASKS_START || TASKS_ACTION_TYPES.CREATE_TASK_START || TASKS_ACTION_TYPES.DELETE_TASK_START:
      return {
        ...state, isLoading: true
      }
    case TASKS_ACTION_TYPES.FETCH_TASKS_SUCCESS:
      return {
        ...state, tasks: action.payload, isLoading: false, error: null
      }
    case TASKS_ACTION_TYPES.FETCH_TASKS_FAILED || TASKS_ACTION_TYPES.CREATE_TASK_FAILED || TASKS_ACTION_TYPES.DELETE_TASK_FAILED:
      return {
        ...state, error: action.payload, isLoading: false
      }
    case TASKS_ACTION_TYPES.CREATE_TASK_SUCCESS:
      const tasks = state.tasks.concat(action.payload);
      return {
        ...state, tasks, isLoading: false, error: null
      }
    case TASKS_ACTION_TYPES.DELETE_TASK_SUCCESS:
      state.tasks = state.tasks.filter((t) => t._id !== action.payload._id);
      return {
        ...state, isLoading: false, error: null
      }
    default:
      return state;
  }
}
