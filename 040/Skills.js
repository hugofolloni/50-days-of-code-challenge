import html from "./assets/html.svg"
import css from "./assets/css.svg"
import javascript from "./assets/javascript.svg"
import react from "./assets/react.svg"
import node from "./assets/node.svg"
import python from "./assets/python.svg"

import comms from "./assets/comms.svg"
import problem from "./assets/problem.svg"
import team from "./assets/team.svg"
import adaptability from "./assets/adaptability.svg"
import time from "./assets/time.svg"
import learn from "./assets/learn.svg"

const Skills = () => {

    return ( 
        <div className="content">
            <div className="title">
                <h2>SKILLS</h2>
            </div>
            <div className="skills-content">
                <h4>Development Skills</h4>
                <div className="content-list">
                    <div className="content-item">
                        <img src={html} alt="" />
                        <p>HTML</p>
                    </div>
                    <div className="content-item">
                        <img src={css} alt="" />
                        <p>CSS</p>
                    </div> 
                    <div className="content-item">
                        <img src={javascript} alt="" />
                        <p>JavaScript</p>
                    </div> 
                    <div className="content-item">
                        <img src={react} alt="" />
                        <p>React</p>
                    </div>
                    <div className="content-item">
                        <img src={node} alt="" />
                        <p>Node.js</p>
                    </div> 
                    <div className="content-item">
                        <img src={python} alt="" />
                        <p>Python</p>
                    </div>
                </div>
                <h4 className='soft-skills-label'>Soft Skills</h4>
                <div className="content-list">
                    <div className="content-item">
                        <img src={ comms } alt="" />
                        <p>Communication</p>
                    </div>
                    <div className="content-item">
                        <img src={ problem } alt="" />
                        <p>Critical Thinking</p>
                    </div>
                    <div className="content-item">
                        <img src={ learn } alt="" />
                        <p>Self Learning</p>
                    </div>
                    <div className="content-item">
                        <img src={ team } alt="" />
                        <p>Team Playing</p>
                    </div>
                    <div className="content-item">
                        <img src={ adaptability } alt="" />
                        <p>Adaptability</p>
                    </div>
                    <div className="content-item">
                        <img src={ time } alt="" />
                        <p>Time Management</p>
                    </div>
                </div>
            </div>
        </div> 
    );
}
 
export default Skills;