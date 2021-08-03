import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RootState } from '../app/config/store';
import { FavoritesGrid } from '../components/favorites/FavoritesGrid';
import { Loader } from '../components/Loader';
import { useFavorites } from '../hooks/useFavorites';

export const FavoritesPage = () => {
  const { isLoading } = useSelector((state: RootState) => state.ui);
  const { favStarships, error } = useFavorites();

  if (error) {
    return <Redirect to="/404" />;
  }

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="container py-4">
      <div className="row align-items-center justify-content-center">
        <div className="col-md-12">
          <h1>Favorites</h1>
        </div>
      </div>
      <FavoritesGrid favStarships={favStarships} />
    </div>
  );
};
