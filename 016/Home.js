import React, { useState, useEffect} from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import styled from "styled-components";
import GlobalTheme from "./globals";

const Home = () => {

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        if(theme === "light"){
            window.localStorage.setItem("theme", "dark");
            setTheme("dark");
        } else{
            window.localStorage.setItem("theme", "light");
            setTheme("light");
        }
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme");
        localTheme && setTheme(localTheme);
    }, []);

    return (
        <div className="home-body">
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalTheme />
                <h1>Hello World!</h1>
                <h2>My name is Hugo Folloni</h2>
                <p>I"m a beginner JavaScript developer learning React</p>
                <p>Please, enter on my GitHub to follow my progress:</p>
                <a href="https://github.com/hugofolloni">Meu Github</a>
                <p>I"m also doing the #100DaysOfCodeChallenge: <a href="https://github.com/hugofolloni/100-days-of-code-challenge">Github do Desafio</a></p>
                <ButtonChange onClick={toggleTheme}>Light/Dark</ButtonChange>
            </ThemeProvider>
      </div>
      );
}
 


const ButtonChange = styled.button`
  width: 100px;
  height: 40px;
  margin-right: 20px;
  border-radius: 
`

export default Home;