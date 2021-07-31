import { useSelector } from 'react-redux';
import { Link, Redirect, useParams } from 'react-router-dom';
import { RootState } from '../app/config/store';
import { Loader } from '../components/Loader';
import { useMovie } from '../hooks/useMovie';

export const MoviePage = () => {
  const { episodeid = '' } = useParams<Params>();
  const { isLoading } = useSelector((state: RootState) => state.ui);

  const { movie, error, starships } = useMovie(episodeid);

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <Redirect to="/404" />;
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <h1 className="py-4">{movie.title}</h1>
        <div className="col-6 col-lg-4 pb-4 pb-lg-0">
          <img
            src={movie.src}
            alt={movie.title}
            title={movie.title}
            className="img-fluid border border-light "
          />
        </div>
        <div className="col-12 col-md-10 col-lg-8">
          <div className="list-group">
            {starships.map((star: Starship) => (
              <Link
                className="list-group-item list-group-item-dark list-group-item-action"
                key={star.id}
                to={`/info/${episodeid}/${star.id}`}
              >
                <h4>{star.name}</h4>
                <p>
                  <strong>{star.model}</strong>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
