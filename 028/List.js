import "./List.css"
import { useHistory, Link } from 'react-router-dom';

const List = (props) => {
    
    const toDos = props.toDos;
    const history = useHistory();
    
    return ( 
        <div className="texts">
            {toDos.map((toDos) => (
                <div className="singular-text">
                    <Link to={ `/toDos/${ toDos.id }` } toDos = { toDos }>
                    <div className="main">
                        <div className="mainAction" >
                            <p>{ toDos.action} </p>
                            <div className="buttons">
                                <button className="button">Complete</button>
                                <button className='button' onClick={ () => {fetch('http://localhost:8000/toDos/' + toDos.id, {method: "DELETE"}).then(() => {history.push("/About")}).then(() => {history.push("/")})}}>Delete</button>                         
                            </div>
                        </div>
                        <div className="deadline">
                            <p>{ toDos.deadline } </p>
                        </div>
                    </div>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default List;