import developer from "./assets/developer.svg";
import React, { useState } from "react";

const Home = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const api = 'http://localhost:8080/sendTo';
        const sendToEmail = { email };
        fetch(api, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(sendToEmail)
        })
        .then(() => {
            console.log("Email added:", sendToEmail)
        })
    }

    const [email, setEmail] = useState(null);

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
                    <input type="text" className='formInput' onChange={(e) => setEmail(e.target.value)}/>
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