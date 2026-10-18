import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ScrollToTop from './ScrollToTop.jsx';
import BackToTop from './BackToTop.jsx';

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
