import React, { useState, useEffect } from "react"

const Header = () => {

    const [hourTime, setHourTime] = useState(null);
    const [minuteTime, setMinuteTime] = useState(null);  

    useEffect(() => {
        setInterval(() => {
            const today = new Date();
            setHourTime(String(today.getHours()).padStart(2, '0'))
            setMinuteTime(String(today.getMinutes()).padStart(2, '0'))
        }, 1000)
    });

    const [searchTo, setSearchTo] = useState(null)
    

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
 
export default Header;