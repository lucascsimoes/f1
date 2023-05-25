import { Link } from 'react-router-dom';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import { Container } from './style' 

export default ({ close }) => {

    return (
        <Container>
            <CloseRoundedIcon onClick={close}/>

            <nav>
                <Link to={'/noticias'} onClick={close}> Notícias </Link>
                <Link to={'/pilotos'} onClick={close}> Pilotos </Link>
                <Link to={'/equipes'} onClick={close}> Equipes </Link>
                <Link to={'/circuitos'} onClick={close}> Circuitos </Link>
                <Link to={'/calendario'} onClick={close}> Calendário </Link>
            </nav>
        </Container>
    )
}