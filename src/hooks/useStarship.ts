import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { GET_MOVIE_WITH_ALL_STARSHIPS_INFO } from '../app/gql/querys';
import { loadingEnd, loadingStart } from '../app/services/ui/actions';

export const useStarship = (shipid: string | null) => {
  const dispatch = useDispatch();
  const { loading, data, error } = useQuery(GET_MOVIE_WITH_ALL_STARSHIPS_INFO, {
    variables: {
      shipID: shipid,
    },
  });
  const [starship, setStarship] = useState<Starship | null>(null);

  useEffect(() => {
    dispatch(loadingStart());
  }, [dispatch]);

  useEffect(() => {
    if (!loading && !error) {
      const { starship } = data;
      console.log(starship);

      setStarship({
        ...starship,
      });
    }
    setTimeout(() => dispatch(loadingEnd()), 2000);
  }, [loading, data, error, dispatch]);

  return {
    starship,
    error,
  };
};
