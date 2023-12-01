import * as Styled from './style'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import moment from 'moment'

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'

import { PageContainer } from '../../GlobalStyle'
import Button from '../../components/Button/Button'
import DriverStandings from '../../components/DriverStandings/DriverStandings'

interface DriverProps {
    id: number
    name: string
    abbreviation: string
    team: {
        name: string
        color: string
    }
    country: string
    points: number
}

interface RaceResult {
    first: number
    second: number
    third: number
}

interface EventDate {
    [key: string]: any
    practice: string
    qualifying: string
    race: string
}

interface EventProps {
    id: number
    country: string
    name: string
    date: EventDate
    raceResults: RaceResult | null
}

interface NextEventProps {
    event: EventProps
    name: string
}

export default () => {

    const [allDrivers, setAllDrivers] = useState<DriverProps[]>([])
    const [allEvents, setAllEvents] = useState<EventProps[]>([])
    const [nextEvent, setNextEvent] = useState<NextEventProps | null>(null)
    const [dataLoaded, setDataLoaded] = useState<boolean | undefined>(undefined)
    const [driverSelect, setDriverSelect] = useState<DriverProps | undefined>(undefined)
    const [time, setTime] = useState<string>("")
    const location = useLocation().pathname
    const monthsList = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

    const eventNameFormat = nextEvent?.event.name.replaceAll(" ", "").toLowerCase()

    useEffect(() => {
        fetchAllEvents()
        fetchAllDrivers()
    }, [])

    function fetchAllEvents() {
        fetch("./data/events/all.json")
            .then(r => {
                if (r.ok) {
                    return r.json()
                } else {
                    throw new Error('Erro ao carregar os dados');
                }
            })
            .then(r => {
                setAllEvents(r)
                setDataLoaded(true)
            })
            .catch(e => {
                console.error(e)
                setDataLoaded(false)
            })
    }

    function fetchAllDrivers() {
        fetch("./data/drivers.json")
            .then(r => {
                if (r.ok) {
                    return r.json()
                } else {
                    throw new Error('Erro ao carregar os dados');
                }
            })
            .then(r => {
                setAllDrivers(r)
                setDataLoaded(true)
            })
            .catch(e => {
                console.error(e)
                setDataLoaded(false)
            })
    }

    useEffect(() => {
        if (allEvents.length > 0) getNextEvent()
    }, [allEvents])

    useEffect(() => {
        if (allDrivers.length > 0) handleDriverSelect()
    }, [allDrivers])


    function getNextEvent() {
        const dataAtual = moment();
        
        let eventoMaisProximo: EventProps | null = null;
        let menorDiferenca = Infinity;
        let tipoEventoMaisProximo: string = '';
        
        allEvents.forEach((evento) => {
            const { practice, qualifying, race } = evento.date;

            const datasEventos = {
                practice: moment(practice),
                qualifying: moment(qualifying),
                race: moment(race),
            };

            const diferencaPractice = datasEventos.practice.valueOf() - dataAtual.valueOf();
            const diferencaQualifying = datasEventos.qualifying.valueOf() - dataAtual.valueOf();
            const diferencaRace = datasEventos.race.valueOf() - dataAtual.valueOf();
            
            const differences = [diferencaPractice, diferencaQualifying, diferencaRace].filter(item => item > 0)
            const menorDiferencaAtual = Math.min(...differences);
        
            if (menorDiferencaAtual < menorDiferenca) {
                menorDiferenca = menorDiferencaAtual;
                eventoMaisProximo = evento;

                if (menorDiferenca === diferencaPractice) {
                    tipoEventoMaisProximo = 'practice';
                } else if (menorDiferenca === diferencaQualifying) {
                    tipoEventoMaisProximo = 'qualifying';
                } else {
                    tipoEventoMaisProximo = 'race';
                }
            }
        });

        if (eventoMaisProximo != null) {
            setNextEvent({
                event: eventoMaisProximo,
                name: tipoEventoMaisProximo
            }) 
        }
    }

    function dateWeekend(date: EventDate) {
        const dates: string[] = []
        Object.values(date).map(item => {
            dates.push(item.split("T")[0].split("-")[2])
        })

        return dates.join(", ") + " de " + currentMonth(date.race)
    }

    function currentMonth(date: string) {
        const now = new Date(date);
        return monthsList[now.getMonth()]
    }

    function timeForNextEvent() {
        if (nextEvent != undefined) {
            const now = moment()
            let timeEvent = checkEventName(nextEvent.name);

            const next = moment(timeEvent)
            const diff = moment.duration(next.diff(now))

            const days = diff.days();
            const hours = diff.hours().toString().padStart(2, "0")
            const minutes = diff.minutes().toString().padStart(2, "0")
            const seconds = diff.seconds().toString().padStart(2, "0")

            if (next.year() != now.year()) {
                setTime(`${now.year() + 1}`)
            
            } else {
                if (days > 0) {
                    const day = next.date().toString().padStart(2, "0")
                    const month = next.month()

                    setTime(`${day} ${monthsList[month]}`)
                } else {
                    setTime(`${hours}:${minutes}:${seconds}`)
                }
                
            }
        }
    }

    function checkEventName(name: string) {
        return nextEvent?.event.date[name]
    }

    setInterval(() => {
        timeForNextEvent()
    }, 1000)




    const handleDriverSelect = (value?: string) => {
        if (value == undefined) {
            setDriverSelect(mostPoints())
        } else {
            const selected = allDrivers.find(item => {
                return item.name == value
            })

            console.log(selected)
            
            setDriverSelect(selected)
        }
    }

    function mostPoints() {
        const objetoComMaiorPontuacao = allDrivers.reduce((maior, objeto) => {
            return (objeto.points > maior.points) ? objeto : maior;
          }, { points: -Infinity } as DriverProps);

          return objetoComMaiorPontuacao
    }

    

    

    return (
        <PageContainer>
            <Breadcrumb path={location}/>

            { dataLoaded === undefined || nextEvent === null ?
                <p> Aguarde... </p>
                
                : dataLoaded === false ?
                <p> Houve um erro </p>
                :
                <>
                    <Styled.NextEvent>
                        <img className='circuit' src={require(`../../assets/images/circuits/${eventNameFormat}/circuit.webp`)} />

                        <main>
                            <header>
                                <img src={require(`../../assets/images/circuits/${eventNameFormat}/flag.webp`)} />
                                <p> { nextEvent.event.country } </p>
                            </header>
                            <h1> { nextEvent.event.name } </h1>

                            <div>
                                <p> ROUND { nextEvent.event.id } </p>
                                <span> ● </span>
                                <p> { dateWeekend(nextEvent.event.date) } </p>
                            </div>
                        </main>

                        <aside>
                            <p> { nextEvent.name == "practice" ? "Treino Livre" : nextEvent.name == "qualifying" ? "Classificatório" : "Corrida" } EM </p>
                            <h1> { time } </h1>

                            <Button path={`/races/${eventNameFormat}`}> VER MAIS </Button>
                        </aside>
                    </Styled.NextEvent>

                    <Styled.Main>
                        <Styled.DriverSelected>
                            { driverSelect == undefined ?
                                <p> Aguarde... </p>    
                                :
                                <h1> { driverSelect.name } </h1>
                            }
                        </Styled.DriverSelected>
                        <Styled.DriverStandings>
                            <h3> Classificação dos pilotos </h3>

                            { allDrivers.sort((a, b) => b.points - a.points).map((item: DriverProps, key: number) => (
                                <DriverStandings
                                    key={key}
                                    position={key + 1}
                                    name={item.name}
                                    color={item.team.color}
                                    points={item.points}
                                    select={handleDriverSelect}
                                />
                            )) }
                        </Styled.DriverStandings>
                    </Styled.Main>
                </>
        }
            
        </PageContainer>
    )
}