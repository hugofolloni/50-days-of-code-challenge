import React, { useState } from "react";
import "./Header.css"

const Header = () => {

    const handleNameChange = () => {
        const name = window.prompt("Qual seu nome?")
        setName(name)
        localStorage.setItem('name', name)
    }

    const [name, setName] = useState(localStorage.getItem('name') || "...")

    return ( 
        <div className="newHeaderDiv">
            <h2 onClick={handleNameChange}>To-Do List de {name}</h2>
            <a href="/">Home</a>
        </div>
     );
}
 
export default Header;