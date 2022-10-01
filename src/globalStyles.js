import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  };

  th, td {
    padding: 0 5vw 0 5vw;
    text-align: center;
  };

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  };

  label, input, select {
    width: 250px;
    height: 25px;
    @import url(https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic);
    font-family: Roboto, sans-serif;
    font-size: 1.3rem;
    text-align: center;
  }
`;
 
export default GlobalStyle;