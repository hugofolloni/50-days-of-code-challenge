import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body{
        background: ${({theme}) => theme.background};
        color: ${({theme}) => theme.color};
        transition: 0.3s all ease
    }
    .singular-text {
        padding: 10px 16px;
        margin: 20px 0;
        border-bottom: 1px solid ${({theme}) => theme.background};
        border-radius: 10px;
        width: 100%;
        transition: 0.3s ease all;
      }
      .singular-text:hover {
        box-shadow: 1px 3px 5px ${({theme}) => theme.borderColor};
      }

      .aboutMe a {
        text-decoration: underline;
        color: ${({theme}) => theme.color};
        margin-left: 15%;
      }

      .buttonsHeader .ordinaryButton{
        background: ${({theme}) => theme.background};
        color: ${({theme}) => theme.color};
      }
`