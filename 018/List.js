const List = (props) => {

    const toDos = props.toDos;
    const setState = props.setState;

    return ( 
        // npx json-server --watch data/db.json --port 8000
        <div className="eachText">
            {toDos.map((toDos) => (
                 <div className="singular-text">
                    <p className="actionName"> {toDos.action} </p>
                    <p className="dateLabel"> {toDos.date.time}</p>
                    <p className='dateLabel'> {toDos.state} </p>
                    <button onClick={ () => {setState("Done")}}>Mudar formato</button>
                 </div>
             ))}
        </div>
     );
}
 
export default List;
