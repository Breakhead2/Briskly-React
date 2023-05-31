import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Topbar from './Topbar';
import Navbar from './Navbar';
import BackToTopBtn from './BackToTopBtn';

function Layout() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Outlet />
      <Footer />
      <BackToTopBtn />
    </>
  );
}

export default Layout;
