import styles from './CardPlan.module.scss';
import homeIcon from '../../assets/home.svg';  

function CardPlan() {
  return (
    <>
      <div className={styles.cardPlan}>
        <div className={styles.cardPlan__header}>
          <div className={styles.cardPlan__headerBox}>
            <div>Plan en Casa </div>
            <img src={homeIcon} alt="" />
          </div>
        </div>
        <div className={styles.cardPlan__body}>
          <div className={styles.cardPlan__bodyPlan}>
            <span>Costo del plan</span>
            <div>$39 al mes</div>
          </div>
          <div className={styles.cardPlan__divider}></div>
          <ul className={styles.cardPlan__features}>
            <li className={styles.cardPlan__feature}>
              <div className={styles.cardPlan__featureLeft}></div>
              <div className={styles.cardPlan__featureRight}>
                Médico general a domicilio por S/20 y medicinas cubiertas al 100%.
              </div>
            </li>
            <li className={styles.cardPlan__feature}>
              <div className={styles.cardPlan__featureLeft}></div>
              <div className={styles.cardPlan__featureRight}>
                Médico general a domicilio por S/20 y medicinas cubiertas al 100%.
              </div>
            </li>
            <li className={styles.cardPlan__feature}>
              <div className={styles.cardPlan__featureLeft}></div>
              <div className={styles.cardPlan__featureRight}>
                Médico general a domicilio por S/20 y medicinas cubiertas al 100%.
              </div>
            </li>
          </ul>
          <button className={styles.cardPlan__button}>Seleccionar plan</button>
        </div>
      </div>
    </>
  )
}

export default CardPlan;