import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    background: #fffdf4;
  }
  
  body {
    font-size: 12px;
    margin: 0;
    font-family: 'self-modern', sans-serif;
    color: #000;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: 0.1rem;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  .container {
    max-width: 1440px;
  }
`;

export default GlobalStyle;
