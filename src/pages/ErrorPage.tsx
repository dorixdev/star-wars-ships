import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <div className="container">
      <div className="row align-items-center justify-content-center mt-5">
        <div className="col">
          <h1>Error</h1>
          <img
            src="https://i.giphy.com/media/czDfnRgRWeDCw/giphy.webp"
            alt=""
            className="img-fluid"
          />
          <p className="mt-5">
            <Link to="/">Back to home</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
