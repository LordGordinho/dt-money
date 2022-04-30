import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --backgroud: #F0F2F5;

    --green: #33CC95;
    --red:  #E62E4D;
    --blue: #5429CC;
    --blue-ligth: #6933ff;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --shape: #FFF;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px){
      font-size: 93.75%;
    }

    @media (max-width: 720){
      font-size: 87.5%;
    }
  }

  body {
    background-color: var(--backgroud);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  [disable] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`