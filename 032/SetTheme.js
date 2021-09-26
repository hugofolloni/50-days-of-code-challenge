import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./theme";
import { useState } from "react"
import styled from 'styled-components'
import "./App.css"

const SetTheme = () => {

    const [theme, setTheme] = useState('dark');
    const themeToggler = () => {
      theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

    const Button = styled.button`
        cursor: pointer;
    `

    return ( 
        <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyles/>
        <div className="setTheme-button">
            <Button className='purpleButton' onClick={ themeToggler }>Light/Dark</Button>
        </div>
         </ThemeProvider>
     );


}
 
export default SetTheme
