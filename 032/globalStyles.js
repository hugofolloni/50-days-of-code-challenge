import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        background-color: ${({ theme }) => theme.background };
        color: ${({ theme}) => theme.color};
    }

    .singular-text{
        background-color: ${({ theme }) => theme.backgroundContainer };
    }    

    .singular-text a{ 
        color: ${({ theme }) => theme.color};
    }

    .clocks-label p {
        background-color: ${({ theme }) => theme.clockBackground};
        color: ${({ theme }) => theme.color};
        opacity: 0.4;
    }

    .personalizado input {
        background-color: ${({ theme }) => theme.clockBackground};
        color: ${({ theme }) => theme.color};
        opacity: 0.4;
    }

    .task-details{
        background-color: ${({ theme }) => theme.backgroundContainer };
    }

    .pomodoro-inside-div{
        background-color: ${({ theme }) => theme.backgroundContainer };

    }

    .clocks-label p{
        color: ${({ theme }) => theme.color};
    }

    .whiteButton{
        background-color: ${({ theme }) => theme.whiteButton};
    }

    .inside-inputs input{
        background-color: ${({ theme }) => theme.input};
        color: ${({ theme }) => theme.color};
    }

    .inputsPersonalizado input{
        color: ${({ theme }) => theme.color };   
        font-weight: 700;    
    }
    
    .toDoInput input, .toDoInput textarea {
        background-color: ${({ theme }) => theme.input};
    }
`
