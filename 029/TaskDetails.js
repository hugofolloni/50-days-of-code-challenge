import { useParams, Link, useHistory } from 'react-router-dom';
import './TaskDetails.css';
import useFetch from "./useFetch";
<Link to='/pomodoro'>Iniciar Pomodoro</Link>
const TaskDetails = () => {

    const { id } = useParams();
    const {data: isLoading, error, toDos} = useFetch('http://localhost:8000/toDos/' + id)
    const history = useHistory();

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
                        <button className="button-taskpage">Complete</button>
                        <button className='button-taskpage' onClick={ () => { fetch('http://localhost:8000/toDos/' + toDos.id, {method: "DELETE"}).then(() => {history.push("/")})}}>Delete</button>                         
                    </div>
                   
               </div>
            ) }
    
        </div>
     );
}
 
export default TaskDetails;