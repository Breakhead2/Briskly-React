import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Topbar from './Topbar';
import Navbar from './Navbar';

function Layout() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Outlet />
      <Footer />
      <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i class="fa fa-angle-double-up"></i>
      </a>
    </>
  );
}

export default Layout;
