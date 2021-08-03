import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { RootState } from '../app/config/store';
import { Loader } from '../components/Loader';
import { useMovies } from '../hooks/useMovies';

export const HomePage = () => {
  const { isLoading } = useSelector((state: RootState) => state.ui);
  const { movies, error } = useMovies();

  if (error) {
    return <Redirect to="/404" />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    movies && (
      <>
        <div className="row pt-5">
          <h1 className="mb-4 display-3 text-uppercase">Star Wars Ships</h1>
        </div>

        <div className="row mb-5">
          {movies.map((film: Film) => (
            <Link
              to={`/info/${film.id}`}
              className="col-6 col-lg-4 my-3"
              key={film.episodeID}
            >
              <div className="card card-poster h-100">
                <div className="card-block">
                  <img
                    className="card-img-top"
                    src={film.src}
                    alt={film.title}
                    title={film.title}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </>
    )
  );
};
