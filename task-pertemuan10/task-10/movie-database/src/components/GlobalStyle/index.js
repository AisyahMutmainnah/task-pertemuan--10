// import createGlobalstyle
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    // css reset, font
    @import url('https://fonts.googleapis.com/css2?family=Nuosu+SIL&display=swap');

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
        font-family: 'Nuosu SIL', serif;
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }

`;

export default GlobalStyle;