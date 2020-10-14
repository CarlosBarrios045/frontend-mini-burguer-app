// Remove
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;

    font-family: "Montserrat" !important;
    
    :focus {
      outline: none;
    }
  }

  
  body {
    background-color: ${({ theme }) =>
      theme?.palette?.background?.primary?.main} !important;
  }

  ul {
    list-style: none;
  }
`;
