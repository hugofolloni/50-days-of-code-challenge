import React, { useState, useEffect} from "react";
import TextList from "./TextList";

const Home = () => {

    const [isLoading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/blogs') /* npx json-server --watch data/db.json --port 8000 */
        .then(res => {
            if(!res.ok){
                throw Error("could not fetch!");
            }
            return res.json();
        })
        .then(data => {
            console.log(data);
            setBlogs(data)
            setLoading(false)
            setError(null)
        })
        .catch(err => {
            setLoading(false);
            setError(err.message)
        })
    }, []);


    return (
        <div className="home-body">
            <div className="mainContent">
                <h2 className='heading'>My texts</h2>
                { error && <div> { error } </div>}
                { isLoading && <div> Loading... </div>}
                { blogs && <TextList blogs={ blogs }/>}
            </div>
      </div>
      );
}
 
export default Home;