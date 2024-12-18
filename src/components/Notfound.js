import { Link } from "react-router-dom";

const Notfound = () => {
    return ( 
        <div className="not-found">
            <h1>404</h1>
            <p>Page not found, that url does not exist</p>
            <Link to="/"><button>Back to Home</button></Link>
        </div>
     );
}
 
export default Notfound;