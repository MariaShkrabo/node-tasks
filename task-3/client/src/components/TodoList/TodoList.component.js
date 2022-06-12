import TodoListItem from "../TodoListItem/TodoListItem.component";
import { TodoListContainer } from "./TodoList.styles"

const TodoList = ({tasks}) => {
    return (
        <TodoListContainer>
            {tasks.map((task) => (
                <TodoListItem key={task.id} task={task}/>
            ))}
        </TodoListContainer>
    )
}

export default TodoList;