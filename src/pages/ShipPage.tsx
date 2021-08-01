import { useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import { RootState } from '../app/config/store';
import { Loader } from '../components/Loader';
import { useStarship } from '../hooks/useStarship';

export const ShipPage = () => {
  const { shipid = null } = useParams<Params>();
  const { isLoading } = useSelector((state: RootState) => state.ui);

  const { starship, error } = useStarship(shipid);
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <Redirect to="/404" />;
  }
  return (
    <div className="container">
      {starship && (
        <>
          <h1>{starship?.name}</h1>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="bg-black">
                <p className="text-start text-info">
                  <b className="text-uppercase">Model: </b>
                  <span>{starship?.model}</span>
                  <br />
                  <b className="text-uppercase">Manufacturers: </b>
                  <span>{starship?.manufacturers?.join(', ')}</span>
                  <br />

                  <b className="text-uppercase">Cost in Credits: </b>
                  <span>{starship?.costInCredits}</span>
                  <br />

                  <b className="text-uppercase">Length: </b>
                  <span>{starship?.length}</span>
                  <br />

                  <b className="text-uppercase">Max Atmosphering Speed: </b>
                  <span>{starship?.maxAtmospheringSpeed}</span>
                  <br />

                  <b className="text-uppercase">Crew: </b>
                  <span>{starship?.crew}</span>
                  <br />

                  <b className="text-uppercase">Passengers: </b>
                  <span>{starship?.passengers}</span>
                  <br />

                  <b className="text-uppercase">Starship Class: </b>
                  <span>{starship?.starshipClass}</span>
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
