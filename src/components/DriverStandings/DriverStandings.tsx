import * as Styled from './style'

interface DriverStandingsProps {
    position: number
    name: string
    color: string
    points: number
    select: (select: string) => void
}

export default ({ position, name, color, points, select }: DriverStandingsProps) => {
    return (
        <Styled.DriverStandingsContainer color={color} onClick={() => select(name)}>
            <span> { position } </span>
            <p> { name } </p>
            <span> { points } </span>
        </Styled.DriverStandingsContainer>
    )
}