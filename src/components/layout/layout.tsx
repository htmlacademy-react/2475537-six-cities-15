import { Outlet } from 'react-router-dom';
import CitiesList from '../citiesList/citiesList';
import { cities } from '../../mocks/cities';
import Header from '../header/header';

function Layout() {
  return (
    <>
      <Header />
      <h1 className="visually-hidden">Cities</h1>
      <CitiesList cities={cities} />
      <Outlet />
    </>);
}

export default Layout;
