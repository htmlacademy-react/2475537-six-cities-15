import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="page__main page__main--notFound">
      <div className="container">
        <h1>404. Not found</h1>
        <Link to="/">Go to main page</Link>
      </div>
    </main>);
}

export default NotFound;
