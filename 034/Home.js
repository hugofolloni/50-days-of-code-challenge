import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { nightTheme, dayTheme } from "./theme";
import { useState } from "react"


const Home = () => {
    const [locality, setLocality] = useState('Mars')
    const [temperature, setTemperature] = useState('-273')
    const [scale, setScale] = useState('°C')
    const [summary, setSummary] = useState("JK, we're getting your location, wait a sec please!")
    const [icon, setIcon] = useState(null)

    const getWeather = () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position => {
                const long = position.coords.longitude;
                const lat = position.coords.latitude;

                var proxy = 'https://the-cors.herokuapp.com/';
                var api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`
                var location = `${proxy}https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=pt`

                Promise.all([
                    fetch(api),
                    fetch(location)
                ]).then(function (responses) {
                    return Promise.all(responses.map(function (response) {
                        return response.json();
                    }));
                }).then(function (data) {
                    const fahrenheitTemperature = Number(data[0].currently.temperature);
                    const celsiusTemperature = ((fahrenheitTemperature - 32) * 5/9).toFixed(1);
                    setTemperature(celsiusTemperature);
                    setLocality(data[1].locality);
                    setSummary(data[0].currently.summary);
                })}
            )}

    }


    window.addEventListener('load', getWeather);

    const changeScale = () => {
        if(scale === "°C"){
            setScale("°F");
            setTemperature(((temperature * 9/5) + 32).toFixed(1));
        }
        else if(scale === "°F"){
            setScale("°C");
            setTemperature(((temperature - 32) * 5/9).toFixed(1));
        }
    }

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
      isDay === 0 ? setTheme('dark') : setTheme('light')
  }
  
    window.addEventListener('load', themeToggler)

    return ( 
        <ThemeProvider theme={theme === 'dark' ? nightTheme : dayTheme}>
        <GlobalStyles/>
        <div className="home">
            <div className="localityLabel">
                <h2 className="locality"> { locality } </h2>
                <canvas className='icon'></canvas>
            </div>
            <div className="temperatureLabel" onClick={ changeScale }>
                <h3> { temperature } { scale } </h3>
            </div>
            <div className="summaryLabel">
                <p> { summary } </p>
            </div>
        </div>
        </ThemeProvider>
     );
}
 
export default Home;
