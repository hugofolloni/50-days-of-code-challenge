import React, { useState } from "react";

const AddNewTask = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const singleTask = { action, finish };
        fetch('http://localhost:8000/ToDos', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(singleTask)
        })
        .then(() => {
            console.log("Task added", singleTask)
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
                    <input type="text" onChange={(e) => setFinish(e.target.value)}/>    
                </div>
                <button onClick={ handleSubmit } className='button-submit'>Do it!</button>
            </div>
        </div>
        );
}
 
export default AddNewTask;