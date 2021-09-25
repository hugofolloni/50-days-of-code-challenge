import React, { useState, useEffect } from "react"

const CompletedTasks = () => {

    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [completedTasks, setCompletesTasks] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/completedTasks')
        .then(res => {
            if(!res.ok){
                throw Error("Could not fetch!");
            }
            return res.json();
        })
        .then(data => {
            setCompletesTasks(data)
            setLoading(false)
            setError(null)
        })
        .catch(err => {
            setLoading(false);
            setError(err.message);
        })
    }, []);

    return ( 
        <div className="home">
            <h1>Tasks Completas</h1>
            { error && <div> {error} </div> }
            { isLoading && <div> Loading... </div>}
            { completedTasks &&
                <div className="texts">
                    {completedTasks.map((completedTasks) => (
                        <div className="singular-text">
                            <div className="main">
                                <div className="mainAction" >
                                    <p>{ completedTasks.toDos.action } </p>
                                </div>
                                <div className="deadline">
                                    <p>Deadline: {completedTasks.toDos.deadline }</p>
                                    <p>Entrega: { completedTasks.dia } </p>
                                </div>
                            </div>
                        </div>
                    ))} 
                </div>
        }
        </div>
    );
}
 
export default CompletedTasks;