import axios from "axios";
import { Dispatch } from "redux";
import { Task } from "./tasks.reducer";
import { TASKS_ACTION_TYPES } from "./tasks.types";

interface fetchTasksStart {
  type: TASKS_ACTION_TYPES.FETCH_TASKS_START;
}

interface fetchTasksSuccess {
  type: TASKS_ACTION_TYPES.FETCH_TASKS_SUCCESS;
  payload: Task[];
}

interface fetchTasksFail {
  type: TASKS_ACTION_TYPES.FETCH_TASKS_FAILED;
  payload: string;
}

interface createTaskStart {
  type: TASKS_ACTION_TYPES.CREATE_TASK_START;
}

interface createTaskSuccess {
  type: TASKS_ACTION_TYPES.CREATE_TASK_SUCCESS;
  payload: Task[];
}

interface createTaskFail {
  type: TASKS_ACTION_TYPES.CREATE_TASK_FAILED;
  payload: string;
}

export type TasksActions = fetchTasksStart | fetchTasksSuccess | fetchTasksFail | 
                           createTaskStart | createTaskSuccess | createTaskFail;


export const fetchTasks = () => {
  return async (dispatch: Dispatch<TasksActions>) => {
    dispatch({
      type: TASKS_ACTION_TYPES.FETCH_TASKS_START
    });
    axios.get(`http://localhost:7000/tasks`)
      .then((response) => {
        dispatch({
          type: TASKS_ACTION_TYPES.FETCH_TASKS_SUCCESS,
          payload: response.data
        });
      })
      .catch((error) => {
        dispatch({
          type: TASKS_ACTION_TYPES.FETCH_TASKS_FAILED,
          payload: error.message
        });
      });
  };
};

export const createTask = (newTask: Task) => {
  return async (dispatch: Dispatch<TasksActions>) => {
    dispatch({
      type: TASKS_ACTION_TYPES.CREATE_TASK_START
    });
    axios.post(`http://localhost:7000/tasks`, newTask )
      .then((response) => {
        dispatch({
          type: TASKS_ACTION_TYPES.CREATE_TASK_SUCCESS,
          payload: response.data
        });
      })
      .catch((error) => {
        dispatch({
          type: TASKS_ACTION_TYPES.CREATE_TASK_FAILED,
          payload: error.message
        });
      });
  };
};    