import { useEffect, useState } from "react";
import "./Tasks.css"
import List from "./List"

const Home = () => {

    const [isLoading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    const[toDos, setToDos] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/toDos')
        .then(res => {
            if(!res.ok){
                throw Error("Could not fetch!");
            }
            return res.json();
        })
        .then(data => {
            console.log(data)
            setToDos(data)
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
            <div className="currentTasks">
                <h1>Tasks Atuais</h1>
                { error && <div> {error} </div> }
                { isLoading && <div> Loading... </div>}
                { toDos && <List toDos = { toDos }/>}
            </div>
        </div>
     );
}
 
export default Home;