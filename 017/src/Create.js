import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('Hugo Folloni');
    const [isLoading, setLoading] = useState(false)
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, content, author };

        setLoading(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        })
        .then(() => {
            history.push("/");
        })
    }

    return ( 
        <div className="create">
            <h2>Add a New Text</h2>
            <form onSubmit={handleSubmit}>
                <label>Text Title:</label>
                <input type="text" required value={ title } onChange={(e) => setTitle(e.target.value)}/>
                <label>Text body:</label>
                <textarea required value={ content } onChange={(e) => setContent(e.target.value)}/>
                <label>Text author:</label>
                <select value = { author } onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Hugo Folloni">Hugo Folloni</option>
                    <option value="huey">huey</option>
                </select>
                { !isLoading && <button>Add text</button> }
                { isLoading && <button disabled>Adding text...</button>}
            </form>
        </div>

     );
}
 
export default Create;