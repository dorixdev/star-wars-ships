import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../../app/services/auth/actions';
import { useLogged } from '../../hooks/useLogged';

export const Navbar = () => {
  const { uid } = useLogged();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src="/logo192.png"
            alt="Logo"
            width="30"
            height="24"
            className="me-2"
          />
          SW Ships
        </Link>

        <ul className="navbar-nav d-flex align-items-center">
          {!!!uid ? (
            <>
              <li className="nav-item">
                <Link
                  to="/auth/login"
                  className="btn btn-sm btn-primary text-uppercase"
                >
                  Login
                </Link>
              </li>
              <li className="nav-item ms-2">
                <Link
                  to="/auth/register"
                  className="btn btn-sm btn-outline-gold text-uppercase"
                >
                  Register
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/favorites" className="nav-link">
                  Favorites
                </Link>
              </li>
              <li className="nav-item ms-2">
                <button
                  onClick={handleLogout}
                  className="btn btn-sm btn-outline-danger text-uppercase"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};
