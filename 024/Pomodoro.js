import React, { useState, useEffect } from "react"
import "./Pomodoro.css"

const Pomodoro = () => {
    const minutes = 0, seconds = 0
    const [[mins, secs], setTime] = useState([minutes, seconds]);

    const [persMin, setPersMin] = useState(30);
    const [persSec, setPersSec] = useState(0);
    
    const start = () => {
        setTime([25, 0]);
    }

    const handlePers = () => {
        setTime([parseInt(persMin), parseInt(persSec)]);
    }
    
    const pause = () => {
        setTime([10, 0]);
    }

    const tick = () => {
        if (secs === 0 && mins === 0){
            stillZero();
        }
        if (secs === 1 && mins === 0){
            window.alert("Seu pomodoro acabou!");
        }
        if (secs === 0 && mins !== 0) {
            setTime([mins - 1, 59]);
        } else if (secs !== 0){
            setTime([mins, secs - 1]);
        }
    };


    const stillZero = () => setTime([parseInt(minutes), parseInt(seconds)]);

    
    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    
    return (
        <div className='pomodoro-div'>
            <div className="clocks-label">
                <p>{`${mins.toString().padStart(2, '0')}`}</p>
                <p>{`${secs.toString().padStart(2, '0')}`}</p> 
            </div>
            <div className="ordinaryButtonDiv">
                <button onClick={start}>Task</button>
                <button onClick= { pause }>Break</button>
            </div>
            <div className="personalizado">
                <div className="inputsPersonalizado">
                    <input type="number" min='0' onChange={(e) => setPersMin(e.target.value)} value={persMin}/>
                    <input type="number" min='0' max='59' onChange={(e) => setPersSec(e.target.value)} value={persSec}/>
                </div>
                <button onClick={ handlePers }>Personalizado</button>
            </div>
        </div>
    );
}
 
export default Pomodoro;