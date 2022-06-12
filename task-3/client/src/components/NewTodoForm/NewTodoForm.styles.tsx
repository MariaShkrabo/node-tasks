import styled from "styled-components";
import { MAIN_COLOR, SHADOW_COLOR, TEXT_COLOR } from "../../constants/colors";

export const NewTodoFormContainer = styled.div`
  box-sizing: border-box;
  width: 30%;
  display: flex;
  flex-direction: column;
  padding: 12px;
  box-shadow: 0 0 10px rgba(0,0,0,0.4); 
  border-radius: 3px;
  gap: 10px;
  position: absolute;
  top: 110px;
  background-color: white;
`

export const NewTodoTitle = styled.h1`
    font-weight: 500;
    font-size: 13px;
    margin: 0;
    width: 100%;
`

export const AddNewTodoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
`

export const AddNewTodoInput = styled.input`
    padding: 5px;
    border-radius: 3px;
    font-size: 13px;
    border-color: ${SHADOW_COLOR};
    width: 82%;
    border-style: solid;
    color: ${TEXT_COLOR};

    &:focus{
        border-color: ${TEXT_COLOR};
        outline: none;
    }
`

export const AddNewTodoButton = styled.button`
    font-weight: 500;
    font-size: 13px;
    color: white;
    background-color: ${MAIN_COLOR};
    width: 18%;
    border-radius: 3px;
    border: 0;
    cursor: pointer;
`