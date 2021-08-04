import { FormEvent } from 'react';
import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { RootState } from '../app/config/store';
import { FavoritesGrid } from '../components/favorites/FavoritesGrid';
import { Loader } from '../components/Loader';
import { InputText } from '../components/ui/InputText';
import { useFavorites } from '../hooks/useFavorites';
import { useForm } from '../hooks/useForm';

export const FavoritesPage = () => {
  const { search } = useSelector((state: RootState) => state.ui);
  const initialForm = {
    search,
  };

  const { form, handleInputChange } = useForm(initialForm);

  const { isLoading } = useSelector((state: RootState) => state.ui);
  const { starships } = useSelector((state: RootState) => state.favorites);
  const { favStarships, error } = useFavorites();

  const handleSearch = (evt: FormEvent) => {
    evt.preventDefault();
  };

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
      {starships.length > 0 ? (
        <>
          <form
            onSubmit={handleSearch}
            className="col-12 col-lg-6 row align-items-center justify-content-center mx-auto my-4"
          >
            <div className="col-12">
              <InputText
                icon="search"
                name="search"
                placeholder="Find your favorite starship"
                type="text"
                value={form.search}
                onChange={handleInputChange}
              />
            </div>
          </form>
          <FavoritesGrid favStarships={favStarships} />
        </>
      ) : (
        <div className="no-favorites">
          <strong>Add some favorites to see them here.</strong>
          <Link to="/">View all starships</Link>
        </div>
      )}
    </div>
  );
};
