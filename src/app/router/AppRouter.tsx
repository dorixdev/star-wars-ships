import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';
import { Loader } from '../../components/Loader';
import { useLogged } from '../../hooks/useLogged';

import { AuthRouter } from './AuthRouter';
import { GlobalRouter } from './GlobalRouter';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  const { checking, uid } = useLogged();

  if (checking) {
    return <Loader />;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute path="/auth" component={AuthRouter} isLoggedIn={!!uid} />
          <Route path="/" component={GlobalRouter} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
