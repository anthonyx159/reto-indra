import styles from './Progress.module.scss';
import backIcon from '../../assets/icon-back.svg';

function Progress({ back }) {
  return (
    <>
      <div className={styles.progress}>
        <img src={backIcon} className={styles.progress__back} onClick={back} />
        <div className={styles.progress__box}>
          <div className={styles.progress__desc}>Paso 1 de 2</div>
          <div className={styles.progress__bar}>
            <div className={styles.progress__fill}></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Progress;