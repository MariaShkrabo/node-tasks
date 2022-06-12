import { AddNewTodoButton, AddNewTodoContainer, AddNewTodoInput, NewTodoFormContainer, NewTodoTitle } from "./NewTodoForm.styles";

const NewTodoForm = () => {
    return (
        <NewTodoFormContainer>
            <NewTodoTitle>New Todo:</NewTodoTitle>
            <AddNewTodoContainer>
                <AddNewTodoInput/>
                <AddNewTodoButton>Add</AddNewTodoButton>
            </AddNewTodoContainer>
        </NewTodoFormContainer>
    )
}

export default NewTodoForm;