import { selectTasks } from "../../store/tasks/tasks.selector";
import { useTypedSelector } from "../../utils/selector/selector.utils";
import FailureWarning from "../failureWarning/failureWarning.component";
import Spinner from "../spinner/spinner.component";
import TodoListItem from "../TodoListItem/TodoListItem.component";
import { TodoListContainer } from "./TodoList.styles"

const TodoList = () => {
    const { tasks, isLoading, error } = useTypedSelector(selectTasks);
    console.log(tasks)
    return (
        <>
            {isLoading ?
                <Spinner />
                :
                <>
                    {error ?
                        <FailureWarning text={`Todos Weren't Received`} />
                        :
                        <>
                            {tasks.length === 0 ?
                                <FailureWarning text={`You have not created any todos yet`} />
                                :
                                <TodoListContainer>
                                    {tasks.map((task) => (
                                        <TodoListItem key={task._id} task={task} />
                                    ))}
                                </TodoListContainer>
                            }
                        </>
                    }
                </>
            }
        </>
    )
}

export default TodoList;