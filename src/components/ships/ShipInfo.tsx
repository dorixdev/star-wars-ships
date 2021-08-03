import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/config/store';
import postersFilms from '../../helpers/postersFilms';
import { ShipInfoItem } from './ShipInfoItem';
import starshipImg from '../../images/starship.png';
import {
  favStartAddNew,
  favStartRemove,
} from '../../app/services/favorites/actions';

interface Props {
  starship: Starship;
}

export const ShipInfo = ({ starship }: Props) => {
  const dispatch = useDispatch();
  const { uid } = useSelector((state: RootState) => state.auth);

  const handleDelete = (starship: Starship) => {
    dispatch(favStartRemove(starship));
  };
  const handleAddNew = (starship: Starship) => {
    dispatch(favStartAddNew(starship));
  };
  return (
    <>
      <div className="row align-items-start justify-content-center">
        <div className="col-12 col-lg-6 col-xl-5 position-relative">
          {!!uid &&
            (starship.favorite ? (
              <button
                type="button"
                className="btn position-absolute"
                onClick={() => handleDelete(starship)}
              >
                <i className="fas fa-star text-gold fa-2x"></i>
              </button>
            ) : (
              <button
                type="button"
                className="btn position-absolute"
                onClick={() => handleAddNew(starship)}
              >
                <i className="far fa-star text-gold fa-2x"></i>
              </button>
            ))}
          <h4 className="text-capitalize mt-3 mt-lg-0">{starship.name}</h4>
          <img className="img-fluid" src={starshipImg} alt={starship.name} />
        </div>
        <ul className="col-12 col-lg-6 col-xl-7 list-group list-group-flush text-start">
          <ShipInfoItem label="Name" text={starship.name} />
          <ShipInfoItem label="Model" text={starship.model} />
          <ShipInfoItem label="Manufacturers" text={starship.manufacturers} />
          <ShipInfoItem label="Cost in Credits" text={starship.costInCredits} />
          <ShipInfoItem label="Length" text={starship.length} />
          <ShipInfoItem
            label="Max Atmosphering Speed"
            text={starship.maxAtmospheringSpeed}
          />
          <ShipInfoItem label="Crew" text={starship.crew} />
          <ShipInfoItem label="Passengers" text={starship.passengers} />
          <ShipInfoItem label="Starship Class" text={starship.starshipClass} />
        </ul>
      </div>

      <div className="container mt-4">
        <h6>Appearances in other films:</h6>
        <div className="row justify-content-around">
          {starship.filmConnection.films.map(({ title, id, episodeID }) => (
            <div className="col-6 col-lg-2 card-poster" key={id}>
              <img
                src={
                  postersFilms.find((poster) => poster.episodeID === episodeID)
                    ?.src
                }
                alt={title}
                className="img-fluid mb-3"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
