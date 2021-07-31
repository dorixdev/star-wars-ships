// import { Provider } from 'react-redux';
import { AppRouter } from './app/router/AppRouter';
import { ApolloProvider } from '@apollo/client';
import { client } from './app/config/apolloClient';

export const App = () => {
  return (
    // <Provider store={store}>
    <ApolloProvider client={client}>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <button className="btn btn-warning ms-auto" type="submit">
            Login
          </button>
          <button className="btn btn-outline-success ms-2" type="submit">
            Register
          </button>
        </div>
      </nav>
      <main className="container justify-content-center text-center text-warning py-4">
        <AppRouter />
      </main>
    </ApolloProvider>
    // </Provider>
  );
};
