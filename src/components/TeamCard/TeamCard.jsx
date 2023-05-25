import { Container, Line, Horizontal } from './style'

export default ({ team }) => {

    const { name, color } = team

    const quantityDivLeft = []
    for (let index = 0; index < 10; index++) {
        quantityDivLeft.push(index)
    }

    const quantityDivRight = []
    for (let index = 0; index < 10; index++) {
        quantityDivRight.push(index)
    }

    const quantityDivBefore = []
    for (let index = 0; index < 15; index++) {
        quantityDivBefore.push(index)
    }

    const teamPhoto = require(`../../images/teams/${name}.png`)
    const carPhoto = require(`../../images/cars/${name}.avif`)

    return (
        <Container>
            {quantityDivLeft.map((item, key) => {
                return <Line key={key} item={item} left className='side'/>
            })}

            <main>
                <img src={teamPhoto}/>
                <h2> { name } </h2>
            </main>

            <img src={carPhoto}/>

            {quantityDivRight.map((item, key) => {
                return <Line key={key} item={item} right className='side'/>
            })}

            {quantityDivBefore.map((item, key) => {
                return <Horizontal key={key} item={item} color={color} className='horizontal' />
            })}
        </Container>
    )
}