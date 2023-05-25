import { useEffect, useState } from "react"
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb"
import TeamCard from "../../components/TeamCard/TeamCard"

export default _ => {

    const [teams, setTeams] = useState([])

    useEffect(() => {
        fetch('data/teams.json')
            .then(r => r.json())
            .then(r => setTeams(r))
    }, [])

    return (
        <>
            <Breadcrumb path={window.location.pathname}/>

            {teams.map(item => {
                return (
                    <TeamCard key={item.id} team={item}/>
                )
            })}
        </>
    )
}