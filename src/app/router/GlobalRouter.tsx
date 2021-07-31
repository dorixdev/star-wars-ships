import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ErrorPage } from '../../pages/ErrorPage';
import { FavoritesPage } from '../../pages/FavoritesPage';
import { HomePage } from '../../pages/HomePage';
import { MoviePage } from '../../pages/MoviePage';
import { ShipPage } from '../../pages/ShipPage';
import { PrivateRoute } from './PrivateRoute';

export const GlobalRouter = () => {
  const isLoggedIn: boolean = false;
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/404" component={ErrorPage} />
        <Route exact path="/info/:episodeid" component={MoviePage} />
        <Route exact path="/info/:episodeid/:shipid" component={ShipPage} />
        <PrivateRoute
          exact
          path="/favorites"
          component={FavoritesPage}
          isLoggedIn={isLoggedIn}
        />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};
