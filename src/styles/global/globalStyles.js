import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
    }

    body {
        font-family: 'Open Sauce One', sans-serif;
        background: white;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    button {
        background: inherit;
        border: none;
        &:focus{
            outline: none;
            border: none;
        }
    }

    input {
        border: none;
        background: inherit;

        &:focus {
            outline: none;
            border: none;
        }
    }
`;

export default GlobalStyle;
