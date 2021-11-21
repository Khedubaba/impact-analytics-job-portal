import { Link } from 'react-router-dom';

const Navigate = () => {
    return (
        <nav className="navbar">
            <h1>Job </h1> <h2>Dhundo</h2>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/shortlisted">Shortlisted</Link>
                <Link to="/rejected">Rejected</Link>
              
            </div>
        </nav>
    );
}
 
export default Navigate;