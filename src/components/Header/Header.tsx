import * as Styled from './style'
import { useEffect, useState, useRef } from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import * as ScrollArea from '@radix-ui/react-scroll-area'

import { CaretDownIcon } from '@radix-ui/react-icons';

import { NavLink } from 'react-router-dom'

interface DriverProps {
    id: number
    name: string
    abbreviation: string
    team: {
        name: string
        color: string
    }
    country: string
}

export default () => {

    const [allDrivers, setAllDrivers] = useState<DriverProps[]>([])
    const [distanceFromWindow, setDistanceFromWindow] = useState<number | undefined>(0)

    const ref = useRef(null);
    

    useEffect(() => {
        fetchAllDrivers()
        translateMenu()
    }, [])

    function fetchAllDrivers() {
        fetch("./data/drivers.json")
            .then(r => r.json())
            .then(r => setAllDrivers(r))
            .catch(e => console.error(e))
    }

    window.onresize = () => {
        translateMenu()
    }
    
    function translateMenu() {
        const element = document.querySelector(".ViewportPosition")
        const distance = element?.getBoundingClientRect().left
        setDistanceFromWindow(distance)
    }

    const allTeams = Array.from(new Set(allDrivers.map(driver => driver.team.name)))


    return (
        <Styled.HeaderContainer>
            <main>

            <svg viewBox="0 0 15 15" fill="none"><path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>

            <menu>
                <NavLink to={"/"}>
                    <svg viewBox="0 0 320 80" fill="none"><g clipPath="url(#clip0_1_57)"><g clipPath="url(#clip1_1_57)"><path fillRule="evenodd" clipRule="evenodd" d="M45.2583 80L80.7417 45.575H80.7333C94.7167 32.0167 100.392 29.9583 127.058 29.9583H233.408L264.008 0H123.025C87.3333 0 77.2417 3.4 56.3083 24.1167L0 80H45.2583ZM127.7 34.7417H228.842L200.792 62.7917H128.225C114.925 62.7917 111.983 63.4167 105.383 70.0167L95.4 80H53.4333L84.4583 48.975C96.6417 36.8 100.842 34.7417 127.7 34.7417ZM320 0L239.783 80H190.175L270.175 0H320ZM267.183 77.4667C268.85 79.1583 270.95 80 273.475 80C276 80 278.075 79.1583 279.717 77.4833C281.358 75.8083 282.175 73.7333 282.175 71.2667C282.175 68.8 281.35 66.725 279.7 65.0333C278.05 63.3417 275.967 62.5 273.442 62.5C270.917 62.5 268.825 63.3417 267.167 65.0167C265.508 66.6917 264.675 68.7667 264.675 71.2333C264.675 73.7 265.508 75.775 267.183 77.4667ZM268.225 66.025C269.625 64.5917 271.358 63.875 273.425 63.875C275.5 63.875 277.233 64.5917 278.625 66.025C280.017 67.4583 280.717 69.2 280.717 71.25C280.717 73.3 280.017 75.0333 278.625 76.4583C277.225 77.8833 275.5 78.5917 273.425 78.5917C271.35 78.5917 269.617 77.875 268.225 76.4417C266.833 75.0083 266.133 73.275 266.133 71.2333C266.133 69.1917 266.833 67.4583 268.225 66.025ZM271.717 76.125V72.6917L271.725 72.7H273.683L275.342 76.1333H277.367L275.542 72.45C276.158 72.1667 276.592 71.8 276.85 71.3417C277.108 70.8833 277.233 70.1833 277.233 69.2417C277.233 68.3 276.917 67.5917 276.283 67.125C275.65 66.65 274.7 66.4167 273.442 66.4167H269.792V76.125H271.717ZM271.683 71.1833V67.9167H273.275C274.65 67.9167 275.333 68.4583 275.333 69.55C275.333 70.125 275.2 70.5417 274.933 70.8C274.675 71.0583 274.242 71.1833 273.642 71.1833H271.683Z" fill="white"/></g></g><defs><clipPath id="clip0_1_57"><rect width="320" height="80" fill="white"/></clipPath><clipPath id="clip1_1_57"><rect width="320" height="80" fill="white"/></clipPath></defs></svg>
                </NavLink>
            
                <NavigationMenu.Root className="NavigationMenuRoot">
                    <NavigationMenu.List className="NavigationMenuList">
                        <NavigationMenu.Item>
                            <NavigationMenu.Trigger className="NavigationMenuTrigger" onClick={() => window.location.href = "/drivers"} onMouseEnter={translateMenu}>
                                <img src={require("../../assets/icons/helmet.webp")}/>
                                Pilotos 
                                <CaretDownIcon className="CaretDown" aria-hidden />
                            </NavigationMenu.Trigger>
                            <NavigationMenu.Content className="NavigationMenuContent">
                                <ScrollArea.Root className="ScrollAreaRoot">
                                    <ScrollArea.Viewport className="ScrollAreaViewport">
                                        <ul className="List one">
                                            {allDrivers.map((item, key) => {
                                                const firstName = item.name.split(" ")[0]
                                                const lastName = item.name.replace(firstName, "").trim()

                                                let imageSrc: string;
                                                try {
                                                    imageSrc = require(`../../assets/images/drivers/${item.name}.webp`)
                                                } catch {
                                                    imageSrc = require("../../assets/images/drivers/Not Found.webp")
                                                }

                                                return (
                                                    <Styled.Navigation key={key} orientation={"horizontal"} color={item.team.color} to={`/drivers/${item.abbreviation}`}>
                                                        <div>
                                                            <img src={imageSrc} alt={item.name} />
                                                        </div>
                                                        <p> { firstName } <span> { lastName } </span> </p> 
                                                    </Styled.Navigation>
                                                )
                                            })}
                                        </ul>
                                    </ScrollArea.Viewport>
                                    <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="horizontal">
                                    <ScrollArea.Thumb className="ScrollAreaThumb" />
                                    </ScrollArea.Scrollbar>
                                </ScrollArea.Root>
                            </NavigationMenu.Content>
                        </NavigationMenu.Item>

                        <NavigationMenu.Item>
                            <NavigationMenu.Trigger className="NavigationMenuTrigger" onClick={() => window.location.href = "/teams"} onMouseEnter={translateMenu}>
                                    <img src={require("../../assets/icons/team.webp")}/>
                                    Equipes 
                                    <CaretDownIcon className="CaretDown" aria-hidden />
                            </NavigationMenu.Trigger>
                            <NavigationMenu.Content className="NavigationMenuContent">
                                <ScrollArea.Root className="ScrollAreaRoot">
                                    <ScrollArea.Viewport className="ScrollAreaViewport">
                                        <ul className="List two">
                                            { allTeams.map((item, key) => (
                                                <Styled.Navigation key={key} orientation={"vertical"} to={`/teams/${item}`}>
                                                    <div>
                                                        <img src={require(`../../assets/images/teams/${item}.png`)} alt={item} />
                                                    </div>
                                                    <p> { item } </p> 
                                                </Styled.Navigation>
                                            )) }
                                        </ul>
                                    </ScrollArea.Viewport>
                                    <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="horizontal">
                                    <ScrollArea.Thumb className="ScrollAreaThumb" />
                                    </ScrollArea.Scrollbar>
                                </ScrollArea.Root>
                            </NavigationMenu.Content>
                        </NavigationMenu.Item>

                        <NavigationMenu.Item>
                            <NavigationMenu.Link className="NavigationMenuLink" href="/races">
                                <img src={require("../../assets/icons/flag.webp")}/>
                                Corridas
                            </NavigationMenu.Link>
                        </NavigationMenu.Item>

                        <NavigationMenu.Indicator className="NavigationMenuIndicator">
                            <div className="Arrow" />
                        </NavigationMenu.Indicator>
                    </NavigationMenu.List>

                    <div className="ViewportPosition">
                        <NavigationMenu.Viewport className="NavigationMenuViewport" />
                    </div>
                </NavigationMenu.Root>
            </menu>

            <div>
                <Styled.LoginButton to={"/auth"}> Entrar </Styled.LoginButton>
            </div>
            </main>
        </Styled.HeaderContainer>
    )
}