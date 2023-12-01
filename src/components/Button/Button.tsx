import * as Styled from './style'
import { ReactNode } from 'react'

interface ButtonProps {
    path: string
    children: ReactNode
    background?: string
}

export default ({ path, children, background = "#000" }: ButtonProps) => {
    return (
        <Styled.ButtonContainer to={path} background={background}>
            { children }
        </Styled.ButtonContainer>
    )
}