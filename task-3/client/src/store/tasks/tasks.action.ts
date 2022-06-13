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

interface deleteTaskStart {
  type: TASKS_ACTION_TYPES.DELETE_TASK_START;
}

interface deleteTaskSuccess {
  type: TASKS_ACTION_TYPES.DELETE_TASK_SUCCESS;
  payload: Task;
}

interface deleteTaskFail {
  type: TASKS_ACTION_TYPES.DELETE_TASK_FAILED;
  payload: string;
}

export type TasksActions = fetchTasksStart | fetchTasksSuccess | fetchTasksFail | 
                           createTaskStart | createTaskSuccess | createTaskFail |
                           deleteTaskStart | deleteTaskSuccess | deleteTaskFail ;

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

export const deleteTask = (id: number) => {
  return async (dispatch: Dispatch<TasksActions>) => {
    dispatch({
      type: TASKS_ACTION_TYPES.DELETE_TASK_START
    });
    axios.delete(`http://localhost:7000/tasks/${id}`,)
      .then((response) => {
        dispatch({
          type: TASKS_ACTION_TYPES.DELETE_TASK_SUCCESS,
          payload: response.data
        });
      })
      .catch((error) => {
        dispatch({
          type: TASKS_ACTION_TYPES.DELETE_TASK_FAILED,
          payload: error.message
        });
      });
  };
};