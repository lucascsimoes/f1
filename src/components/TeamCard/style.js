import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link) `
    display: flex;
    justify-content: center;
    align-items: center;
    /* max-width: 2000px;
    width: 100%;
    min-width: 280px; */
    min-height: 200px;
    border: 1px solid #cccccc;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.11);
    border-radius: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    margin-bottom: 30px;
    position: relative;
    overflow: hidden;

    & > main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        position: relative;
        z-index: 2;
        padding-right: 50px;
        margin-right: 50px;

        h2 {
            letter-spacing: 1px;
            font-size: 20px;
        }

        img {
            height: 80px;
        }

        &:after {
            content: '';
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto 0;
            width: 2px;
            height: 100%;
            background-color: #4e4e4e;
        }
    }

    & > img {
        position: relative;
        z-index: 1;
        height: 120px;
    }

    &:hover .horizontal {
        width: 100%;
        height: 100%;
        transition: width .4s, height .5s .4s;
    }

    &:hover .side {
        filter: brightness(60%);
        transition: .5s .4s;
    }
`

export const Line = styled.div `
    position: absolute;
    bottom: ${props => props.left && '-30px'};
    top: ${props => props.right && '-30px'};
    left: ${props => props.left && (props.item === 0 ? '-80px' : `${ -79 + props.item * 20}px`)};
    right: ${props => props.right && (props.item === 0 ? '-80px' : `${ -79 + props.item * 20}px`)};
    height: 300px;
    width: ${props => props.item === 0 ? '15px' : `${ 15 - props.item * 1}px`};
    background-color: #525252;
    opacity: ${props => props.item === 0 ? '1' : `${(props.item / props.item) - (props.item / 10)}`};
    transform: rotate(-35deg);
    z-index: 1;
    transition: .25s;
`

export const Horizontal = styled.div `
    position: absolute;
    left: 0;
    top: 0;
    margin: auto 0;
    bottom: 0;
    width: 0;
    height: 5px;
    background-color: ${props => props.color};
    transition: .4s;
`