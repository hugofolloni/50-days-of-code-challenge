import github from "./assets/github.svg"
import instagram from "./assets/instagram.svg"
import twitter from "./assets/twitter.svg"
import linkedin from "./assets/linkedin.svg"
// import React, { useState } from "react";

// const nodemailer = require('nodemailer');

require("dotenv").config();

const Contact = () => {

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [message, setMessage] = useState('');
    
    // const handleSubmit = () => {
    //     console.log(name, email, message);    
    //     var transporter = nodemailer.createTransport({
    //         service: 'gmail',
    //         auth: {
    //           user: 'hugofollonidev@gmail.com',
    //           pass: process.env.PASSWORD
    //         }
    //       });
      
    //       var mailOptions = {
    //         from: 'hugofollonidev@gmail.com',
    //         to: 'hugofollogua07@gmail.com',
    //         subject: `New message from ${name}`,
    //         text: `Você tem uma nova mensagem vinda de seu site-portfólio!\nNome: ${name}\nEmail: ${email}\nMessage: ${message}`
    //       };
      
    //       transporter.sendMail(mailOptions, function(error, info){
    //         if (error) {
    //           console.log(error);
    //         } else {
    //           console.log('Email sent by ' + name + "-" + email + ':' + info.response);
    //         }
    //       });
    // }

    return ( 
        <div className="content" id='contact'>
            <div className="title">
                <h2>CONTACT</h2>
            </div>
            <div className="social-medias">
                <h3>Reach me on social medias</h3>
                <div className="social-medias-links">
                    <a href="https://github.com/hugofolloni"><img src={ github } alt="gh"/></a>
                    <a href="https://linkedin.com/in/hugofolloni"><img src={ linkedin } alt="gh"/></a>
                    <a href="https://twitter.com/hugofolloni"><img src={ twitter } alt="gh"/></a>
                    <a href="https://instagram.com/hugofolloni"><img src={ instagram } alt="gh"/></a>
                </div>
            </div>
            {/* <div className="form">
                <h3>Or send me an email</h3>
                <div className="name-div">
                    <h4>Your name</h4>
                    <input type="text" placeholder='Name' onChange={ (e) => setName(e.target.value) }/>
                </div>
                <div className="email-div">
                    <h4>Your email</h4>
                    <input type="text" placeholder='Email' onChange={ (e) => setEmail(e.target.value) }/>
                </div>
                <div className="text-div">
                    <h4>Your message</h4>
                    <textarea placeholder='Message' cols="30" rows="10" onChange={ (e) => setMessage(e.target.value) }></textarea>
                </div>
                <div className="button-div">
                    <button className='submit-button' onClick={ handleSubmit }>Submit</button>
                </div>
            </div> */}
        </div> 
    );
}
 
export default Contact;