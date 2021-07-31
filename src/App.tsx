import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import { AppRouter } from './app/router/AppRouter';
import { store } from './app/config/store';
import { client } from './app/config/apolloClient';

export const App = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <main className="container justify-content-center text-center text-warning py-4">
          <AppRouter />
        </main>
      </ApolloProvider>
    </Provider>
  );
};
