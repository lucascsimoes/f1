import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const HeaderContainer = styled.header `
    position: fixed;
    top: 0;
    width: 100dvw;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--background);
    padding: 0 20px 3px;
    z-index: 5;

    main {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1400px;
      width: 100%;
      margin: 0 auto;

      & > svg {
        display: block;
        cursor: pointer;
        min-width: 24px;
        margin-right: 20px;
        width: 0;

        @media (min-width: 700px) {
          display: none;
        }
      }

      
    }

    *::-webkit-scrollbar {
      display: none;
    }
      
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: linear-gradient(to right, var(--background), var(--primary), var(--background));
    }

    menu, div {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    menu {
        & > a svg {
            width: 100px;
        }

        & > ul {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        @media (max-width: 700px) {
          margin-right: auto;
        }
    }

    button,
    p {
        all: unset;
    }

    .NavigationMenuRoot {
        position: relative;
        display: flex;
        justify-content: center;

        @media (max-width: 700px) {
          display: none;
        }
    }

    .NavigationMenuList {
        display: flex;
        justify-content: center;
        background-color: var(--background);
        padding: 4px;
        border-radius: 6px;
        list-style: none;
    }

    .NavigationMenuTrigger,
    .NavigationMenuLink {
        padding: 8px 12px;
        outline: none;
        user-select: none;
        font-weight: 500;
        line-height: 1;
        border-radius: 4px;
        font-size: 15px;
        color: #fff;

        img {
            filter: invert(100%);
            width: 18px;
        }
    }

    .NavigationMenuTrigger:hover,
    .NavigationMenuLink:hover {
        background: var(--foreground-hover);
    }

    .NavigationMenuTrigger {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        cursor: pointer;
    }

    .NavigationMenuLink {
        display: flex;
        align-items: center;
        gap: 10px;
        text-decoration: none;
        font-size: 15px;
        line-height: 1;
    }

    .NavigationMenuContent {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        animation-duration: 250ms;
        animation-timing-function: ease;
    }

    .NavigationMenuContent[data-motion='from-start'] {
        animation-name: enterFromLeft;
    }

    .NavigationMenuContent[data-motion='from-end'] {
        animation-name: enterFromRight;
    }

    .NavigationMenuContent[data-motion='to-start'] {
        animation-name: exitToLeft;
    }

    .NavigationMenuContent[data-motion='to-end'] {
        animation-name: exitToRight;
    }

    @media only screen and (min-width: 600px) {
        .NavigationMenuContent {
            width: 100%;
        }
    }

    .NavigationMenuIndicator {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        height: 10px;
        top: 90%;
        overflow: hidden;
        z-index: 1;
        transition: width, transform 250ms ease;
    }

    .NavigationMenuIndicator[data-state='visible'] {
        animation: fadeIn 200ms ease;
    }

    .NavigationMenuIndicator[data-state='hidden'] {
        animation: fadeOut 200ms ease;
    }

    .NavigationMenuViewport {
        position: relative;
        transform-origin: top center;
        margin-top: 6px;
        width: 100%;
        background-color: var(--background);
        border-radius: 6px;
        overflow-x: auto;
        overflow-y: hidden;
        box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
        height: var(--radix-navigation-menu-viewport-height);
        border: 1px solid var(--gray);
        transition: width, height, 300ms ease;
    }

    .NavigationMenuViewport[data-state='open'] {
        animation: scaleIn 200ms ease;
    }

    .NavigationMenuViewport[data-state='closed'] {
        animation: scaleOut 200ms ease;
    }

    @media only screen and (min-width: 600px) {
        .NavigationMenuViewport {
            min-width: var(--radix-navigation-menu-viewport-width);
        }
    }

.List {
  display: grid;
  padding: 22px;
  margin: 0;
  column-gap: 10px;
  list-style: none;
}
@media only screen and (min-width: 600px) {
  .List {
    display: flex;
    align-items: center;
  }
}

  .ViewportPosition {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100dvw;
    top: 100%;
    left: 0;
    right: 0;
    margin: 0 auto;
    perspective: 2000px;
  }

  .CaretDown {
    transform: rotate(0deg);
    transition: transform .1s;
  }

    
  [data-state='open'] > .CaretDown {
    transform: rotate(-180deg);
    transition: transform .1s;
  }

  .Arrow {
    position: relative;
    top: 70%;
    background-color: var(--gray);
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    border-top-left-radius: 2px;
  }

@keyframes enterFromRight {
  from {
    opacity: 0;
    transform: translateX(200px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes enterFromLeft {
  from {
    opacity: 0;
    transform: translateX(-200px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes exitToRight {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(200px);
  }
}

@keyframes exitToLeft {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-200px);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: rotateX(-30deg) scale(0.9);
  }
  to {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }
}

@keyframes scaleOut {
  from {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }
  to {
    opacity: 0;
    transform: rotateX(-10deg) scale(0.95);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.ScrollAreaRoot {
  overflow: hidden;
  --scrollbar-size: 5px;
  margin-bottom: 5px;
}

.ScrollAreaViewport {
  width: 100%;
  height: 100%;
  border-radius: inherit;
}

.ScrollAreaScrollbar {
  opacity: 0;
  user-select: none;
  touch-action: none;
  background: var(--foreground);
  transition: background 160ms ease-out, opacity 160ms ease-out;
}

.ScrollAreaRoot:hover .ScrollAreaScrollbar {
  opacity: 1;
  transition: background 160ms ease-out, opacity 160ms ease-out;
}


.ScrollAreaScrollbar[data-orientation='horizontal'] {
  flex-direction: column;
  align-items: flex-start;
  height: var(--scrollbar-size);
}

.ScrollAreaThumb {
  flex: 1;
  background: var(--gray);
  border-radius: var(--scrollbar-size);
  position: relative;
  transition: background 160ms ease-out;
}

.ScrollAreaThumb:hover {
  background: var(--gray-hover);
  transition: background 160ms ease-out;
}

.ScrollAreaThumb::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  min-width: 44px;
  min-height: 44px;
}

`

interface NavigationProps {
  color?: string
  orientation: "vertical" | "horizontal"
}

export const Navigation = styled(NavLink)<NavigationProps> `
  display: flex;
  flex-direction: ${({ orientation }) => orientation == "vertical" ? "column" : "row"};
  align-items: ${({ orientation }) => orientation == "vertical" ? "center" : "flex-end"};
  justify-content: center;
  height: 140px;
  padding: 8px;
  user-select: none;

  p {
    font-size: 16px;
    color: ${({ color }) =>  color};
    transform: ${({ orientation }) => orientation == "vertical" ? "translateX(0)" : "translateX(-15px)"};
    font-weight: 600;
    text-align: ${({ orientation }) => orientation == "vertical" ? "center" : "start"};
    margin-top: ${({ orientation }) => orientation == "vertical" ? "15px" : "0"};
    font-style: italic;

    span {
      display: block;
      white-space: nowrap;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 24px;
      font-style: normal;
      color: #fff;
      font-family: "F1", sans-serif;
      margin-left: 15px;
    }
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 40%;
    overflow: hidden;

    img {
      width: ${({ orientation }) => orientation == "vertical" ? "120px" : "150px"};
    }
  }

  &:hover {
    background-color: var(--foreground-hover);
    border-radius: 6px;
  }
`

export const LoginButton = styled(NavLink) `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 75px;
    height: 36px;
    font-size: 14px;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    background-color: var(--foreground);
    transition: var(--background-hover-transition); 
    user-select: none;

    &:hover {
        background: var(--foreground-hover);
        transition: var(--background-hover-transition);
    }
`
