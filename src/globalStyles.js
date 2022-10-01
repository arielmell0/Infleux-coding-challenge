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

  label {
    width: 30px;
  }
`;
 
export default GlobalStyle;