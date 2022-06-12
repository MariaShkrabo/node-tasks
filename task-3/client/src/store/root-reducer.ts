import { combineReducers } from "redux";
import { tasksReducer } from "./tasks/tasks.reducer";


export const rootReducer = combineReducers({
    tasks: tasksReducer,
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
