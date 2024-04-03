import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function NotLogged() {
  return (
    <li className="header__nav-item user">
      <a className="header__nav-link header__nav-link--profile" href="#">
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <Link to={AppRoute.Login} className="header__login">Sign in</Link>
      </a>
    </li>
  );
}

export default NotLogged;
