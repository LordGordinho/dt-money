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

  .react-modal-overlay {
    background-color: rgb(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background-color: var(--backgroud);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;

    .close-button-modal{
      width: 3rem;
      height: 3rem;
      position: absolute;

      top: 1rem;
      right: 1rem;

      cursor: pointer;
    }
  }
`

