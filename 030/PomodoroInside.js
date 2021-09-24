import React, { useState, useEffect } from "react"
import './PomodoroInside.css'
import useFetch from "./useFetch"

const PomodoroInside = () => {

        const minutes = 0, seconds = 0
        const [[mins, secs], setTime] = useState([minutes, seconds]);
    
        const [persMin, setPersMin] = useState(25);
        const persSec = 0

        const [description, setTaskDescription] = useState('')

        
        const id  = window.location.href.split('/').reverse()[0]
        const {toDos} = useFetch('http://localhost:8000/toDos/' + id)

      const multipleFunctions = () => {
            handleStart();
            saveTask();
        }

        const saveTask = () => {
            const action = toDos.action;
            const currentDate = new Date()
            console.log(currentDate.getDate())
            const dia = currentDate.getDate() + '/' + (currentDate.getMonth() + 1)
            const singlePomodoro = { description, action, dia };
            fetch('http://localhost:8000/pomodoros', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(singlePomodoro)
            })
            .then(() => {
                console.log("Pomodoro added", singlePomodoro)
            })
        }

        const handleStart = () => {
            setTime([parseInt(persMin), parseInt(persSec)]);
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
            <div className='pomodoro-inside-div'>
                <div className="clocks-label">
                    <p>{`${mins.toString().padStart(2, '0')}`}</p>
                    <p>{`${secs.toString().padStart(2, '0')}`}</p> 
                </div>
                <div className="inside-div">
                    <div className="inside-inputs">
                        <div className="define-time">
                           <label>Duração</label>
                           <input className='inputs' onChange={(e) => setPersMin(e.target.value)} value={persMin}/>     
                        </div>
                        <div className="pomodoro-description">
                            <label>Task Description</label>
                            <input className='inputs' onChange={(e) => setTaskDescription(e.target.value)}></input>
                        </div>
                    </div>
                    <button onClick={ multipleFunctions }>Iniciar</button>
                </div>
            </div>
        );
    }

 
export default PomodoroInside;