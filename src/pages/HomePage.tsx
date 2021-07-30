import postersFilms from '../helpers/postersFilms';

export const HomePage = () => {
  return (
    <>
      <div className="row">
        <h1 className="mb-4 display-3">Star Wars Ships</h1>
      </div>
      <div className="row">
        {postersFilms.map((film) => (
          <div className="col-6 col-lg-4 my-3" key={film.episodeID}>
            <div className="card">
              <div className="card-block">
                <img className="card-img-top" src={film.src} alt={film.src} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
