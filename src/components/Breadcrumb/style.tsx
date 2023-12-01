import styled from "styled-components";
import { Link } from "react-router-dom";

export const BreadcrumbContainer = styled.div `
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    

    .divider {
        width: 25px;

        path {
            color: #ffffff80;
        }
    }
`

export const Navigation = styled(Link) `
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    text-transform: capitalize;
    padding: 6px 8px;
    border-radius: 8px;
    color: #ffffff80;

    &:hover {
        background: var(--foreground);
        color: #fff;

        path {
            color: #fff;
        }
    }

    svg {
        width: 18px;

        path {
            color: #ffffff80;
        }
    }
`