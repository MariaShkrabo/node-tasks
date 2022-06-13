import { selectTasks } from "../../store/tasks/tasks.selector";
import { useTypedSelector } from "../../utils/selector/selector.utils";
import TodoListItem from "../TodoListItem/TodoListItem.component";
import { TodoListContainer } from "./TodoList.styles"

const TodoList = () => {
    const { tasks, isLoading, error } = useTypedSelector(selectTasks);
    return (
        <TodoListContainer>
            {tasks.map((task) => (
                <TodoListItem key={task._id} task={task}/>
            ))}
        </TodoListContainer>
    )
}

export default TodoList;