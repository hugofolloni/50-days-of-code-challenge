import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { nightTheme, dayTheme } from "./theme";
import { useState } from "react"

const Search = () => {

    const location  = window.location.href.split('/').reverse()[0].split('%20').join('_');

    const [locality, setLocality] = useState('Mars')
    const [temperature, setTemperature] = useState('-273')
    const [scale, setScale] = useState('°C')
    const [summary, setSummary] = useState("JK, we're getting data about your location. Wait a minute!")
    const [icon, setIcon] = useState(null);
    const [theme, setTheme] = useState('light');

    const getWeather = () => {
        var proxy = 'https://the-cors.herokuapp.com/';
        var api = `${proxy}http://api.weatherapi.com/v1/current.json?key= 22370fad94b44b3c94300446211806&q=${location}&aqi=no`;

        fetch(api)
        .then(response =>{
            return response.json();
        })
        .then(data =>{
            const location = data.location.name
            const state = data.location.country
            setLocality(location + ', ' + state);
            const lat = data.location.lat;
            const long = data.location.lon;

            var proxy = 'https://the-cors.herokuapp.com/';
            var api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`
            
            fetch(api)
            .then(response =>{
                return response.json();
            })
            .then(data =>{
            setSummary(data.currently.summary)
            const fahreinheitTemperature = data.currently.temperature
            setTemperature(((fahreinheitTemperature - 32) * 5/9).toFixed(1));

            var proxy = 'https://the-cors.herokuapp.com/';
            var isdayapi = `${proxy}http://api.weatherapi.com/v1/current.json?key= 22370fad94b44b3c94300446211806&q=${lat},${long}&aqi=no`;
            fetch(isdayapi)
            .then((res) =>{
                return res.json()
            })
            .then((data) =>{
                data.current.is_day === 0 ? setTheme('dark') : setTheme('light')
            })
          })

        })
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
 
export default Search;