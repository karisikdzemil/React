import { Link } from 'react-router-dom';
function HomePage () {
    return(
       <> <p>Go to the <Link to="/products">list of products</Link></p> <h1>My Home Page</h1></> 
    )
}

export default HomePage