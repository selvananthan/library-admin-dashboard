// src/styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f7fc;
    color: #333333;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3 {
    margin: 0 0 10px 0;
  }

  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 20px;
  }

  h3 {
    font-size: 18px;
  }

  p {
    margin: 0 0 10px 0;
  }

  .container {
    padding: 20px;
  }
`;

export default GlobalStyle;
