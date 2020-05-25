import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html{
        height: 100%;
        width: 100%;
        margin: 0 auto;
        /* max-width: 1500px; */
        color: #000000;
        font-family: 'Muli', sans-serif;
        font-size: 100%;
        background-color: #FAF7F7;
    }

    * {
        padding: 0;
        margin: 0;
    }

    a{
        text-decoration: none;
        color: #000000;
    }

    ::-webkit-scrollbar{
        width: 8px;
    }

    ::-webkit-scrollbar-thumb{
        background: rgba(0,0,0, 0.75);  
        border-radius: 8px;
    }

    
`;

export default GlobalStyle;