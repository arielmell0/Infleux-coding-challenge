import { Link } from 'react-router-dom'
import styled from "styled-components";
import 'animate.css';

const Menu = () => {
    return (
        <Header className='menu'>
            <StyledLink to="create-campaign">Criar campanhas</StyledLink>
            <StyledLink to="list-campaign">Listar campanhas</StyledLink>
        </Header>
    )
};

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;

    width: 100vw;
    height: 10vh;

    padding: 0;
    margin: 0;

    background-color: black;
`

const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15vw;
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
    padding: 0;
    text-decoration: none;
    @import url(https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic);
    font-family: Roboto, sans-serif;

    cursor: pointer;

    margin: 3vw;

    &:hover {
        color: #F25774;
        animation-name: flash;
        animation-duration: 1s;
        animation-iteration-count: infinite;
    }

    @media (max-width: 800px) {
        margin: 4vw;
    }

    @media (max-width: 500px) {
        margin: 6vw;
    }

    @media (max-width: 400px) {
        margin: 8vw;
    }
`

export default Menu;