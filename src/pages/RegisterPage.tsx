import { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startRegister } from '../app/services/auth/actions';
import { InputText } from '../components/ui/InputText';
import { useForm } from '../hooks/useForm';

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const initialForm = {
    email: '',
    password: '',
    remember: false,
  };

  const { form, handleInputChange } = useForm(initialForm);

  const { name, email, password } = form;

  const handleLogin = (evt: FormEvent) => {
    evt.preventDefault();
    dispatch(startRegister({ name, email, password }));
  };

  return (
    <div className="login container align-items-center justify-content-center d-flex text-light animate__animated animate__fadeIn">
      <div className="row my-auto w-100 justify-content-center">
        <div className="col-12 col-md-8 col-lg-5 my-2 bg-dark card shadow p-5 align-items-center">
          <h2 className="fw-bold text-center pb-3 text-primary">Register</h2>
          <form className="w-100" onSubmit={handleLogin}>
            <div className="mb-2">
              <InputText
                icon="user"
                name="name"
                type="text"
                placeholder="Name"
                value={name as string}
                onChange={handleInputChange}
              />
            </div>
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

            <div className="text-center">
              <button className="btn btn-primary my-4 px-5 text-uppercase fw-bold small">
                Sign Up
              </button>
              <hr />
              <div>
                Already have an account?
                <Link
                  to="/auth/login"
                  className="ms-2 fw-bold fs-5 text-decoration-none d-block d-lg-inline"
                >
                  Login here
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
