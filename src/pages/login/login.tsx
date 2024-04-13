import { Navigate, Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks/index';
import LoginForm from '../../components/login-form/login-form';
import { useAuthorizationStatusSelector } from '../../store/reducer/user/selectors';
import { isAuthorized } from '../../services/utils';
import { cities } from '../../mocks/cities';

function Login() {
  const authorizationStatus = useAppSelector(useAuthorizationStatusSelector);

  if (isAuthorized(authorizationStatus)) {
    return (<Navigate to={AppRoute.Root} />);
  }

  const randomCity = cities[Math.floor(Math.random() * (cities.length + 1))];

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={AppRoute.Root} className="header__logo-link">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <LoginForm />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={`${AppRoute.Root}?city=${randomCity.code}`}>
                <span>{randomCity.title}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>);
}

export default Login;
