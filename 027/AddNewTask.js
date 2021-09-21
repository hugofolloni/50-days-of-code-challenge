import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

const AddNewTask = () => {

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const deadline = finish.split('-').reverse().join('/');
        const singleTask = { action, deadline };
        fetch('http://localhost:8000/ToDos', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(singleTask)
        })
        .then(() => {
            console.log("Task added", singleTask)
            history.push('/')
        })
    }

    const [action, setAction] = useState(null);

    const [finish, setFinish] = useState(null);

    return ( 
        <div className="posts">
            <div className="toDoInput">
                <div className="task-div">
                    <h3>Task to do:</h3>
                    <input type="text" onChange={(e) => setAction(e.target.value)} />
                </div>
                <div className="finish-task">
                    <h3>Finish until:</h3>
                    <input type="date" onChange={(e) => setFinish(e.target.value)}/>    
                </div>
                <button onClick={ handleSubmit } className='button-submit'>Do it!</button>
            </div>
        </div>
        );
}
 
export default AddNewTask;