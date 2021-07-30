import { AppRouter } from './app/router/AppRouter';

export const App = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <button className="btn btn-outline-warning ms-auto" type="submit">
            Login
          </button>
        </div>
      </nav>
      <main className="container justify-content-center text-center text-warning py-4">
        <AppRouter />
      </main>
    </>
  );
};
