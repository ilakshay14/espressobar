import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html{
        height: 100%;
        width: 100%;
        margin: 0 auto;
        color: #000000;
        font-family: 'Muli', sans-serif;
        font-size: 100%;
    }

    * {
        padding: 0;
        margin: 0;
    }
`;

export default GlobalStyle;