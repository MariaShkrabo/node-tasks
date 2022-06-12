import { TodoActionsContainer, TodoButton, TodoDescription, TodoDescriptionContainer, TodoImg, TodoIsDoneCheckbox, TodoListItemContainer } from "./TodoListItem.styles";
import editImg from '../../images/pencil.svg';
import deleteImg from '../../images/wastebasket.svg';

const TodoListItem = ({task}) => {
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