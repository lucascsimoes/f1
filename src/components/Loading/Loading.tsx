import { useState, useEffect } from 'react'
import * as Styled from './style'

export default () => {

    const [counter, setCounter] = useState(0)

    setInterval(() => {
        // setCounter(c => c++)
    }, 200)

    useEffect(() => {
        console.log(counter)
    }, [counter])

    const images = ["f1", "flag", "helmet", "team", "trophy"]

    return (
        <Styled.LoadingContainer>
            <img src={require(`../../assets/icons/${images[counter]}.webp`)} />
        </Styled.LoadingContainer>
    )
}