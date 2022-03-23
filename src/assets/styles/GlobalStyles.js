import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }
  
  html {
    font-size: 62.5%;
    margin: 0;
    padding: 0;
    font-family: "Montserrat", sans-serif;
    max-width: 100vw;
    overflow-x: hidden;
    line-height: 1.4;
  }
  
  body {
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
  }
`;
