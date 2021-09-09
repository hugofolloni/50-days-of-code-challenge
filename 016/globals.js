import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body{
        background: ${({theme}) => theme.background};
        color: ${({theme}) => theme.color};
    }
`