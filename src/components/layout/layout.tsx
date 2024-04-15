import { Outlet } from 'react-router-dom';
import Header from '../header/header';

function Layout() {
  return (
    <div className="page page--gray page--main">
      <Header />
      <Outlet />
    </div>);
}

export default Layout;
