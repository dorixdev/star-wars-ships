import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/config/store';
import { FavoritesGridItem } from './FavoritesGridItem';

interface Props {
  favStarships: Array<Starship>;
}

export const FavoritesGrid = ({ favStarships }: Props) => {
  const { search } = useSelector((state: RootState) => state.ui);
  const [filteredStarshipByName, setFilteredStarshipByName] =
    useState<Starship[]>();

  useEffect(() => {
    if (search.length > 0) {
      const filteredFavStarships = favStarships.filter((starship: Starship) =>
        starship.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredStarshipByName(filteredFavStarships);
    } else {
      const filteredFavStarships = favStarships;
      setFilteredStarshipByName(filteredFavStarships);
    }
  }, [favStarships, search]);

  return (
    <div className="row">
      {filteredStarshipByName?.map((starship: Starship) => (
        <FavoritesGridItem key={starship.id} starship={starship} />
      ))}
    </div>
  );
};
