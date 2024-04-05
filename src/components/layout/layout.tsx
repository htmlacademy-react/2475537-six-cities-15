import { Outlet } from 'react-router-dom';
import CitiesList from '../citiesList/citiesList';
import { cities } from '../../mocks/cities';
import Header from '../header/header';

function Layout() {
  return (
    <div className="page page--gray page--main">
      <Header />
      <h1 className="visually-hidden">Cities</h1>
      <CitiesList cities={cities} />
      <Outlet />
    </div>);
}

export default Layout;
