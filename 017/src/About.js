import React, { useState } from "react";

const About = () => {

    const [authorName, setAuthor] = useState("Hugo Folloni");

    const changeName = () => {
        if (authorName === "Hugo Folloni"){
            setAuthor("Hugo Guarilha")
        } else if(authorName === "Hugo Guarilha"){
            setAuthor("Hugo Folloni")
        };
    }

    return (
    <div className="aboutMe">
        <h1>Hello World!</h1>
        <h2>My name is { authorName }</h2>
        <p>I"m a beginner JavaScript developer learning React</p>
        <p>Please, enter on my GitHub to follow my progress:</p>
        <a href="https://github.com/hugofolloni">Meu Github</a>
        <p>I"m also doing the #100DaysOfCodeChallenge: <br /> <a href="https://github.com/hugofolloni/100-days-of-code-challenge">Github do Desafio</a></p>
        <div className="buttonsContent">
            <button className = "buttonMain" onClick={ changeName }>Change Name</button>
        </div>
    </div>  
    );
}
 
export default About;