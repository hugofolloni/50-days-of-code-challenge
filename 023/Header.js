import React, { useState } from "react";

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
            <a href="/newTask">New Task</a>
        </div>
     );
}
 
export default Header;