import { Link } from "react-router-dom"

const NotFound = () => {
    return (  
        <div className="notFound">
            <h2>Sorry</h2>
            <h3>We cannot find that for you! :c</h3>
            <Link to="/" className='ordinaryButton'>Back to Homepage</Link>
        </div>
    );
}
 
export default NotFound;