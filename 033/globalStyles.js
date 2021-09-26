import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    .App {
        background: ${({ theme }) => theme.background };    
    }
`