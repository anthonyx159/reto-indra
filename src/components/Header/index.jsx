import logo from '../../assets/logo.svg';
import styles from './Header.module.scss';
import iconPhone from '../../assets/icon-phone.svg';

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.header__container}>
        <img src={logo} alt="Rimac" className={styles.header__logo}/>
        <div className={styles.header__contact}>
          <div className={styles.header__text}>¡Compra por este medio!</div>
          <a href="tel:+5114116001" className={styles.header__link}><img src={iconPhone} alt="Teléfono" /> (01) 411 6001</a>
        </div>
      </nav>
    </header>
  )
}

export default Header;
