import { Redirect, Route } from 'react-router';
import { RouteProps } from 'react-router-dom';

interface Props extends RouteProps {
  isLoggedIn: boolean;
  component: React.ComponentType<any>;
}

export const PrivateRoute = ({
  isLoggedIn,
  component: Component,
  ...rest
}: Props) => {
  return (
    <Route
      {...rest}
      component={(props: Props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
