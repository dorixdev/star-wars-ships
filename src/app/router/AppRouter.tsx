import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';
import { FavoritesPage } from '../../pages/FavoritesPage';
import { HomePage } from '../../pages/HomePage';
import { LoginPage } from '../../pages/LoginPage';
import { MoviePage } from '../../pages/MoviePage';
import { RegisterPage } from '../../pages/RegisterPage';
import { ShipPage } from '../../pages/ShipPage';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  const isLoggedIn: boolean = false;
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/:episodeid" component={MoviePage} />
          <Route exact path="/:episodeid/:shipid" component={ShipPage} />
          <PublicRoute
            exact
            path="/login"
            component={LoginPage}
            isLoggedIn={isLoggedIn}
          />
          <PublicRoute
            exact
            path="/register"
            component={RegisterPage}
            isLoggedIn={isLoggedIn}
          />
          <PrivateRoute
            exact
            path="/favorites"
            component={FavoritesPage}
            isLoggedIn={isLoggedIn}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
