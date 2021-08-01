import { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogin } from '../app/services/auth/actions';
import { InputText } from '../components/ui/InputText';
import { useForm } from '../hooks/useForm';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const initialForm = {
    email: '',
    password: '',
    remember: false,
  };

  const { form, handleInputChange, toggleCheck } = useForm(initialForm);

  const { email, password, remember } = form;

  const handleLogin = (evt: FormEvent) => {
    evt.preventDefault();

    remember
      ? localStorage.setItem('email', email)
      : localStorage.removeItem('email');

    dispatch(startLogin({ email, password }));
  };

  return (
    <div className="login container align-items-center justify-content-center d-flex text-light animate__animated animate__flipInY">
      <div className="row my-auto w-100 justify-content-center">
        <div className="col-12 col-md-8 col-lg-5 my-2 bg-dark card shadow p-5 align-items-center">
          <h2 className="fw-bold text-center pb-3 text-primary">Login</h2>
          <form className="w-100" onSubmit={handleLogin}>
            <div className="mb-2">
              <InputText
                icon="envelope"
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-2">
              <InputText
                icon="key"
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-2">
              <div className="form-check d-flex" onClick={toggleCheck}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={remember}
                  readOnly
                />
                <label className="form-check-label ms-2">Remember me</label>
              </div>
            </div>
            <div className="text-center">
              <button className="btn btn-primary my-4 px-5 text-uppercase fw-bold small">
                Login
              </button>
              <hr />
              <div>
                Don't have an account?
                <Link
                  to="/auth/register"
                  className="ms-2 fw-bold fs-5 text-decoration-none d-block d-lg-inline"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
