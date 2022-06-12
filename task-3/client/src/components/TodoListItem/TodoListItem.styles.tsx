import styled from "styled-components";
import { SHADOW_COLOR } from "../../constants/colors";

export const TodoListItemContainer = styled.li`
  display: flex;
  padding: 12px;
  border-bottom: 2px solid ${SHADOW_COLOR};
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  &:last-child{
    border-bottom: none;
  }
`

export const TodoIsDoneCheckbox = styled.input`
    margin: 0;
    cursor: pointer;
`

export const TodoDescription = styled.h2`
    font-weight: 400;
    font-size: 13px;
    margin: 0;
    color: #3f6386;
    word-break: break-all;
`

export const TodoDescriptionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    margin-right: auto;
`

export const TodoActionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
`
export const TodoButton = styled.button`
    display: flex;
    align-items: center; 
    justify-content: center;
    border: none;
    background-color: transparent;
    width: 18px;
    height: 18px;
    cursor: pointer;
    padding: 0;
`

export const TodoImg = styled.img`
    height: 90%;
    &:hover{
        height: 100%;
    }
`
