import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import styles from './Layout.module.scss';

function Layout() {
  const location = useLocation();
  const [isHome, setIsHome] = useState(location.pathname === '/');

  useEffect(() => {
    setIsHome(location.pathname === '/');
  }, [location]);

  return (
    <div className={styles.layout}>
      <div className={isHome ? styles.bg : styles.bg2}>
        <Header />
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout;