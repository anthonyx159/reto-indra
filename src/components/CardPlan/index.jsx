import styles from './CardPlan.module.scss';
import homeIcon from '../../assets/home.svg';  

function CardPlan({name, price, description, oldPrice = undefined}) {
  return (
    <>
      <div className={styles.cardPlan}>
        <div className={styles.cardPlan__box}>
          <div className={styles.cardPlan__header}>
            <div className={styles.cardPlan__headerBox}>
              <div>{name}</div>
              <img src={homeIcon} alt="" />
            </div>
          </div>
          <div className={styles.cardPlan__body}>
            <div className={styles.cardPlan__bodyPlan}>
              <span>Costo del plan</span>
              {oldPrice && <span>${oldPrice} antes</span>}
              <div>${price} al mes</div>
            </div>
            <div className={styles.cardPlan__divider}></div>
            <ul className={styles.cardPlan__features}>
              {description.map((item, index) => (
                <li className={styles.cardPlan__feature} key={index}>
                  <div className={styles.cardPlan__featureLeft}></div>
                  <div className={styles.cardPlan__featureRight}>
                    {item}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button className={styles.cardPlan__button}>Seleccionar plan</button>
      </div>
    </>
  )
}

export default CardPlan;