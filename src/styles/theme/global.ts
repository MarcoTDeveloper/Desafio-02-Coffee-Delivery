import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: none;

      ::-webkit-scrollbar {
      width: 1rem;
      }

      ::-webkit-scrollbar-track {
      background: ${({theme}) => theme.color["brand-purple-light"]};
      border-radius: 50px;
      }

      ::-webkit-scrollbar-thumb {
      border-radius: 50px;
      background: ${({theme}) => theme.color["brand-purple"]};
      }

      ::-webkit-scrollbar-thumb:hover {
      background: ${({theme}) => theme.color["brand-yellow"]};
    
    }
    }

    body {
        background-color: ${({theme}) => theme.color["base-background"]};
        color: ${({theme}) => theme.color["base-text"]};
        -webkit-font-smoothing: antialiased;
    }

    body, textarea, button, input {
        font-family: ${({theme}) => theme.font.regular};
        font-weight: 400;
        font-size: ${({theme}) => theme.textSize["text-regular-m"]};
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
    display: none;
    }
`;