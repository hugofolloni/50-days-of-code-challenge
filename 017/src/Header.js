import React, { useState, useEffect} from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import GlobalTheme from "./globals";

const Header = () => {

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
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalTheme />
        <div className="header-content">
            <a href="/">
                <h1>Hugo Folloni's Blog</h1>
            </a>
            <div className="buttonsHeader">
                <a className="ordinaryButton" href="/About">About me</a>
                <button className="ordinaryButton" onClick={ toggleTheme }>Light/Dark</button>
                <a className='createBlogButton' href='/create'>Create New Blog</a>
            </div>
        </div>
        </ThemeProvider>
     );
}
 
export default Header;
    