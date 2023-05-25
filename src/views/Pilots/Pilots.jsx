import { useEffect, useState } from 'react'

import { Introduction, PilotDisplay } from './style'

import PilotCard from '../../components/PilotCard/PilotCard'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'

export default (props) => {

    const [drivers, setDrivers] = useState([])

    useEffect(() => {
        fetch('data/drivers.json')
            .then(r => r.json())
            .then(r => setDrivers(r))
    }, [])

    return (
        <>
        <Breadcrumb path={window.location.pathname}/>

        <Introduction>
            <h1> Pilotos F1 2023 </h1>
            <p> Acompanhe seu piloto de Formula 1 favorito do grid de 2023 </p>
        </Introduction>

        <PilotDisplay>
            {drivers.map(driver => {
                return <PilotCard key={driver.id} driver={driver}/>
            })}
        </PilotDisplay>
        </>
    )
}