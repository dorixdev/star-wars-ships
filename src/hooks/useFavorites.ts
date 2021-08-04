import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/config/store';
import { GET_ALL_STARSHIPS } from '../app/gql/querys';
import { favStartLoading } from '../app/services/favorites/actions';
import { loadingEnd, loadingStart } from '../app/services/ui/actions';

export const useFavorites = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useQuery(GET_ALL_STARSHIPS);
  const favorites = useSelector((state: RootState) => state.favorites);
  const [favStarships, setFavStarships] = useState([]);

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
      const { allStarships } = data;
      const { starships } = allStarships;

      const mapFavStarships = starships.filter((starship: Starship) => {
        return mapFavorites.includes(starship.id);
      });

      setFavStarships(mapFavStarships);
      setTimeout(() => dispatch(loadingEnd()), 1000);
    }
  }, [loading, data, favorites, error, dispatch]);

  return { favStarships, error };
};
