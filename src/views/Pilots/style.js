import styled from "styled-components";

export const Introduction = styled.div `
    margin: 120px 100px;

    h1 {
        font-size: 42px;
        font-family: 'F1 Torque';
    }

    @media (max-width: 650px) {
        margin-inline: 20px;
    }
`

export const PilotDisplay = styled.div `
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`