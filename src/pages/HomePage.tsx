import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../app/config/store';
import { Loader } from '../components/Loader';
import { useMovies } from '../hooks/useMovies';

export const HomePage = () => {
  const { movies } = useMovies();

  const { isLoading } = useSelector((state: RootState) => state.ui);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="row">
        <h1 className="mb-4 display-3">Star Wars Ships</h1>
      </div>

      <div className="row">
        {movies.map((film: Film) => (
          <Link
            to={`/info/${film.id}`}
            className="col-6 col-lg-4 my-3"
            key={film.episodeID}
          >
            <div className="card h-100">
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
  );
};
