import { Container } from '../Container/Container.js'
import styled from 'styled-components'

const Home = () => {
    return (
        <Container>
            <DivHome>
                Bem vindo à minha aplicação!<br/>
                <b>Deseja iniciar uma campanha?</b>
            </DivHome>
        </Container>
    )
}

const DivHome = styled.div`
    @import url(https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic);
    font-family: Roboto, sans-serif;
    font-size: 1.2rem;
    text-align: center;
`;

export default Home