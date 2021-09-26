import React, { useState } from "react";
import "./Header.css"
import SetTheme from "./SetTheme";

const Header = () => {

    const handleNameChange = () => {
        const name = window.prompt("Qual seu nome?")
        setName(name)
        localStorage.setItem('name', name)
    }

    const [name, setName] = useState(localStorage.getItem('name') || "...")

    return ( 
        <div className="headerDiv">
            <h2 onClick={handleNameChange}>To-Do List de {name}</h2>
            <div className="buttonsOnHeader">
                <a className='purpleButton'href="/newTask">New Task</a>
                <a className='purpleButton' href="/Pomodoro">Pomodoro</a>
                <SetTheme />
            </div>
        </div>
     );
}
 
export default Header;