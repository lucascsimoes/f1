import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    height: 100%;
    background-color: #383838;

    & > svg {
        font-size: 32px;
        opacity: .3;
        margin: 40px;
    }

    nav {
       display: flex;
       flex-direction: column;
       align-items: center; 
       gap: 30px;

       a {
            width: 100%;
            padding: 15px 10px;
            font-size: 30px;
            position: relative;
            transform: scale(1);
            z-index: 2;
            text-align: center;

            &:active {
                transform: scale(1.1);
                transition: .25s;
            }
       }
    }
`