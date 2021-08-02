import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { GET_ALL_MOVIES } from '../app/gql/querys';
import { loadingEnd, loadingStart } from '../app/services/ui/actions';
import { filterByEpisodeID } from '../helpers/filterByEpisodeID';

export const useMovies = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useQuery(GET_ALL_MOVIES);
  const [movies, setMovies] = useState<Film[]>([]);

  useEffect(() => {
    dispatch(loadingStart());
  }, [dispatch]);

  useEffect(() => {
    if (!loading && !error) {
      const {
        allFilms: { films: filmsGqlResponse },
      } = data;

      const films = filmsGqlResponse.map((film: Film) => ({
        ...film,
        src: filterByEpisodeID(film.episodeID).src,
      }));
      setMovies(films);
      dispatch(loadingEnd());
      setTimeout(() => dispatch(loadingEnd()), 1000);
    }
  }, [loading, data, error, dispatch]);

  return {
    movies,
  };
};
