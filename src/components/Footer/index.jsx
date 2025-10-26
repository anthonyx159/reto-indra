import styles from './Footer.module.scss';
import logo2 from '../../assets/logo2.svg';
import logo2Dsktop from '../../assets/logo2-desktop.svg';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <picture>
          <source media="(min-width: 1024px)" srcset={logo2Dsktop} />
          <img src={logo2} alt="Logo 2" />
        </picture>
        <div className={styles.footer__divider}></div>
        <div className={styles.footer__text}>© 2023 RIMAC Seguros y Reaseguros.</div>
      </div>
    </footer>
  )
}

export default Footer;
