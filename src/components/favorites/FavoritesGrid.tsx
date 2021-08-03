import { FavoritesGridItem } from './FavoritesGridItem';

interface Props {
  favStarships: Array<Starship>;
}

export const FavoritesGrid = ({ favStarships }: Props) => {
  return (
    <div className="row">
      {favStarships.map((starship: Starship) => (
        <FavoritesGridItem key={starship.id} starship={starship} />
      ))}
    </div>
  );
};
