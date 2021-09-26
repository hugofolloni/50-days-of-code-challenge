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
    

    return (
        <div className="header">
            <div className="timer">
                <h1> { hourTime } </h1>
                <h1>:</h1>
                <h1> { minuteTime }</h1>
            </div>
            <div className="input">
                <input type="text" />
                <button>Search</button>
            </div>
        </div> 
    );
}
 
export default Header;