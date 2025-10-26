import logo from '../../assets/logo.svg';
import styles from './Header.module.scss';
import iconPhone from '../../assets/icon-phone.svg';

function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Rimac" />
      <div className={styles.header__contact}>
        <div className={styles.header__text}>¡Compra por este medio!</div>
        <a href="tel:+5114116001" target="_blank" className={styles.header__link}><img src={iconPhone} alt="Teléfono" /> (01) 411 6001</a>
      </div>
    </header>
  )
}

export default Header;
