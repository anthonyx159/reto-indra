import styles from './Checkbox.module.scss';

function Checkbox ({ id, label }) {
  return (
    <>
      <div className={styles.checkbox}>
        <input type="checkbox" id={id} name={id} required/>
        <label for={id}>{ label }</label>
      </div>
    </>
  )
}

export default Checkbox