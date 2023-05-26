import { useEffect, useState } from 'react';

import { Container, Line, NameContainer } from './style'

export default ({ driver }) => {

    const [team, setTeam] = useState([])
    const driverPhoto = require(`../../images/drivers/${driver.name}.png`)
    const countryPhoto = require(`../../images/country/${driver.country}.avif`)

    useEffect(() => {
        fetch('data/teams.json')
            .then(r => r.json())
            .then(r => setTeam(r))
    }, [])

    function formatName(string) {
        const name = string.split(' ')[0]
        let lastname;

        if (string.split(' ').length > 2) {
            lastname = `${string.split(' ')[1]} ${string.split(' ')[2]}`
        } else {
            lastname = string.split(' ')[1]
        }

        return [name, lastname]
    }

    function teamColor() {
        let color;

        team.map(item => {
            if (item.name === driver.team) {
                color = item.color
            }
        })

        return color
    }

    const driverPathName = formatName(driver.name)[1].replace(/\s/g, "").toLowerCase()

    return (
        <Container color={teamColor} to={`/pilotos/${driverPathName}`}>
            <img src={driverPhoto}/>

            <Line color={teamColor}>
                <div>
                {['', '', '', ''].map((_, key) => (
                    <>
                    <span> ● </span>
                    <h1> { formatName(driver.name)[1] } </h1>
                    <h2> { driver.number } </h2>  
                    </>
                ))}
                </div>
                
            </Line>

            <div>
                <NameContainer color={teamColor}>
                    <h2> { formatName(driver.name)[0] } </h2>
                    <h1> { formatName(driver.name)[1] } </h1>
                    <h3> { driver.number } </h3>
                </NameContainer>
            </div>

            
            {/* <h1> { driver.number } </h1>   */}

            {/* <Left color={teamColor}>
                <header>
                    <div></div>
                    <h2> { formatName(driver.name)[0] } </h2>
                    <span> { formatName(driver.name)[1] } </span> 
                </header>

                <p> { driver.team } </p>

                <div>
                    <img src={countryPhoto}/>
                </div>

                <h1> { driver.number } </h1>
            </Left>
            <Right>
                <div></div>
                <img src={driverPhoto}/>
            </Right> */}
        </Container>
    )
}