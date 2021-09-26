import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { nightTheme, dayTheme } from "./theme";
import { useState } from "react"
import "./App.css"
import Header from "./Header";
import Home from "./Home"

function App() {

  const [isDay, setIsDay] = useState(0)

  const getIsDay = () => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
          const long = position.coords.longitude;
          const lat = position.coords.latitude;

          var proxy = 'https://the-cors.herokuapp.com/';
          var isdayapi = `${proxy}http://api.weatherapi.com/v1/current.json?key= 22370fad94b44b3c94300446211806&q=${lat},${long}&aqi=no`;

          fetch(isdayapi)
          .then((res) =>{
            return res.json()
          })
          .then((data) =>{
            console.log(data.current.is_day)
            setIsDay(data.current.is_day)
          })
      })
    }}

  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    getIsDay()
    isDay === 1 ? setTheme('dark') : setTheme('light')
}

  window.addEventListener('load', themeToggler)

  return (
    <ThemeProvider theme={theme === 'dark' ? nightTheme : dayTheme}>
    <GlobalStyles/>
    <div className="App">
        <Header />
        <Home />    
    </div>
    </ThemeProvider>
  );
}

export default App;
