import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { GET_ALL_MOVIES } from '../app/gql/querys';
import { loadingEnd, loadingStart } from '../app/services/ui/actions';
import postersFilms from '../helpers/postersFilms';

export const useMovies = () => {
  const dispatch = useDispatch();
  const { loading, data } = useQuery(GET_ALL_MOVIES);
  const [movies, setMovies] = useState<Film[]>([]);

  useEffect(() => {
    dispatch(loadingStart());
    if (!loading) {
      const films = data?.allFilms.films.map((film: Film) => ({
        ...film,
        src: postersFilms
          .filter((poster: Poster) => poster.episodeID === film.episodeID)
          .map((poster: Poster) => poster.src)[0],
      }));
      setMovies(films);
      dispatch(loadingEnd());
    }
  }, [loading, data, dispatch]);

  return {
    movies,
  };
};
