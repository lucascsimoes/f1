import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle `

    :root {
        --primary: #e10600;

        --background: #1f1f27;
        --foreground: #2e2e33;
        --foreground-hover: #27272c;

        --gray: #414144;
        --medium-gray: #343435;
        --dark-gray: #353536;
        --gray-hover: #4b4b4e;

        --background-hover-transition: background .1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    @font-face {
        font-family: "F1";
        src: url("./assets/fonts/F1-Torque.otf");
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        color: #fff;
        font-family: "Montserrat", sans-serif;
    }

    html, body {
        // min-height: 100dvh;
        background: var(--background);
    }

    body {
        padding-top: 60px;
    }
`

export const PageContainer = styled.main `
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
`

export default GlobalStyle