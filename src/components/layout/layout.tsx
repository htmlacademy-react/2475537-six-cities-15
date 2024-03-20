import { Outlet } from 'react-router-dom';
import CitiesList from '../citiesList/citiesList';
import { cities } from '../../mocks/cities';

function Layout() {
  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <CitiesList cities={cities} />
      <Outlet />
    </>);
}

export default Layout;
