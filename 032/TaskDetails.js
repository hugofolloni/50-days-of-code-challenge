import { useParams, useHistory } from 'react-router-dom';
import './TaskDetails.css';
import useFetch from "./useFetch";
const TaskDetails = () => {

    const { id } = useParams();
    const {data: isLoading, error, toDos} = useFetch('http://localhost:8000/toDos/' + id)
    const history = useHistory();

    const handleComplete = () => {
        const currentDate = new Date()
        var currentMonth = currentDate.getMonth() + 1
        if(currentMonth < 10){
            currentMonth = '0' + (currentDate.getMonth() + 1)
        }
        const dia = currentDate.getDate() + '/' + currentMonth + '/' + currentDate.getFullYear()
        const taskDone = { toDos, dia }
        fetch('http://localhost:8000/completedTasks', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(taskDone)
        }).then(
            fetch('http://localhost:8000/toDos/' + toDos.id, {method: "DELETE"})
        ).then(
            history.push('/')
        )
    }

    return ( 
        <div className="task-details">
            { isLoading && <div>Loading...</div> }
            { error && <div> {error} </div> }
            { toDos && (
               <div>
                   <h3 className='task-title'> {toDos.action} </h3>
                   <div className='task-description'> {toDos.description} </div>
                   <p className='task-deadline'> {toDos.isCompleted} – Deadline: {toDos.deadline} </p>
                    <div className="buttons-taskpage">
                        <button className="button" onClick={ handleComplete }>Complete</button>
                        <button className='button-taskpage' onClick={ () => { fetch('http://localhost:8000/toDos/' + toDos.id, {method: "DELETE"}).then(() => {history.push("/")})}}>Delete</button>                         
                    </div>
                   
               </div>
            ) }
    
        </div>
     );
}
 
export default TaskDetails;