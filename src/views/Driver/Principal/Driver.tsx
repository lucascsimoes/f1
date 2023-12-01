import * as Styled from './style'
import { useLocation } from 'react-router-dom'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'

import { PageContainer } from '../../../GlobalStyle'

export default () => {

    const location = useLocation().pathname

    return (
        <PageContainer>
            <Breadcrumb path={location}/>
        </PageContainer>
    )
}