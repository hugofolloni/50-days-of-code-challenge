import cityweather from "./assets/city-weather.ico";
import heyo from "./assets/heyo.jpg";
import todo from "./assets/to-do.png";
import coding from "./assets/coding.png"
import landing from "./assets/landing.ico"
import profile from "./assets/profile.jpeg"

const Works = () => {
    return ( 
        <div className="content" id='works'>
            <div className="title">
                <h2>WORKS</h2>
            </div>
            <div className="works">
                <div className="row">
                    <div className="project">
                        <h4>CITY WEATHER</h4>
                        <img src={ cityweather } alt="" />
                        <p>A website that displays the current weather of any place on earth. Made with React and some APIs, user can search any location, even automactilly his own location.</p>
                        <a href='https://github.com/hugofolloni/city-weather'>Github</a>
                    </div>
                    <div className="project">
                        <h4>HEYO DISCORD BOT</h4>
                        <img src={ heyo } style={ { borderRadius:"20%" } } alt="" />
                        <p>An interactive and fun bot for discord servers. Made with Node.js, especially Discord.js. It runs in portuguese language, mixing music, fun and curiosity commands.</p>
                        <a href='https://github.com/hugofolloni/heyo-discord-bot'>Github</a>
                    </div>
                    <div className="project">
                        <h4>REACT TO-DO-LIST</h4>
                        <img src={ todo } alt="" />
                        <p>A simple to-do list made with React. It is a to-do list with a pomodoro timer integrated where the user can control his tasks and time for study/work.</p>
                        <a href='https://github.com/hugofolloni/react-to-do-list'>Github</a>
                    </div>
                </div>
                <div className="row">
                <div className="project">
                        <h4>100 DAYS OF CODE</h4>
                        <img src={ coding } alt="" />
                        <p>A challenge to code something for the next 100 days. I still doing it, and I'm learning a lot during the process, getting confidence and code routine.</p>
                        <a href='https://github.com/hugofolloni/100-days-of-code-challenge'>Github</a>
                    </div>
                    <div className="project">
                        <h4>LANDING PAGE</h4>
                        <img src={ landing } alt="" />
                        <p>It's an "under construction" landing page with input field (made with React) and a database/backend (made with Node.js), to send emails when the page is ready.</p>
                        <a href='https://github.com/hugofolloni/landing-page'>Github</a>
                    </div>
                    <div className="project">
                        <h4>PORTFOLIO</h4>
                        <img src={ profile } style={ { borderRadius:"20%" } } alt="" />
                        <p>My portfolio website (this one haha), to introduce myself and show to others my history, skills and works. Made with React, CSS and Node for backend (nodemailer).</p>
                        <a href='https://github.com/hugofolloni/hugofolloni-portfolio'>Github</a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Works;