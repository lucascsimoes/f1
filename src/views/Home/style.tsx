import styled from "styled-components";
// import bg from 
const bg = require('../../assets/images/bg.webp')

export const NextEvent = styled.div `
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    min-height: 300px;
    border-radius: 8px;
    margin-top: 30px;
    padding: 20px;
    border: 5px solid var(--background);
    box-shadow: 0px 0px 0px 2px var(--gray);

    & > img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: cover;
        -o-object-fit: cover;
        object-position: center;
        -o-object-position: center;
        border-radius: 8px;
        filter: brightness(20%);
    }

    & > * {
        position: relative;
        z-index: 2;
    }

    & > main {

        h1 {
            font-family: "F1", sans-serif;
            font-size: 3em;
            text-transform: uppercase;
        }

        & > header {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;

            img {
                width: 40px;
                border-radius: 5px;
            }

            p {
                font-weight: 600;
                text-transform: uppercase;
            }
        }

        & > div {
            display: flex;
            align-items: center;
            gap: 15px;
            font-size: 14px;  
            white-space: nowrap;

            span {
                font-size: 12px;
            }

            p:last-child {
                background-color: #000;
                padding: 6px 8px;
                border-radius: 6px;
            }
        }

        @media (max-width: 900px) {
            & > div,
            & > header {
                justify-content: center;
            }

            h1 {
                text-align: center;
                font-size: clamp(2rem, 1.5484rem + 2.5806vw, 3rem);
            }
        }
    }

    & > aside {

        * { margin-left: auto; }

        h1 {
            font-family: "F1", sans-serif;
            font-size: 3em;
            text-align: right;
            margin-bottom: 20px;
        }

        p {
            text-align: right;
            text-transform: uppercase;
            letter-spacing: 3px;
            font-size: 14px;
        }

        @media (max-width: 900px) {
            * {
                margin: 0 auto;
                text-align: center !important;
            }
        }
    }

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
        gap: 40px;

        & > * {
            width: 100%;
        }
    }
`



export const Main = styled.main `
    display: flex;
    flex-wrap: wrap;
    margin-top: 80px;
    gap: 40px;
    user-select: none;
    margin-bottom: 1000px;

    & > * {
        flex: 1;
    }

    & > div:first-child {
        display: flex;
        position: relative;
        background-image: url(${bg});
        background-repeat: repeat;
        background-size: 8px;
    }
`

interface DriverSelectProps {
    color: string
}

export const DriverSelected = styled.div<DriverSelectProps> `
    display: flex;
    position: sticky;
    top: 50px;
    left: 0;
    width: 100%;
    overflow: hidden;
    background-color: var(--background);
    padding-block: 20px;

    & > * {
        z-index: 1;
    }

    main {
        display: flex;
        position: relative;
        width: 100%;

        &.animate__animated.animate__fadeInRight,
        &.animate__animated.animate__fadeOutLeft {
            --animate-duration: .3s;
        }

        &::after {
            content: '';
            position: absolute;
            top: 60px;
            left: 0;
            width: 100%;
            height: 32px;
            background: ${({ color }) => `linear-gradient(to right, transparent, ${color}, transparent)`};
        }

        & > aside {
            margin-top: 35px;

            & > :last-child {
                margin-top: 20px;
            }

            & > div {
                margin-block: 20px;

                p {
                    font-size: 15px;
                }

                div {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-top: 5px;

                    p {
                        text-transform: uppercase;
                        font-size: 14px;
                    }

                    img {
                        width: 30px;
                        border-radius: 2px;
                    }
                }
            }

            h1 {
                position: relative;
                white-space: nowrap;
                font-size: 20px;
                color: ${({ color }) => color};
                font-weight: 600;
                font-style: italic;
                z-index: 2; 

                span {
                    display: block;
                    text-transform: uppercase;
                    font-weight: 700;
                    font-size: 28px;
                    font-style: normal;
                    color: #fff;
                    font-family: "F1", sans-serif;
                    margin-left: 15px;
                }
            }

            p {
                font-size: 18px;

                span {
                    opacity: .6;
                    font-style: italic;
                    font-size: 15px;
                }
            }
        }
    }

    .img-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: max-content;
        border-radius: 40%;
        overflow: hidden;
        
        img {
            position: relative;
            z-index: 1;
            max-width: 400px;
            width: 100%;
        }
    }
`

export const DriverStandings = styled.div `

    h3 {
        text-align: right;
        margin-bottom: 20px;
    }
`

export const Teste = styled.div `
    width: 100%;
`