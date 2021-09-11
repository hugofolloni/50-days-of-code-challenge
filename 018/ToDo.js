
import React, { useState, useEffect } from "react";
import List from "./List"

const ToDo = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const newDate = new Date()
        
        const day = newDate.toLocaleDateString('en-GB');

        const hour = String(newDate.getHours()) + ':' + String(newDate.getMinutes())

        const time = day + ' ' + hour

        console.log(time)

        setDate({time});

        const uniqueToDo = { action, state, date };

        fetch('http://localhost:8000/ToDos', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(uniqueToDo)
        })
        .then(() => {
            console.log(uniqueToDo)
        })
    }

    useEffect(() => {
        fetch('http://localhost:8000/ToDos') /* npx json-server --watch data/db.json --port 8000 */
        .then(res => {
            if(!res.ok){
                throw Error("could not fetch!");
            }
            return res.json();
        })
        .then(data => {
            console.log(data);
            setToDos(data);
        })
    }, []);

    const [action, setAction] = useState("")

    const [state, setState] = useState("Pendent")

    const [date, setDate] = useState("")

    const [toDos, setToDos] = useState(null)


    return ( 
        <div className="posts">
            <div className="toDoInput">
                <input type="text" onChange={(e) => setAction(e.target.value)} />
                <button onClick={ handleSubmit }>Do it!</button>
                {toDos && <List toDos = { toDos } setState = { setState } />}
            </div>
        </div>
     );
}
 
export default ToDo;