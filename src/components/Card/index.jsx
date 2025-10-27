import { useId } from 'react';
import styles from './Card.module.scss';

function Card({
  name,
  id,
  title = 'Para mí',
  desc = 'Cotiza tu seguro de salud y agrega familiares si así lo deseas.',
  icon,
  onChange = () => {},
  
}) {
  const uid = useId();
  const inputId = id ?? `card-${uid}`;
  // const gradId = `g-${uid}`; // evita colisiones de <defs> entre varias cards

  return (
    <div className={styles.optionCard}>
      <input
        className={styles.optionCard__input}
        type="radio"
        name={name}
        id={inputId}
        // checked={checked}
        onChange={onChange}
      />

      <div className={styles.optionCard__content}>
        <div className={styles.optionCard__header}>
          <span className={styles.optionCard__icon}>
            <img src={icon} alt={title} />
          </span>

          <h3 className={styles.optionCard__title}>{title}</h3>
        </div>

        <p className={styles.optionCard__desc}>{desc}</p>
      </div>

      <span className={styles.optionCard__selector}></span>
    </div>
  );
}

export default Card;