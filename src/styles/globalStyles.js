//contain global styling for the whole app
import { createGlobalStyle } from "styled-components"; //this function is used for creating global styles that are exposed to the whole app

//note: instead of writing props.theme each time, theme was destructured from props
//theme is available since ThemeProvider wraps GlobalStyles in App.js
export const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        background: ${({theme}) => theme.primaryColour}; 
        color: ${({theme}) => theme.primaryTextColour};
    }

    *, *::after, *::before {
        box-sizing: border-box;
    }

    #app {
        
        font-family: ${({ theme }) => theme.fontFamily};
    }

    h1 {
        margin: 0;
    }
    `