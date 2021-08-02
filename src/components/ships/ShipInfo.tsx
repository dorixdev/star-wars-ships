import postersFilms from '../../helpers/postersFilms';

interface Props {
  starship: Starship;
}

export const ShipInfo = ({ starship }: Props) => {
  return (
    <>
      <h2 className="mt-3 mt-lg-0">Starship info</h2>
      <ul className="list-group list-group-flush text-start">
        <li className="list-group-item text-info">
          <b className="text-uppercase">Name: </b>
          <span className="ms-3">{starship.name}</span>
        </li>
        <li className="list-group-item text-info">
          <b className="text-uppercase">Model: </b>
          <span className="ms-3">{starship.model}</span>
        </li>
        <li className="list-group-item text-info">
          <b className="text-uppercase">Manufacturers: </b>
          <span className="ms-3">{starship.manufacturers.join(', ')}</span>
        </li>
        <li className="list-group-item text-info">
          <b className="text-uppercase">Cost in Credits: </b>
          <span className="ms-3">
            {starship.costInCredits ? starship.costInCredits : 'unknow'}
          </span>
        </li>
        <li className="list-group-item text-info">
          <b className="text-uppercase">Length: </b>
          <span className="ms-3">{starship.length}</span>
        </li>
        <li className="list-group-item text-info">
          <b className="text-uppercase">Max Atmosphering Speed: </b>
          <span className="ms-3">
            {starship.maxAtmospheringSpeed
              ? starship.maxAtmospheringSpeed
              : 'unknow'}
          </span>
        </li>
        <li className="list-group-item text-info">
          <b className="text-uppercase">Crew: </b>
          <span className="ms-3">{starship.crew}</span>
        </li>
        <li className="list-group-item text-info">
          <b className="text-uppercase">Passengers: </b>
          <span className="ms-3">{starship.passengers}</span>
        </li>
        <li className="list-group-item text-info">
          <b className="text-uppercase">Starship Class: </b>
          <span className="ms-3">{starship.starshipClass}</span>
        </li>
      </ul>

      <div className="container mt-4">
        <h6>Appearances in other films:</h6>
        <div className="row justify-content-around">
          {starship.filmConnection.films.map(({ title, id, episodeID }) => (
            <div className="col-6 col-lg-4 card-poster" key={id}>
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
