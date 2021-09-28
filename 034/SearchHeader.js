import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom';

const SearchHeader = () => {

    const [hourTime, setHourTime] = useState(null);
    const [minuteTime, setMinuteTime] = useState(null);  

    useEffect(() => {
        setInterval(getTime, 1000)
    });

    const [searchTo, setSearchTo] = useState(null)

    const getTime = () => {
        const location  = window.location.href.split('/').reverse()[0].split('%20').join('_');
        
        var proxy = 'https://the-cors.herokuapp.com/';
        var api = `${proxy}http://api.weatherapi.com/v1/current.json?key= 22370fad94b44b3c94300446211806&q=${location}&aqi=no`;
        fetch(api)
        .then(response =>{
            return response.json();
        })
        .then(data =>{
            var localtime = data.location.localtime;
            var localtimeCut = localtime.split(' ');
            var localtimeFull = localtimeCut[1];
            var localtimesFullSepareted = localtimeFull.split(':');
            var minuteLocaltime = String(localtimesFullSepareted[1]).padStart(2, '0');
            var justHourLocaltime = String(localtimesFullSepareted[0]).padStart(2, '0');
            var today = new Date()
            var minuteTime = String(today.getMinutes()).padStart(2, '0')
            if (parseInt(minuteLocaltime, 10) - parseInt(minuteTime, 10) > 30){
                if(hourTime === '23'){
                    setHourTime(0)
                    setMinuteTime(minuteTime)
                }
                else{
                    setHourTime(parseInt(justHourLocaltime, 10) + 1)
                    setMinuteTime(minuteTime)
                }
            }
            else {
                setHourTime(justHourLocaltime)
                setMinuteTime(minuteTime)
            }
        })}

    return (
        <div className="header">
            <div className="timer">
                <a href="/">
                    <h1> { hourTime } </h1> 
                    <h1>:</h1>  
                    <h1> { minuteTime }</h1>        
                </a>
            </div>
            <div className="input">
                <input type="text" onChange={(e) => setSearchTo(e.target.value)} />
                <a href={`q/${searchTo}`}>Search</a>
            </div>
        </div> 
    );
}
 
export default SearchHeader;