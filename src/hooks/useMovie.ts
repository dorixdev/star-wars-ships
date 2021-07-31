import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { GET_MOVIE_WITH_STARSHIPS_INFO } from '../app/gql/querys';
import { loadingEnd, loadingStart } from '../app/services/ui/actions';
import postersFilms from '../helpers/postersFilms';

export const useMovie = (episodeid: string) => {
  const dispatch = useDispatch();
  const { loading, data, error } = useQuery(GET_MOVIE_WITH_STARSHIPS_INFO, {
    variables: {
      id: episodeid,
    },
  });

  const [movie, setMovie] = useState({} as Film);
  const [starships, setStarships] = useState([] as Starship[]);

  useEffect(() => {
    dispatch(loadingStart());
    if (!loading && !error) {
      const { film } = data;
      const { starshipConnection } = film;
      const { starships } = starshipConnection;

      setMovie({
        ...film,
        src: postersFilms.filter(
          (poster: Poster) => poster.episodeID === film.episodeID
        )[0].src,
      });

      setStarships([...starships]);
      setTimeout(() => dispatch(loadingEnd()), 2000);
    } else {
      setMovie({} as Film);
      setTimeout(() => dispatch(loadingEnd()), 2000);
    }
  }, [loading, data, error, dispatch]);

  return {
    loading,
    movie,
    error,
    starships,
  };
};
