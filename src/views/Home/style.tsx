import styled from "styled-components";

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
    margin-top: 80px;
    gap: 40px;
`

export const DriverSelected = styled.div `
    flex: 1;
    border: 1px solid yellow;
`

export const DriverStandings = styled.div `
    flex: 1;

    h3 {
        text-align: right;
        margin-bottom: 20px;
    }
`