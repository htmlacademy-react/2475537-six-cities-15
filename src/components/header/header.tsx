import { Link } from 'react-router-dom';
import { signOut } from '../../api/api-actions';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/index';

function AppHeader(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useAppDispatch();

  const handleLogout = (evt: React.MouseEvent) => {
    evt.preventDefault();
    dispatch(signOut());
  };

  const renderChilds = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      return (
        <>
          <li className="header__nav-item user">
            <a className="header__nav-link header__nav-link--profile" href="#">
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
              <span className="header__favorite-count">3</span>
            </a>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link" href="#" onClick={handleLogout}>
              <span className="header__signout">Sign out</span>
            </a>
          </li>
        </>
      );
    }

    return (
      <li className="header__nav-item user">
        <a className="header__nav-link header__nav-link--profile" href="#">
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <Link to={AppRoute.Login} className="header__login">Sign in</Link>
        </a>
      </li>
    );
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.Root} className="header__logo-link">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {renderChilds()}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
