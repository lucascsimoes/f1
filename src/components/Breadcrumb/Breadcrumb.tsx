import * as Styled from './style'
import React from 'react';

interface BreadcrumbProps {
    path: string;
}

export default ({ path }: BreadcrumbProps) => {

    const route = Array.from(new Set(path.split("/")))

    return (
        <Styled.BreadcrumbContainer>
            { route.map((item, key) => (
                <React.Fragment key={key}>
                    { item == "" ? 
                        <Styled.Navigation to={"/"}>
                            <svg viewBox="0 0 15 15" fill="none"><path d="M7.07926 0.222253C7.31275 -0.007434 7.6873 -0.007434 7.92079 0.222253L14.6708 6.86227C14.907 7.09465 14.9101 7.47453 14.6778 7.71076C14.4454 7.947 14.0655 7.95012 13.8293 7.71773L13 6.90201V12.5C13 12.7761 12.7762 13 12.5 13H2.50002C2.22388 13 2.00002 12.7761 2.00002 12.5V6.90201L1.17079 7.71773C0.934558 7.95012 0.554672 7.947 0.32229 7.71076C0.0899079 7.47453 0.0930283 7.09465 0.32926 6.86227L7.07926 0.222253ZM7.50002 1.49163L12 5.91831V12H10V8.49999C10 8.22385 9.77617 7.99999 9.50002 7.99999H6.50002C6.22388 7.99999 6.00002 8.22385 6.00002 8.49999V12H3.00002V5.91831L7.50002 1.49163ZM7.00002 12H9.00002V8.99999H7.00002V12Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                        </Styled.Navigation> 
                        : 
                        <>
                            <svg className='divider' viewBox="0 0 15 15" fill="none" ><path d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 2.5C7 2.22386 7.22386 2 7.5 2Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                            <Styled.Navigation to={`/${item}`}> { item } </Styled.Navigation>
                        </>
                    }
                </React.Fragment>
            )) }
            
        </Styled.BreadcrumbContainer>
    )
}