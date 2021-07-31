import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { GET_ALL_MOVIES } from '../app/gql/querys';
import postersFilms from '../helpers/postersFilms';

export const useMovies = () => {
  const { loading, data } = useQuery(GET_ALL_MOVIES);
  const [movies, setMovies] = useState<Film[]>([]);

  useEffect(() => {
    if (!loading) {
      const films = data?.allFilms.films.map((film: Film) => ({
        ...film,
        src: postersFilms
          .filter((poster: Poster) => poster.episodeID === film.episodeID)
          .map((poster: Poster) => poster.src)[0],
      }));
      setMovies(films);
    }
  }, [loading, data]);

  return {
    loading,
    movies,
  };
};
