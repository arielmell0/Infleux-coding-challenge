import { Container } from '../Container/Container.js'
import styled from 'styled-components'

export const CreateCampaign = () => {
    return (
        <Container>
            <FormCampaign/>
        </Container>
    )
}

const FormCampaign = styled.div`
    background-color: red;
    height: 100vh;
    width: 100vw;
`