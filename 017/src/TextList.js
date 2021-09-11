import { useHistory } from 'react-router-dom';

const TextList = (props) => {
    const blogs = props.blogs;
    const history = useHistory();

    return (
        <div className="text">
             {blogs.map((blogs) => (
                 <div className="singular-text">
                     <div className="topPost">
                        <h2>{ blogs.title }</h2>
                        <button onClick={ () => {
                            fetch('http://localhost:8000/blogs/' + blogs.id, {method: "DELETE"}).then(() => {history.push("/About")}).then(() => {history.push("/")})}}>X</button>
                     </div>
                    <p> {blogs.content} </p>
                    <div className="author-name">
                        <p>Created by: { blogs.author } </p>
                    </div>
                 </div>
             ))}
        </div>
      );
}
 
export default TextList;