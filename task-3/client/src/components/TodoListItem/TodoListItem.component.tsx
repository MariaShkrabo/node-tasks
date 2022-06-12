import { TodoActionsContainer, TodoButton, TodoDescription, TodoDescriptionContainer, TodoImg, TodoIsDoneCheckbox, TodoListItemContainer } from "./TodoListItem.styles";
import editImg from "../../images/pencil.svg";
import deleteImg from "../../images/wastebasket.svg";
import { Task } from "../../store/tasks/tasks.reducer";

type TaskProps = {
    task: Task;
}

const TodoListItem = ({task}: TaskProps) => {
    return (
        <TodoListItemContainer>
            <TodoDescriptionContainer>
                <TodoIsDoneCheckbox type="checkbox"/>
                <TodoDescription>{task.description}</TodoDescription>
            </TodoDescriptionContainer>
            <TodoActionsContainer>
                <TodoButton>
                    <TodoImg src={editImg} alt="edit"/>
                </TodoButton>
                <TodoButton>
                    <TodoImg src={deleteImg} alt="edit"/>
                </TodoButton>
            </TodoActionsContainer>

        </TodoListItemContainer>
    )
}

export default TodoListItem;