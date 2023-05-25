import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link) `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 650px;
    border: 1px solid #2d2d2d;
    padding-top: 20px;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    transition: .35s;

    img {
        position: relative;
        width: 650px;
        z-index: 2;
        transition: .35s;
    }

    & > div {
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        height: 100%;
        padding: 20px;
        background-image: linear-gradient(to top, #222222bc 20%, transparent 70%);
        z-index: 3;
    }

    &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 50px;
        width: 0;
        height: 50px;
        background: ${props => props.color};
        overflow: hidden;
        transition: .35s;
    }

    &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 110px;
        width: 0;
        height: 15px;
        background: ${props => props.color};
        overflow: hidden;
        transition: .35s .1s;
    }

    &:hover:after {
        width: 100%;
        transition: .35s;
    }

    &:hover:before {
        width: 100%;
        transition: .35s .15s;
    }

    &:hover img {
        transform: scale(1.05);
        transition: .35s;
    }






    &:hover header > div {
        width: 100%;
        transition: .35s;
    }

    &:hover header > h2 {
        filter: brightness(60%);
        transition: .35s;
    }

    &:hover > div:nth-child(2) > div {
        opacity: 1;
        transition: .35s;
    }

    &:hover > div:nth-child(2) > img {
        transform: scale(1.1);
        transition: .35s;
    }

    @media (max-width: 1250px) {
        max-width: 400px;
    }

    @media (max-width: 1250px) {
        max-width: none;
    }
`

export const Left = styled.div `
    display: flex;
    flex-direction: column;

    header {
        padding-left: 25px;
        border-left: 8px solid ${props => props.color};

        h2 {
            color: ${props => props.color};
            font-size: 30px;
            font-family: 'F1 Torque';
            position: relative;
            z-index: 2;
            filter: brightness(100%);
            transition: .35s;
        }

        span {
            display: block;
            text-transform: uppercase;
            color: white;
            font-size: 48px;
            letter-spacing: 1px;
            opacity: 1;
            position: relative;
            z-index: 2;
        }

        & > div {
            position: absolute;
            width: 0;
            height: 94px;
            left: 0;
            background-color: ${props => props.color};
            transition: .35s;
            z-index: 1;
            overflow: hidden;

            &:after {
                content: '';
                position: absolute;
                right: 60px;
                top: -10px;
                height: 114px;
                width: 20px;
                background-color: #222;
                transform: rotate(-25deg);
                z-index: 2;
            }

            &:before {
                content: '';
                position: absolute;
                right: 30px;
                top: -10px;
                height: 114px;
                width: 18px;
                background-color: #222;
                transform: rotate(-25deg);
                z-index: 2;
            }
        }
    }

    p {
        margin-left: 10px;
        margin-top: 10px;
        font-size: 14px;
        opacity: .5;
    }

    & > div {
        width: 46px;
        height: 30px;
        margin-left: 10px;
        margin-top: 15px;
        border-radius: 5px;
        overflow: hidden;

        img {
            width: 100%;
        }
    }

    h1 {
        font-family: 'F1 Turbo';
        font-size: 26px;
        margin-top: 45px;
        margin-left: 20px;
        z-index: 1;
    }
`

export const Right = styled.div `
    & > div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #B1B1B1;
        background: radial-gradient(at right bottom, #787878, #2e2e2e50, transparent);
        z-index: 1;
        opacity: 0;
        transition: .35s;
    }

    img {
        position: relative;
        z-index: 2;
        transition: .35s;
        width: 450px;
    }
`




export const NameContainer = styled.div `
    text-transform: uppercase;
    text-align: center;
    position: relative;
    width: 100%;
    
    h2 {
        position: relative;
        font-family: 'Bull';
        font-size: 50px;
        letter-spacing: 2px;
        line-height: 40px;
        font-weight: normal;
        z-index: 2;
    }

    h1 {
        position: relative;
        font-family: 'Bull';
        font-size: 70px;
        -webkit-text-stroke: 1px white;
        font-weight: normal;
        color: transparent;
        line-height: 60px;
        z-index: 2;
    }

    h3 {
        position: absolute;
        top: -100px;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        font-family: 'Bull';
        font-size: 200px;
        z-index: 1;
        color: ${props => props.color};
        letter-spacing: 5px;
        font-weight: normal;
        opacity: .4;
    }
`