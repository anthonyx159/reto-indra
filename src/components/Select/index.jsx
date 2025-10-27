import styles from './Select.module.scss';
import iconSelect from '../../assets/icon-select.svg';

function Select({ register }) {
  return (
    <>
      <div className={styles.selectBox}>
        <select name="documentType" id="documentType" className={styles.select} {...register("documentType", { required: true })}>
          <option value="dni">DNI</option>
          <option value="ruc">RUC</option>
        </select>
        <img src={iconSelect} alt="Select Icon" className={styles.selectBox__icon} />
      </div>
    </>
  )
}

export default Select;