import styles from './ProgressDesktop.module.scss';

function ProgressDesktop() {
  return (
    <>
      <div className={styles.ProgressDesktop}>
        <div className={styles.ProgressDesktop__box}>
          <div>1</div>
          <div>Planes y coberturas</div>
        </div>
        <div className={styles.ProgressDesktop__dots}>- - - -</div>
        <div className={`${styles.ProgressDesktop__box} ${styles.inactive}`}>
          <div>2</div>
          <div>Resumen</div>
        </div>
      </div>
    </>
  );
}

export default ProgressDesktop;