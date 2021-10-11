import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    list-style: none;
    outline: none;
  }

  body {
    background: ${({theme}) => theme.bodyBg};
    font-family: Poppins, sans-serif;
  }

  a, p {
    color: ${({theme}) => theme.textColor};
    text-decoration: none;
  }

  input, button {
    background: none;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.313rem;
    font-weight: 400;
  }
`; 