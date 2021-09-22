import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

const AddNewTask = () => {

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const deadline = finish.split('-').reverse().join('/');
        const isCompleted = "To do!"
        const singleTask = { action, description, deadline, isCompleted };
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

    const [description, setDescription] = useState(null);

    const [finish, setFinish] = useState(null);

    // O REQUIRED NÃO FUNCIONA, POIS QUANDO CLICO NO BOTAO ELE RODA A FUNÇÃO DIRETO SEM LIGAR PROS INPUTS, SO PEGANDO O VALOR.
    return ( 
        <div className="posts">
            <div className="toDoInput">
                <div className="task-div">
                    <h3>Task to do:</h3>
                    <input  className='input-task' type="text" onChange={(e) => setAction(e.target.value)} required/>
                </div>
                <div className="description-div">
                    <h3>Description:</h3>
                    <textarea className='input-task' rows='6' onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="finish-task">
                    <h3>Finish until:</h3>
                    <input  className='input-task' type="date" onChange={(e) => setFinish(e.target.value)} required/>    
                </div>
                <button onClick={ handleSubmit } className='button-submit'>Do it!</button> 
            </div>
        </div>
        );
}
 
export default AddNewTask;