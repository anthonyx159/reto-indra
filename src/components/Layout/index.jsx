import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import styles from './Layout.module.scss';

function Layout() {
  return (
    <div className={styles.layout}>
      <div className={styles.bg}>
        <Header />
        <main className={styles.main}>
          <Outlet /> {/* Aquí se renderizan las rutas hijas */}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout;