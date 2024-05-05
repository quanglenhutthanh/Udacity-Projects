import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="notfound">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <br />
        <Link to="/">Back</Link>
      </div>
    </div>
  );
};

export default NotFound;
