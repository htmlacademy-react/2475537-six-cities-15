import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks/index';
import Logged from './logged';
import NotLogged from './not-logged';
import { useAuthorizationStatusSelector } from '../../store/reducer/user/selectors';
import { isAuthorized } from '../../services/utils';

function AppHeader() {
  const authorizationStatus = useAppSelector(useAuthorizationStatusSelector);

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
              {isAuthorized(authorizationStatus) ? <Logged /> : <NotLogged />}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
