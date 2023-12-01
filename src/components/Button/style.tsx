import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface ButtonProps {
    background: string
}

export const ButtonContainer = styled(NavLink)<ButtonProps> `
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    padding: 14px 25px;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 1px;
    border-radius: 8px;
    background-color: ${({ background }) => background};
    cursor: pointer;
`