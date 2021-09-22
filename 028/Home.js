import "./Tasks.css"
import List from "./List"
import useFetch from "./useFetch";

const Home = () => {

    const {data: isLoading, error, toDos} = useFetch('http://localhost:8000/toDos')

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