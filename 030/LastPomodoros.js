import { useState, useEffect } from 'react'

const LastPomodoros = () => {

    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [pomodoros, setPomodoros] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/pomodoros')
        .then(res => {
            if(!res.ok){
                throw Error("Could not fetch!");
            }
            return res.json();
        })
        .then(data => {
            setPomodoros(data)
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
            <h1>Pomodoros Anteriores</h1>
            { error && <div> {error} </div> }
            { isLoading && <div> Loading... </div>}
            { pomodoros &&
                <div className="texts">
                {pomodoros.map((pomodoros) => (
                    <div className="singular-text">
                        <div className="main">
                            <div className="mainAction" >
                                <p>{ pomodoros.description } </p>
                            </div>
                            <div className="deadline">
                                <p>Task: {pomodoros.action }</p>
                                <p>Data: { pomodoros.dia } </p>
                            </div>
                        </div>
                    </div>
                ))} 
              </div>
            }
        </div>
     );
}
 
export default LastPomodoros;