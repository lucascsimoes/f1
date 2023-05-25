import { useState } from 'react';
import { Link } from 'react-router-dom'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import { SubHeader, Line, Button, Principal, SidebarDisplay } from './style'
import logo from '../../images/f1_logo.svg'
import Sidebar from '../Sidebar/Sidebar';

export default _ => {

    const [showSidebar, setShowSidebar] = useState(false)

    const quantityDiv = []
    for (let index = 0; index < 10; index++) {
        quantityDiv.push(index)
    }


    return (
        <>
        <SubHeader>
            {quantityDiv.map((item, key) => {
                return <Line key={key} item={item} />
            })}
            <Button login > ENTRAR </Button>
            <Button signin > CADASTRAR </Button>
        </SubHeader>
        <Principal>
            <Link to={'/'}>
                <img src={logo}/>
            </Link>
            
            <nav>
                <Link to={'/noticias'}> Notícias </Link>
                <Link to={'/pilotos'}> Pilotos </Link>
                <Link to={'/equipes'}> Equipes </Link>
                <Link to={'/circuitos'}> Circuitos </Link>
                <Link to={'/calendario'}> Calendário </Link>
            </nav>

            <MenuRoundedIcon onClick={() => setShowSidebar(!showSidebar)}/>
        </Principal>
        
        <SidebarDisplay show={showSidebar}>
            <Sidebar close={() => setShowSidebar(false)}/>
        </SidebarDisplay>
        
        </>
    )
}