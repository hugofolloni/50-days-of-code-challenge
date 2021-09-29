import developer from "./assets/developer.svg";
import React, { useState } from "react";

const Home = () => {

    const [email, setEmail] = useState(null);


    const handleSubmit = () => {
        console.log(email)
        fetch('http://localhost:8080/sendTo', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(email)
        })
        .then(() => {
            console.log("Email added", email)
        })
    }

    return ( 
        <div className="main-content">
            <div className="left-content">
                <div className="title">
                    <h1>COMING SOON</h1>
                    <h3>This webpage, Hugo Folloni's portfolio, is still under construction.</h3>
                </div>
                <div className="input-field">
                    <h3>Let your e-mail below so we can tell you when it's finished.</h3>
                    <div className="inputs">
                        <input type="text" onChange={(e) => setEmail(e.target.value)}/>
                        <button onClick={ handleSubmit }>Send</button>
                    </div>
                </div>
            </div>
            <div className="images">
                <img src={ developer } alt="Mobile" />
                <div className="circle"></div>
            </div>
        </div>
     );
}
 
export default Home;