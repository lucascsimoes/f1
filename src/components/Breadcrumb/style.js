import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    align-items: center;
    padding-inline: 100px;
    width: 100vw;
    height: 60px;
    border-bottom: 1px solid #2f2f2f;
    margin-bottom: 100px;

    & > a {
        text-transform: capitalize;
        font-size: 14px;
        opacity: .5;
        cursor: pointer;

        span {
            margin-inline: 12px;
        }

        &:hover {
            opacity: 1;
        }
    }

    @media (max-width: 650px) {
        padding-inline: 20px;
    }
`