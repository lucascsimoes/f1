import styled from "styled-components";

export const SubHeader = styled.div `
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 60px;
    padding-inline: 20px;
    background-color: #222;
    position: relative;
    overflow: hidden;
`

export const Line = styled.div `
    position: absolute;
    top: -10px;
    left: ${props => props.item === 0 ? '-10px' : `${ -9 + props.item * 20}px`};
    height: 100px;
    width: ${props => props.item === 0 ? '15px' : `${ 15 - props.item * 1}px`};
    background-color: #3d3d3d;
    opacity: ${props => props.item === 0 ? '1' : `${(props.item / props.item) - (props.item / 10)}`};
    transform: rotate(-35deg);
    z-index: 1;
`

export const Button = styled.button `
    height: 40px;
    border-radius: 5px;
    padding-inline: 10px;
    font-size: 11px;
    background-color: ${props => props.login ? '#E22D2C' : 'transparent'};
    letter-spacing: .5px;
    border: 1px solid ${props => props.login ? '#E22D2C' : 'white'};
    margin-left: 10px;
    cursor: pointer;
    z-index: 2;

    &:hover {
        filter: brightness(85%);
    }
`

export const Principal = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    background-color: #E22D2C;
    padding-inline: 200px;
    position: sticky;
    top: 0;
    z-index: 4;

    img {
        width: 120px;
        cursor: pointer;
    }

    nav {
        display: flex;
        align-items: center;
        height: 100%;

        * {
            display: flex;
            align-items: center;
            height: 100%;
            padding-inline: 30px;
            font-size: 15px;

            &:hover {
                background-color: #d72c2c;
            }
        }

        & + svg {
            font-size: 30px;
            
            @media (min-width: 900px) {
                display: none;
            }
        }
    }

    @media (max-width: 1350px) {
        padding-inline: 100px;
    }

    @media (max-width: 1100px) {
        padding-inline: 20px;
    }

    @media (max-width: 900px) {
        nav {
            display: none;
        }
    }
`

export const SidebarDisplay = styled.div `
    position: absolute;
    top: 0;
    right: 0;
    max-width: 100vw;
    width: ${props => props.show ? '100%' : '0'};
    height: 100vh;
    transition: .5s;
    z-index: 5;
    overflow: hidden;
`