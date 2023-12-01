import styled from "styled-components";

interface DriverStandingsProps {
    color: string
}

export const DriverStandingsContainer = styled.div<DriverStandingsProps> `
    position: relative;
    display: grid;
    grid-template-columns: 40px 1fr 80px;
    height: 40px;
    border-bottom: 1px solid var(--gray);
    cursor: pointer;

    & > * {
        display: flex;
        align-items: center;
    }

    &:hover {
        background-color: var(--foreground-hover);
    }

    p {
        position: relative;
        padding-inline: 20px;

        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 5px;
            height: 100%;
            background-color: ${({ color }) => color};
        }
    }

    span {
        justify-content: center;

        &:first-child {
            font-size: 13px;
            opacity: .5;
        }

        &:last-child {
            border-left: 1px solid var(--gray);
        }
    }
`