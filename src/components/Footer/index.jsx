import styles from './Footer.module.scss';
import logo2 from '../../assets/logo2.svg';

function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={logo2} alt="Logo 2" />
      <div className={styles.footer__divider}></div>
      <div className={styles.footer__text}>© 2023 RIMAC Seguros y Reaseguros.</div>
    </footer>
  )
}

export default Footer;
