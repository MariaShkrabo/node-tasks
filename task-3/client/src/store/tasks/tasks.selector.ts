import { RootState } from "../root-reducer";
import { TasksState } from "./tasks.reducer";

export const selectTasks = (state: RootState): TasksState =>
  state.tasks;