
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/">Go Back to Home</Link>
    </div>
  );
}

export default PageNotFound;
