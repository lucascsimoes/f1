import { Link } from 'react-router-dom'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

import { Container } from './style'

export default _ => {

    const pages = window.location.pathname.split('/')
    pages.shift()

    return (
        <>
        {pages[0] != '' &&
            <Container>
                <Link to={'/'}> <HomeRoundedIcon/> </Link>
                {pages.map((item, key) => {
                    return <Link to={`/${pages.join('')}`} key={key}> <span> / </span> { item } </Link>
                })}
            </Container>
        }
        </>
    )
}