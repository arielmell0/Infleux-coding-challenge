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
`;
 
export default GlobalStyle;