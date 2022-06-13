import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../../store/tasks/tasks.action";
import { AddNewTodoButton, AddNewTodoContainer, AddNewTodoInput, NewTodoFormContainer, NewTodoTitle } from "./NewTodoForm.styles";

const NewTodoForm = () => {

    const [taskDescription, setTaskDescription] = useState({});

    const createNewTaskClick = () => {
        dispatch(createTask({
            "description": `${taskDescription}`,
            "isDone": false,
            "_id": null,
            "__v": null
        }))
    }

    const dispatch = useDispatch();
    return (
        <NewTodoFormContainer>
            <NewTodoTitle>New Todo:</NewTodoTitle>
            <AddNewTodoContainer>
                <AddNewTodoInput onChange={(event) => setTaskDescription(event.target.value)}/>
                <AddNewTodoButton onClick={createNewTaskClick}>Add</AddNewTodoButton>
            </AddNewTodoContainer>
        </NewTodoFormContainer>
    )
}

export default NewTodoForm;