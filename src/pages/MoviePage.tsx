import { useSelector } from 'react-redux';
import { Link, Redirect, useParams } from 'react-router-dom';
import { RootState } from '../app/config/store';
import { Loader } from '../components/Loader';
import { generateSlug } from '../helpers/generateSlug';
import { romanize } from '../helpers/romanize';
import { useMovie } from '../hooks/useMovie';
import posters from '../helpers/postersFilms';

export const MoviePage = () => {
  const { episodeid = null } = useParams<Params>();
  const { isLoading } = useSelector((state: RootState) => state.ui);

  const { movie, error, starships } = useMovie(episodeid);

  if (error) {
    return <Redirect to="/404" />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container py-4">
      {movie && starships && (
        <>
          <div className="py-4 bg-dark mb-4">
            <h4>Episode {romanize(movie.episodeID)}</h4>
            <h1>
              <span className="text-uppercase">{movie.title}</span>
            </h1>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="list-group" id="list-tab" role="tablist">
                {starships.map((starship, index) => (
                  <a
                    key={starship.id}
                    className={`list-group-item list-group-item-action ${
                      index === 0 && 'active'
                    }`}
                    id={`list-${generateSlug(starship.name)}-list`}
                    data-bs-toggle="list"
                    href={`#list-${generateSlug(starship.name)}`}
                    role="tab"
                    aria-controls={`list-${generateSlug(starship.name)}`}
                  >
                    <span className="lead">{starship.name}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="tab-content" id="nav-tabContent">
                {starships.map((starship, index) => (
                  <div
                    key={starship.id}
                    className={`tab-pane fade ${index === 0 && 'show active'}`}
                    id={`list-${generateSlug(starship.name)}`}
                    role="tabpanel"
                    aria-labelledby={`list-${generateSlug(starship.name)}-list`}
                  >
                    <h2 className="py-4">{starship.name}</h2>
                    <p className="text-start text-info">
                      <b className="text-uppercase">Model: </b>
                      <span className="ms-3">{starship?.model}</span>
                      <br />

                      <b className="text-uppercase">Manufacturers: </b>
                      <span className="ms-3">
                        {starship?.manufacturers?.join(', ')}
                      </span>
                      <br />

                      <b className="text-uppercase">Cost in Credits: </b>
                      <span className="ms-3">
                        {starship?.costInCredits
                          ? starship.costInCredits
                          : 'unknow'}
                      </span>
                      <br />

                      <b className="text-uppercase">Length: </b>
                      <span className="ms-3">{starship?.length}</span>
                      <br />

                      <b className="text-uppercase">Max Atmosphering Speed: </b>
                      <span className="ms-3">
                        {starship?.maxAtmospheringSpeed
                          ? starship.maxAtmospheringSpeed
                          : 'unknow'}
                      </span>
                      <br />

                      <b className="text-uppercase">Crew: </b>
                      <span className="ms-3">{starship?.crew}</span>
                      <br />

                      <b className="text-uppercase">Passengers: </b>
                      <span className="ms-3">{starship?.passengers}</span>
                      <br />

                      <b className="text-uppercase">Starship Class: </b>
                      <span className="ms-3">{starship?.starshipClass}</span>

                      <br />
                    </p>
                    <div className="container">
                      <h6>Appearances in other films:</h6>
                      <div className="row justify-content-around">
                        {starship.filmConnection.films.map(
                          ({ title, id, episodeID }) => (
                            <Link
                              to={`/info/${id}`}
                              className="col-6 col-lg-4 card-poster"
                              key={id}
                            >
                              <img
                                src={
                                  posters.find(
                                    (poster) => poster.episodeID === episodeID
                                  )?.src
                                }
                                alt={title}
                                className="img-fluid"
                              />
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="row justify-content-center d-none">
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
                    className="list-group-item list-group-item-black list-group-item-action"
                    key={star.id}
                    to={`/info/${episodeid}/${star.id}`}
                  >
                    <h4>{star.name}</h4>
                    <p className="text-gold">
                      <span
                        className="lead"
                        style={{ textShadow: '1px 1px 5px #000' }}
                      >
                        {star.model}
                      </span>
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
