import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { GET_MOVIE_WITH_STARSHIPS_INFO } from '../app/gql/querys';
import { loadingEnd, loadingStart } from '../app/services/ui/actions';
import { filterByEpisodeID } from '../helpers/filterByEpisodeID';

export const useMovie = (episodeid: string | null) => {
  const dispatch = useDispatch();
  const { loading, data, error } = useQuery(GET_MOVIE_WITH_STARSHIPS_INFO, {
    variables: {
      filmID: episodeid,
    },
  });

  const [movie, setMovie] = useState<Film | null>(null);
  const [starships, setStarships] = useState<Starship[] | null>(null);

  useEffect(() => {
    dispatch(loadingStart());
  }, [dispatch]);

  useEffect(() => {
    if (!loading && !error) {
      const { film } = data;
      const {
        starshipConnection: { starships },
      } = film;

      setMovie({
        ...film,
        src: filterByEpisodeID(film.episodeID).src,
      });

      setStarships([...starships]);
      setTimeout(() => dispatch(loadingEnd()), 2000);
    }
  }, [loading, data, error, dispatch]);

  return {
    movie,
    error,
    starships,
  };
};
