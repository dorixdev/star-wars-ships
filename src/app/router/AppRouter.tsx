import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { GlobalRouter } from './GlobalRouter';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  const isLoggedIn: boolean = false;

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={GlobalRouter} />
          <PublicRoute
            path="/auth"
            component={AuthRouter}
            isLoggedIn={isLoggedIn}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
