import { Redirect, Route, Switch } from 'react-router-dom';
import { Loader } from '../../components/Loader';
import { Navbar } from '../../components/ui/Navbar';
import { useLogged } from '../../hooks/useLogged';
import { ErrorPage } from '../../pages/ErrorPage';
import { FavoritesPage } from '../../pages/FavoritesPage';
import { HomePage } from '../../pages/HomePage';
import { MoviePage } from '../../pages/MoviePage';
import { ShipPage } from '../../pages/ShipPage';
import { PrivateRoute } from './PrivateRoute';

export const GlobalRouter = () => {
  const { checking, uid } = useLogged();

  if (checking) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <div className="container justify-content-center text-center text-warning">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/404" component={ErrorPage} />
          <Route exact path="/info/:episodeid" component={MoviePage} />
          <Route exact path="/info/:episodeid/:shipid" component={ShipPage} />
          <PrivateRoute
            exact
            path="/favorites"
            component={FavoritesPage}
            isLoggedIn={!!uid}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </>
  );
};
