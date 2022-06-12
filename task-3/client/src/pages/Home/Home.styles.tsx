import styled from "styled-components";
import { MAIN_COLOR } from "../../constants/colors";

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;  
`

export const Header= styled.header`
    width: 100%;
    height: 150px;
    background-color: ${MAIN_COLOR};
`