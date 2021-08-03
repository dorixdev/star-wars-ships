import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import { RootState } from '../app/config/store';
import { favStartRemove } from '../app/services/favorites/actions';
import { Loader } from '../components/Loader';
import { ShipInfo } from '../components/ships/ShipInfo';
import { generateSlug } from '../helpers/generateSlug';
import { romanize } from '../helpers/romanize';
import { useMovie } from '../hooks/useMovie';

export const MoviePage = () => {
  const dispatch = useDispatch();
  const { episodeid = null } = useParams<Params>();
  const { isLoading } = useSelector((state: RootState) => state.ui);
  const { movie, error, starships } = useMovie(episodeid);

  if (error) {
    return <Redirect to="/404" />;
  }

  if (isLoading) {
    return <Loader />;
  }

  const handleDelete = () => {
    dispatch(favStartRemove());
  };

  return (
    <div className="container py-4">
      {movie && starships && (
        <>
          <div className="py-4 mb-lg-4">
            <h4>Episode {romanize(movie.episodeID)}</h4>
            <h1>
              <span className="text-uppercase">{movie.title}</span>
            </h1>
          </div>
          <div className="row align-items-baseline">
            <div className="col-12 col-lg-3 sticky-lg-top py-4">
              <h6 className="text-light">
                <i className="fas fa-rocket me-2"></i>
                Starships
              </h6>
              <div
                className="list-group d-flex flex-row flex-lg-column overflow-auto"
                id="list-tab"
                role="tablist"
              >
                {starships.map((starship, index) => (
                  <a
                    key={starship.id}
                    className={`list-group-item list-group-item-action d-flex align-items-center justify-content-center ${
                      index === 0 && 'active'
                    }`}
                    id={`list-${generateSlug(starship.name)}-list`}
                    data-bs-toggle="list"
                    href={`#list-${generateSlug(starship.name)}`}
                    role="tab"
                    aria-controls={`list-${generateSlug(starship.name)}`}
                  >
                    <span className="small">{starship.name}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="col-12 col-lg-9">
              <div className="tab-content" id="nav-tabContent">
                {starships.map((starship, index) => (
                  <div
                    key={starship.id}
                    className={`tab-pane fade ${index === 0 && 'show active'}`}
                    id={`list-${generateSlug(starship.name)}`}
                    role="tabpanel"
                    aria-labelledby={`list-${generateSlug(starship.name)}-list`}
                  >
                    <ShipInfo starship={starship} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
