import { TodoActionsContainer, TodoButton, TodoDescription, TodoDescriptionContainer, TodoImg, TodoIsDoneCheckbox, TodoListItemContainer } from "./TodoListItem.styles";
import editImg from "../../images/pencil.svg";
import deleteImg from "../../images/wastebasket.svg";
import { Task } from "../../store/tasks/tasks.reducer";
import { useDispatch } from "react-redux";
import { deleteTask, fetchTasks } from "../../store/tasks/tasks.action";
import { useEffect } from "react";
//type ObjectID = typeof import("mongodb").ObjectID;

type TaskProps = {
    task: Task;
}

const TodoListItem = ({task}: TaskProps) => {
    const dispatch = useDispatch();

    const handleDelete = (id: number | null) => {
        if(window.confirm(`Are you sure want to delete todo?`) && id){
            dispatch(deleteTask(id));
        }
    }

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
                <TodoButton onClick={() => handleDelete(task._id)}>
                    <TodoImg src={deleteImg} alt="delete"/>
                </TodoButton>
            </TodoActionsContainer>

        </TodoListItemContainer>
    )
}

export default TodoListItem;