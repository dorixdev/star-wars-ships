import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <div>
      <h1>Error</h1>
      <p>Something went wrong. Please try again later.</p>
      <Link to="/">Back to home</Link>
    </div>
  );
};
