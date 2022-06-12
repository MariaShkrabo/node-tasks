import styled from "styled-components";
import { SHADOW_COLOR } from "../../constants/colors";

export const TodoListContainer = styled.ul`
    box-sizing: border-box;
    display: flex;
    width: 30%;
    flex-direction: column;
    margin-top: 80px;
    border: 2px solid ${SHADOW_COLOR};
    border-radius: 3px;
    padding: 0;
`