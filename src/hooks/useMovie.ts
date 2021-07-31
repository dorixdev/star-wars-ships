import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { GET_MOVIE_WITH_STARSHIPS_INFO } from '../app/gql/querys';
import postersFilms from '../helpers/postersFilms';

export const useMovie = (episodeid: string) => {
  const { loading, data, error } = useQuery(GET_MOVIE_WITH_STARSHIPS_INFO, {
    variables: {
      id: episodeid,
    },
  });

  const [movie, setMovie] = useState({} as Film);
  const [starships, setStarships] = useState([] as Starship[]);

  useEffect(() => {
    if (!loading && !error) {
      const { film } = data;
      setMovie({
        id: film.id,
        title: film.title,
        episodeID: film.episodeID,
        src: postersFilms.filter(
          (poster: Poster) => poster.episodeID === film.episodeID
        )[0].src,
      });
    } else {
      setMovie({} as Film);
    }
  }, [loading, data, error]);

  useEffect(() => {
    if (!loading && !error) {
      const { film } = data;
      const { starshipConnection } = film;
      const { starships } = starshipConnection;

      setStarships([...starships]);
    }
  }, [loading, data, error]);

  console.log(starships);

  return {
    loading,
    movie,
    error,
    starships,
  };
};
