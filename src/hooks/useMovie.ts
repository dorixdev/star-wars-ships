import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/config/store';
import { GET_MOVIE_WITH_STARSHIPS_INFO } from '../app/gql/querys';
import { favStartLoading } from '../app/services/favorites/actions';
import { loadingEnd, loadingStart } from '../app/services/ui/actions';
import { filterByEpisodeID } from '../helpers/filterByEpisodeID';

export const useMovie = (episodeid: string | null) => {
  const dispatch = useDispatch();
  const { loading, data, error } = useQuery(GET_MOVIE_WITH_STARSHIPS_INFO, {
    variables: {
      filmID: episodeid,
    },
  });
  const favorites = useSelector((state: RootState) => state.favorites);

  const [movie, setMovie] = useState<Film | null>(null);
  const [starships, setStarships] = useState<Starship[] | null>(null);

  useEffect(() => {
    dispatch(loadingStart());
    dispatch(favStartLoading());
  }, [dispatch]);

  useEffect(() => {
    const { starships: favStarships } = favorites;
    const mapFavorites = favStarships.map(
      (fav: FavoriteStarship) => fav.starshipID
    );

    if (!loading && !error) {
      const { film } = data;
      const {
        starshipConnection: { starships },
      } = film;

      const mapStarships = starships.map((starship: Starship): Starship => {
        return {
          ...starship,
          favorite: mapFavorites.includes(starship.id),
        };
      });

      setMovie({
        ...film,
        src: filterByEpisodeID(film.episodeID).src,
      });

      setStarships(mapStarships);
      setTimeout(() => dispatch(loadingEnd()), 1000);
    }
  }, [loading, data, error, favorites, dispatch]);

  return {
    movie,
    error,
    starships,
  };
};
