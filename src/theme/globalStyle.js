import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    ${({ theme }) => `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html, body {
        height: 100%;
    }


    html {
        scroll-behaviour: smooth;
    }

    body {
        width: 100%;
        background: ${theme.colors.accent};
        color: ${theme.colors.text};
        font-family: ${theme.fonts.text};
        display: block;
        line-height: 1.5;
    }
    `}
`;
